import { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IInfoMenuItemProps {
    icon: keyof typeof Feather.glyphMap;
    title: string;
    onPress: () => void;
    isLast?: boolean;
}

const InfoMenuItem: FC<IInfoMenuItemProps> = ({ 
    icon, 
    title, 
    onPress, 
    isLast 
}) => (
    <TouchableOpacity 
        onPress={onPress}
        className={`flex-row justify-between items-center py-4 px-5 ${!isLast ? 'border-b border-zinc-800' : ''} active:bg-zinc-800/50`}
    >
        <View className='flex-row items-center gap-3'>
            <View className='w-9 h-9 bg-zinc-800 rounded-xl items-center justify-center'>
                <Feather name={icon} size={16} color="#0ddb74" />
            </View>
            <Text className='text-white text-base'>{title}</Text>
        </View>
        <Feather name="chevron-right" size={18} color="#666666" />
    </TouchableOpacity>
);

export default InfoMenuItem;