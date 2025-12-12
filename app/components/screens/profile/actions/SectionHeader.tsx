import { FC } from 'react';
import { View, Text } from 'react-native';

interface ISectionHeaderProps {
    title: string;
}

const SectionHeader: FC<ISectionHeaderProps> = ({ title }) => { 
    return (
        <View className='flex-row items-center justify-between mb-3 px-1'>
            <Text className='text-white text-lg font-bold'>{title}</Text>
        </View>
    )
}

export default SectionHeader;