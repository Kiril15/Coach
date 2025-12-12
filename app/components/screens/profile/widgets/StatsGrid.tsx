import { FC } from 'react';
import { View } from 'react-native';
import GameItem from '../actions/GameItem';
import { useTranslation } from 'react-i18next';
import cn from 'clsx';
import { useFormatNumber } from '@/components/hooks/useFormatNumber';

interface IStatsGridProps {
    level: number;
    experience: number;
    streak: number;
    styles?: string;
}

const StatsGrid: FC<IStatsGridProps> = ({ level, experience, streak, styles }) => {
    const { t } = useTranslation();

    return (
        <View className={cn('flex-row gap-2 mb-6', styles)}>
            <GameItem 
                text={t('profile.statLevel')} 
                label={level} 
                icon='award'
                color='#0ddb74'
            />
            <GameItem 
                text={t('profile.statXP')} 
                label={useFormatNumber(experience)}
                icon='trending-up'
                color='#0ddb74'
            />
            <GameItem 
                text={t('profile.statStreak')} 
                label={streak}
                icon='zap'
                color={streak > 0 ? '#0ddb74' : '#a1a1aa'}
                isInactive={streak === 0}
            />
        </View>
    );
};

export default StatsGrid;