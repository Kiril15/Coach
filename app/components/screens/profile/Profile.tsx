import { useActions } from '@/components/hooks/useAction';
import Button from '@/components/ui/Button';
import { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import Layout from '@/components/ui/layout/Layout';
import { useAuth } from '@/components/hooks/useAuth';
import { useTypedSelector } from '@/components/hooks/useTypedSelector';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ProfileHeader from './widgets/ProfileHeader';
import StatsGrid from './widgets/StatsGrid';
import PremiumBanner from './widgets/PremiumBanner';
import AbilitiesSection from './widgets/AbilitiesSection';
import PhysicalStatsSection from './widgets/PhysicalStatsSection';
import HelpSection from './widgets/HelpSection';

import { useTypedNavigation } from '@/components/hooks/useTypedNavigation';
import EditButton from './actions/EditButton';
import { useTranslation } from 'react-i18next';

const Profile: FC = () => {
    const { logout, getBasicAbilities, deleteUser } = useActions();
    const { user } = useAuth();
    const { 
        pullUp, 
        pushUp, 
        dips, 
        weight, 
        height, 
        age, 
        injury 
    } = useTypedSelector(state => state.basicAbilities);
    const navigation = useTypedNavigation()
    const {t} = useTranslation()

    useEffect(() => {
        getBasicAbilities();
    }, []);

    const handlePremiumPress = () => {
        console.log('Navigate to Premium');
    };

    return (
        <Layout>
            <View className='w-5/6 mx-auto pb-8'>

                <EditButton/>
                
                <ProfileHeader email={user?.email}/>

                <StatsGrid 
                    level={user?.level ?? 1}
                    experience={user?.expirience ?? 0}
                    streak={user?.dayStrick ?? 0}
                />

                <PremiumBanner onPress={handlePremiumPress} />

                <AbilitiesSection 
                    pullUp={pullUp ?? 0}
                    pushUp={pushUp ?? 0}
                    dips={dips ?? 0}
                />

                <PhysicalStatsSection 
                    weight={weight ?? 0}
                    height={height ?? 0}
                    age={age ?? 0}
                    injury={injury || ''}
                />

                <HelpSection 
                    onFAQPress={() => navigation.navigate("FAQ")}
                    onHowItWorksPress={() => navigation.navigate("Works")}
                    onTermsPress={() => navigation.navigate("TermsConditions")}
                    onPrivacyPress={() => navigation.navigate("PrivacyPolicy")}
                />

                <Button 
                    onPress={() => logout()} 
                    className='w-full'
                >
                    <View className='flex-row gap-2 justify-center items-center'>
                        <Feather name="log-out" size={20} color="white" />
                        <Text className='text-white'>{t('profile.logout')}</Text>
                    </View>
                </Button>

                <Button 
                    onPress={() => deleteUser()}
                    className='w-full bg-red-600 border-red-600'
                >
                    <View className='flex-row gap-2 justify-center items-center'>
                        <AntDesign name="delete" size={20} color="white" />
                        <Text className='text-white'>{t('profile.delete')}</Text>
                    </View>
                </Button>

            </View>
        </Layout>
    );
};

export default Profile;