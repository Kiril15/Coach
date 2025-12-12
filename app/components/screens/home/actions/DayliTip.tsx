import React, { FC, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '@/components/hooks/useTypedSelector';
import { useActions } from '@/components/hooks/useAction';

interface IDailyTipProps {
    styles?: string;
}

const DailyTip: FC<IDailyTipProps> = ({ styles }) => {
    const { t } = useTranslation();
    const { text, type, isLoading, error } = useTypedSelector(state => state.dayliTip);
    const {generateDailyTip} = useActions()


    useEffect(() => {
        generateDailyTip();
    }, []);

    const getTipIcon = () => {
        switch (type) {
            case 'recovery':
                return 'heart';
            case 'nutrition':
                return 'coffee';
            case 'training':
                return 'activity';
            case 'motivation':
                return 'zap';
            default:
                return 'info';
        }
    };

    const handleRefresh = () => {
        generateDailyTip({ forceRefresh: true })
    };

    if (error) {
        return (
            <View className={`bg-zinc-800/40 rounded-2xl p-5 border border-zinc-700/50 ${styles}`}>
                <View className='flex-row items-start gap-4'>
                    <View className='w-12 h-12 bg-red-500/20 rounded-xl items-center justify-center'>
                        <Feather name="alert-circle" size={24} color="#ef4444" />
                    </View>
                    <View className='flex-1'>
                        <Text className='text-white text-lg font-bold mb-2'>
                            {t('home.tipError')}
                        </Text>
                        <TouchableOpacity 
                            onPress={handleRefresh}
                            className='bg-neon/20 rounded-lg py-2 px-4 self-start'
                            activeOpacity={0.7}
                        >
                            <Text className='text-neon text-sm font-semibold'>
                                {t('home.tipRetry')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View className={`bg-zinc-800/40 rounded-2xl p-5 border border-zinc-700/50 ${styles}`}>
            <View className='flex-row items-start gap-4'>
                <View className='w-12 h-12 bg-neon/20 rounded-xl items-center justify-center'>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#0ddb74" />
                    ) : (
                        <TouchableOpacity onPress={() => handleRefresh()}>
                            <Feather name={getTipIcon()} size={24} color="#0ddb74" />
                        </TouchableOpacity>
                    )}
                </View>
                <View className='flex-1'>
                    <View className='flex-row items-center justify-between mb-2'>
                        <Text className='text-white text-lg font-bold'>
                            {t('home.tipTitle')}
                        </Text>
                        {!isLoading && (
                            <TouchableOpacity onPress={handleRefresh} activeOpacity={0.7}>
                                <Feather name="refresh-cw" size={18} color="#a1a1aa" />
                            </TouchableOpacity>
                        )}
                    </View>

                    {isLoading ? (
                        <View className='py-2'>
                            <View className='h-3 bg-zinc-700/50 rounded mb-2 w-full' />
                            <View className='h-3 bg-zinc-700/50 rounded mb-2 w-5/6' />
                            <View className='h-3 bg-zinc-700/50 rounded w-4/6' />
                        </View>
                    ) : (
                        <Text className='text-zinc-400 text-sm leading-6'>
                            {text || t('home.tipDefault')}
                        </Text>
                    )}

                    {type && !isLoading && (
                        <View className='mt-3 self-start'>
                            <View className='bg-neon/10 rounded-lg px-3 py-1'>
                                <Text className='text-neon text-xs font-semibold uppercase'>
                                    {t(`home.tipType.${type}` as any)}
                                </Text>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

export default DailyTip;