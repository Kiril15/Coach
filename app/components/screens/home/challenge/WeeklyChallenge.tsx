import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import ChallengeItem from './ChallengeItem';
import { useActions } from '@/components/hooks/useAction';
import Loader from '@/components/ui/layout/Loader';
import { useWeeklyChallenge } from './useWeeklyChallenge';

const WeeklyChallenge = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false); 
    const [measuredHeight, setMeasuredHeight] = useState(0);
    const { updateChallengeProgress } = useActions();
    const {isLoading, challenges, totalCount, completedCount, overallProgressPercent, allCompleted, isRewardNotClaimed} = useWeeklyChallenge()

    const animatedStyle = useAnimatedStyle(() => ({
        height: withTiming(open ? measuredHeight : 0, { duration: 300 }),
        opacity: withTiming(open ? 1 : 0, { duration: 300 }),
        marginBottom: withTiming(open ? 16 : 0, { duration: 300 }),
        overflow: 'hidden',
    }));

    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    if (isLoading) return <Loader/>;

    return (
        <View className='mb-5'>
            <View className='bg-zinc-800/40 rounded-2xl p-5 border border-zinc-700/50'>
                <View className='flex-row items-center justify-between mb-4'>
                    <View className='flex-row items-center gap-2'>
                        <View className='w-2 h-2 bg-neon rounded-full' />
                        <Text className='text-white text-lg font-bold'>{t('home.weeklyGoals')}</Text>
                    </View>
                    <View className='bg-neon/10 rounded-lg px-3 py-1'>
                        <Text className='text-neon text-xs font-bold'>
                            {completedCount}/{totalCount}
                        </Text>
                    </View>
                </View>

                <View className='mb-4'>
                    <View className='flex-row items-center justify-between mb-2'>
                        <Text className='text-zinc-400 text-sm font-medium'>{t('home.overallProgress')}</Text>
                        <Text className='text-white text-sm font-bold'>{overallProgressPercent}%</Text>
                    </View>
                    <View className='h-2 bg-zinc-700/50 rounded-full overflow-hidden'>
                        <View 
                            className='h-full bg-neon rounded-full' 
                            style={{ width: `${overallProgressPercent}%` }} 
                        />
                    </View>
                </View>

                <View 
                    className='absolute opacity-0 pointer-events-none'
                    onLayout={(e) => {
                        const h = e.nativeEvent.layout.height;
                        if (h > 0 && Math.abs(measuredHeight - h) > 1) {
                            setMeasuredHeight(h);
                        }
                    }}
                >
                    <View className='gap-3'>
                        {challenges.map(c => (
                            <ChallengeItem key={c.id} challenge={c} />
                        ))}
                    </View>
                </View>

                <Animated.View style={animatedStyle}>
                    <View className='gap-3'>
                        {challenges.map(c => (
                            <ChallengeItem 
                                key={c.id} 
                                challenge={c} 
                                onUpdate={() => updateChallengeProgress({title: c.title, current: 1})}
                            />
                        ))}
                    </View>
                </Animated.View>

                {allCompleted ? (
                    <View className='bg-neon/10 rounded-lg p-3 flex-row items-center gap-3 mt-2'>
                        <View className='w-8 h-8 bg-neon rounded-full items-center justify-center'>
                            <Feather name="award" size={16} color="#0a0a0a" />
                        </View>
                        <View className='flex-1'>
                            <Text className='text-neon text-sm font-semibold'>
                                {t('home.allGoalsCompleted')}
                            </Text>
                            {/* {expAwarded && (
                                <Text className='text-neon/70 text-xs mt-0.5'>
                                    +{CHALLENGE_COMPLETION_EXP} XP ✓
                                </Text>
                            )} */}
                        </View>
                    </View>
                ) : (
                    <View className='flex-row items-center gap-2 mt-2'>
                        <Feather name="zap" size={14} color="#a1a1aa" />
                        <Text className='text-zinc-400 text-xs'>{t('home.keepGoing')}</Text>
                    </View>
                )}
            </View> 

            <TouchableOpacity 
                onPress={handleToggle} 
                className='mt-2 flex-row justify-end items-center gap-1 p-2'
                activeOpacity={0.7}
            >
                <Text className="text-zinc-400 text-xs font-medium">
                    {open ? t('home.hideAll') : t('home.showAll')}
                </Text>
                <Feather 
                    name={open ? 'chevron-up' : 'chevron-down'} 
                    size={14} 
                    color="#a1a1aa" 
                />
            </TouchableOpacity>
        </View>
    );
};

export default WeeklyChallenge;