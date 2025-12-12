import { FC } from 'react';
import { View, Text } from 'react-native';

interface IStatCardProps {
    label: string;
    value: string | number;
    unit?: string;
}

const StatCard: FC<IStatCardProps> = ({ label, value, unit }) => (
    <View className='flex-1 min-w-[45%] bg-zinc-900/60 rounded-xl p-4 border border-zinc-800'>
        <Text className='text-muted text-xs mb-1'>{label}</Text>
        <Text className='text-white text-xl font-bold'>
            {value} {unit && <Text className='text-sm text-muted'>{unit}</Text>}
        </Text>
    </View>
);

export default StatCard;