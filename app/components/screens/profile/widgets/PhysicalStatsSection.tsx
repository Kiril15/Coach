import { FC } from 'react';
import { View } from 'react-native';
import StatCard from '../actions/StatCard';
import SectionHeader from '../actions/SectionHeader';
import { useTranslation } from 'react-i18next';

interface IPhysicalStatsSectionProps {
    weight: string;
    height: string;
    age: string;
    injury: string;
}

const PhysicalStatsSection: FC<IPhysicalStatsSectionProps> = ({ 
    weight, 
    height, 
    age, 
    injury,
}) => {
    const {t} = useTranslation();

    return (
        <View className='mb-6'>
            <SectionHeader title={t('profile.sectionStatsTitle')}/>
            
            <View className='flex-row flex-wrap gap-2'>
                <StatCard 
                    label={t('onboarding.weight')} 
                    value={weight} 
                    unit={t('onboarding.kg')} 
                />
                <StatCard 
                    label={t('onboarding.height')} 
                    value={height} 
                    unit={t('onboarding.cm')} 
                />
                <StatCard 
                    label={t('onboarding.age')} 
                    value={age} 
                    unit={t('profile.unitYrs')} 
                />
                <StatCard 
                    label={t('onboarding.injuryLabel')} 
                    value={injury || t('profile.statusHealthy')} 
                />
            </View>
        </View>
    );
};

export default PhysicalStatsSection;