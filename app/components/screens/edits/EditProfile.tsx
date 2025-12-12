import Layout from '@/components/ui/layout/Layout';
import { FC, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '@/components/hooks/useTypedSelector';
import { useNavigation } from '@react-navigation/native';
import Modal from '@/components/ui/Modal';

import Button from '@/components/ui/Button';
import AvatarUpload from './widgets/AvatarUpload';
import { useForm } from 'react-hook-form';
import { BasicAbilities } from '@/types/basic.interface';
import { Feather } from '@expo/vector-icons';
import { updateBasicAbilities, getBasicAbilities } from '@/store/basicAbilities/basicAbilities.actions';
import { useTypesDispatch } from '@/components/hooks/useTypedDispatch';
import Loader from '@/components/ui/layout/Loader';
import EditForm from './widgets/EditForm';
import BackArrow from '@/components/ui/layout/BackArrow';

const EditProfile: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const dispatch = useTypesDispatch()
    const [modalVisible, setModalVisible] = useState(false);
    const [modalError, setModalError] = useState('');

    const { 
        pullUp, 
        pushUp, 
        dips, 
        weight, 
        height, 
        age, 
        injury, 
        isLoading,
    } = useTypedSelector(state => state.basicAbilities);

    const { control, handleSubmit, reset } = useForm<BasicAbilities>({
        mode: 'onChange'
    });

    useEffect(() => {
        if (pullUp || pushUp || dips || weight || height || age) {
            reset({
                pullUp: pullUp || '',
                pushUp: pushUp || '',
                dips: dips || '',
                weight: weight || '',
                height: height || '',
                age: age || '',
                injury: injury || ''
            });
        }
    }, [pullUp, pushUp, dips, weight, height, age, injury]);

    const handleSave = async (data: BasicAbilities) => {
        try {
            await dispatch(updateBasicAbilities(data)).unwrap()
            await dispatch(getBasicAbilities()).unwrap();
            navigation.goBack();
        } catch (err: any) {
            setModalError(err);
            setModalVisible(true);
        }
    };

    return (
        <Layout>
            <View className='relative w-5/6 mx-auto'>
                <BackArrow styles='absolute -top-7'/>
                <View className='my-8'>
                    <AvatarUpload />
                </View>

                <EditForm control={control} />

                <Button 
                    onPress={handleSubmit(handleSave)} 
                    disabled={isLoading}
                    className='w-full'
                >
                    <View className='flex-row items-center justify-center gap-2'>
                        {isLoading ? <Loader/> : (
                            <>
                                <Feather name="save" size={18} color="white" />
                                <Text className='text-white font-semibold'>
                                    {t('edit.save')}
                                </Text>
                            </>
                        )}
                    </View>
                </Button>
                <Modal
                    title={t('Error')}
                    visible={modalVisible}
                    onClose={() => {
                        setModalVisible(false)
                        navigation.goBack();
                    }}
                >
                <Text className='text-white text-base'>
                    {modalError}
                </Text>
                <View className='mt-4'>
                    <Button onPress={() => {
                        setModalVisible(false)
                        navigation.goBack();
                    }}>
                        <Text className='text-white font-semibold'>
                            Ok
                        </Text>
                    </Button>
                </View>
            </Modal>
            </View>
        </Layout>
    );
};

export default EditProfile;