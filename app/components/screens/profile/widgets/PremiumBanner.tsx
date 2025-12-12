import { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

interface IPremiumBannerProps {
    onPress: () => void;
}

const PremiumBanner: FC<IPremiumBannerProps> = ({ onPress }) => {
    const { t } = useTranslation();

    return (
        <TouchableOpacity 
            onPress={onPress} 
            className='w-full bg-gradient-to-br from-neon/10 to-transparent border-2 border-neon/40 rounded-2xl p-5 mb-8 relative overflow-hidden'
            activeOpacity={0.7}
        >
            <View className='absolute -right-8 -top-8 w-32 h-32 bg-neon/10 rounded-full' />
            <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                    <View className='flex-row items-center gap-2 mb-2'>
                        <View className='w-2 h-2 bg-neon rounded-full' />
                        <Text className='text-neon text-xs font-bold uppercase tracking-wider'>
                            {t('profile.premiumLabel')}
                        </Text>
                    </View>
                    <Text className='text-white text-lg font-bold mb-1'>
                        {t('profile.premiumTitle')}
                    </Text>
                    <Text className='text-muted text-xs'>
                        {t('profile.premiumSubtitle')}
                    </Text>
                </View>
                <View className='w-12 h-12 bg-neon/20 rounded-full items-center justify-center'>
                    <Feather name="arrow-right" size={20} color="#0ddb74" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PremiumBanner;