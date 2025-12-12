import { FC } from 'react';
import { View } from 'react-native';
import AbilityItem from '../actions/AbilityItem';
import SectionHeader from '../actions/SectionHeader';
import { useTranslation } from 'react-i18next';

interface IAbilitiesSectionProps {
    pullUp: string;
    pushUp: string;
    dips: string;
}

const AbilitiesSection: FC<IAbilitiesSectionProps> = ({ 
    pullUp, 
    pushUp, 
    dips, 
}) => { 
    const {t} = useTranslation()
    return (
        <View className='mb-6'>
            <SectionHeader title={t('profile.sectionAbilitiesTitle')}/>
            <View className='bg-zinc-900/60 rounded-2xl p-3 border border-zinc-800'>
                <AbilityItem title={t('onboarding.pullUps')} value={pullUp} unit={t('onboarding.reps')} />
                <AbilityItem title={t('onboarding.pushUps')} value={pushUp} unit={t('onboarding.reps')} />
                <AbilityItem title={t('onboarding.dips')} value={dips} unit={t('onboarding.reps')} />
            </View>
        </View>
    )
}

export default AbilitiesSection;
