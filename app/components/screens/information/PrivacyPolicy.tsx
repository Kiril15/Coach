import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/ui/layout/Layout';
import BackArrow from '@/components/ui/layout/BackArrow';

interface Section {
    title: string;
    content: string;
}

const PrivacyPolicy: FC = () => {
    const { t } = useTranslation();

    const sections: Section[] = [
        {
            title: t('privacy.section1Title'),
            content: t('privacy.section1Content')
        },
        {
            title: t('privacy.section2Title'),
            content: t('privacy.section2Content')
        },
        {
            title: t('privacy.section3Title'),
            content: t('privacy.section3Content')
        },
        {
            title: t('privacy.section4Title'),
            content: t('privacy.section4Content')
        },
        {
            title: t('privacy.section5Title'),
            content: t('privacy.section5Content')
        },
        {
            title: t('privacy.section6Title'),
            content: t('privacy.section6Content')
        },
        {
            title: t('privacy.section7Title'),
            content: t('privacy.section7Content')
        },
        {
            title: t('privacy.section8Title'),
            content: t('privacy.section8Content')
        },
        {
            title: t('privacy.section9Title'),
            content: t('privacy.section9Content')
        }
    ];

    return (
        <Layout>
            <View className='relative'>
                <BackArrow styles='absolute -top-7 left-6'/>

                <View className="px-6 py-8">
                    <View className="flex-row items-center gap-2 mb-3">
                        <View className="w-2 h-2 bg-neon rounded-full" />
                        <Text className="text-neon text-xs font-bold uppercase tracking-wider">
                            {t('privacy.label')}
                        </Text>
                    </View>
                    <Text className="text-white text-3xl font-bold mb-2">
                        {t('privacy.title')}
                    </Text>
                    <Text className="text-muted text-base">
                        {t('privacy.subtitle')}
                    </Text>
                    <Text className="text-muted text-sm mt-2">
                        {t('privacy.lastUpdated')}
                    </Text>
                </View>

                <View className="px-6 pb-6 gap-6">
                    {sections.map((section, index) => (
                        <View key={index} className="bg-card/30 border border-border/20 rounded-2xl p-5">
                            <View className="flex-row items-start gap-3 mb-3">
                                <View className="w-8 h-8 bg-neon/20 rounded-lg items-center justify-center">
                                    <Text className="text-neon text-sm font-bold">{index + 1}</Text>
                                </View>
                                <Text className="text-white text-lg font-bold flex-1">
                                    {section.title}
                                </Text>
                            </View>
                            <Text className="text-muted leading-6">
                                {section.content}
                            </Text>
                        </View>
                    ))}
                </View>

                <View className="px-6 pb-8">
                    <View className="bg-gradient-to-br from-neon/10 to-transparent border-2 border-neon/40 rounded-2xl p-6">
                        <View className="flex-row items-center gap-2 mb-3">
                            <View className="w-2 h-2 bg-neon rounded-full" />
                            <Text className="text-neon text-xs font-bold uppercase tracking-wider">
                                {t('privacy.contactLabel')}
                            </Text>
                        </View>
                        <Text className="text-white text-xl font-bold mb-2">
                            {t('privacy.contactTitle')}
                        </Text>
                        <Text className="text-muted text-sm">
                            {t('privacy.contactContent')}
                        </Text>
                    </View>
                </View>
            </View>
        </Layout>
    );
};

export default PrivacyPolicy;