import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTypedNavigation } from '@/components/hooks/useTypedNavigation';

const EditButton: FC = () => {
    const navigation = useTypedNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} className='absolute -top-7 right-0'>
            <Feather name="edit" size={22} color="#FFFFFF" />
        </TouchableOpacity>
    );
};

export default EditButton;