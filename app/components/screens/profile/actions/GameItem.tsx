import { FC } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IGameItemProps {
    text: string;
    label: string | number;
    icon?: keyof typeof Feather.glyphMap;
    color?: string;
    isInactive?: boolean;
}

const GameItem: FC<IGameItemProps> = ({ 
    text, 
    label, 
    icon, 
    color = '#10B981',
    isInactive = false 
}) => {
    const textColorClass = isInactive ? 'text-zinc-500' : 'text-white';
    const labelColorClass = isInactive ? 'text-zinc-500' : 'text-white';

    return (
        <View className='flex-1 bg-zinc-800/40 rounded-2xl p-4 border border-zinc-700/50'>
            <View className='flex-row items-center justify-between mb-2'>
                {icon && <Feather name={icon} size={20} color={color} />}
                <Text className={`text-2xl font-bold ${labelColorClass}`}>
                    {label ?? 0}
                </Text>
            </View>
            <Text className={`${textColorClass} text-xs font-medium`}>
                {text}
            </Text>
        </View>
    );
}

export default GameItem;