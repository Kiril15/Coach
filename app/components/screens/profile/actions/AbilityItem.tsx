import { FC } from 'react';
import { View, Text } from 'react-native';

interface IAbilityItemProps {
    title: string;
    value: string | number;
    unit?: string;
}

const AbilityItem: FC<IAbilityItemProps> = ({ title, value, unit = '' }) => (
    <View className='flex-row justify-between items-center py-3 px-4 bg-zinc-800/30 rounded-xl mb-2 border border-zinc-700/30'>
        <Text className='text-zinc-300 text-base'>{title}</Text>
        <Text className='text-white text-lg font-semibold'>
            {value} {unit && <Text className='text-sm text-muted'>{unit}</Text>}
        </Text>
    </View>
);

export default AbilityItem;