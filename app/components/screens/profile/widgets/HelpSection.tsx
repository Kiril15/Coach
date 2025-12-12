import { FC } from 'react';
import { View, Text } from 'react-native';
import InfoMenuItem from '../actions/InfoMenuItem';
import { useTranslation } from 'react-i18next';

interface IHelpSectionProps {
    onFAQPress: () => void;
    onHowItWorksPress: () => void;
    onTermsPress: () => void;
    onPrivacyPress: () => void;
}

const HelpSection: FC<IHelpSectionProps> = ({ 
    onFAQPress,
    onHowItWorksPress,
    onTermsPress,
    onPrivacyPress
}) => {
    const {t} = useTranslation()

    return (
        <View className='mb-6'>
            <Text className='text-white text-lg font-bold mb-3 px-1'>
                {t('profile.sectionHelpInfoTitle')}
            </Text>

            <View className='bg-zinc-900/60 rounded-2xl border border-zinc-800 overflow-hidden'>
                <InfoMenuItem 
                    icon='help-circle'
                    title={t('profile.menuFAQ')}
                    onPress={onFAQPress}
                />
                <InfoMenuItem 
                    icon='info'
                    title={t('profile.menuHowItWorks')}
                    onPress={onHowItWorksPress}
                />
                <InfoMenuItem 
                    icon='file-text'
                    title={t('profile.menuTerms')}
                    onPress={onTermsPress}
                />
                <InfoMenuItem 
                    icon='shield'
                    title={t('profile.menuPrivacy')}
                    onPress={onPrivacyPress}
                    isLast
                />
            </View>
        </View>
    )
}

export default HelpSection;
