import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/ui/layout/Layout';
import BackArrow from '@/components/ui/layout/BackArrow';

interface Section {
    title: string;
    content: string;
}

const TermsConditions: FC = () => {
    const { t } = useTranslation();

    const sections: Section[] = [
        {
            title: t('terms.section1Title'),
            content: t('terms.section1Content')
        },
        {
            title: t('terms.section2Title'),
            content: t('terms.section2Content')
        },
        {
            title: t('terms.section3Title'),
            content: t('terms.section3Content')
        },
        {
            title: t('terms.section4Title'),
            content: t('terms.section4Content')
        },
        {
            title: t('terms.section5Title'),
            content: t('terms.section5Content')
        },
        {
            title: t('terms.section6Title'),
            content: t('terms.section6Content')
        },
        {
            title: t('terms.section7Title'),
            content: t('terms.section7Content')
        },
        {
            title: t('terms.section8Title'),
            content: t('terms.section8Content')
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
                            {t('terms.label')}
                        </Text>
                    </View>
                    <Text className="text-white text-3xl font-bold mb-2">
                        {t('terms.title')}
                    </Text>
                    <Text className="text-muted text-base">
                        {t('terms.subtitle')}
                    </Text>
                    <Text className="text-muted text-sm mt-2">
                        {t('terms.lastUpdated')}
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
                            <Text className="text-muted leading-7">
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
                                {t('terms.contactLabel')}
                            </Text>
                        </View>
                        <Text className="text-white text-xl font-bold mb-2">
                            {t('terms.contactTitle')}
                        </Text>
                        <Text className="text-muted text-sm">
                            {t('terms.contactContent')}
                        </Text>
                    </View>
                </View>
            </View>
        </Layout>
    );
};

export default TermsConditions;