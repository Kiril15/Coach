import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/ui/layout/Layout';
import BackArrow from '@/components/ui/layout/BackArrow';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: FC = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData: FAQItem[] = [
        {
            question: t('faq.question1'),
            answer: t('faq.answer1')
        },
        {
            question: t('faq.question2'),
            answer: t('faq.answer2')
        },
        {
            question: t('faq.question3'),
            answer: t('faq.answer3')
        },
        {
            question: t('faq.question4'),
            answer: t('faq.answer4')
        },
        {
            question: t('faq.question5'),
            answer: t('faq.answer5')
        },
        {
            question: t('faq.question6'),
            answer: t('faq.answer6')
        },
        {
            question: t('faq.question7'),
            answer: t('faq.answer7')
        },
        {
            question: t('faq.question8'),
            answer: t('faq.answer8')
        },
        {
            question: t('faq.question9'),
            answer: t('faq.answer9')
        },
        {
            question: t('faq.question10'),
            answer: t('faq.answer10')
        }
    ];

    return (
        <Layout>
            <View className='relative'>
                <BackArrow styles='absolute -top-7 left-6'/>
                <View className="px-6 py-8">
                    <Text className="text-white text-3xl font-bold mb-2">
                        {t('faq.title')}
                    </Text>
                    <Text className="text-muted text-base">
                        {t('faq.subtitle')}
                    </Text>
                </View>

                <View className="px-6 pb-6 gap-3">
                    {faqData.map((item, index) => (
                        <View
                            key={index}
                            className="bg-card/30 border border-border/20 rounded-2xl overflow-hidden"
                        >
                            <TouchableOpacity
                                onPress={() => toggleQuestion(index)}
                                className="px-5 py-4 flex-row justify-between items-center"
                                activeOpacity={0.7}
                            >
                                <Text className="text-white text-base font-semibold flex-1 pr-4">
                                    {item.question}
                                </Text>
                                <View
                                    style={{
                                        transform: [{ rotate: openIndex === index ? '180deg' : '0deg' }]
                                    }}
                                >
                                    <Feather name="chevron-down" size={24} color="#0ddb74" />
                                </View>
                            </TouchableOpacity>

                            {openIndex === index && (
                                <View className="px-5 pb-4">
                                    <Text className="text-muted leading-6">
                                        {item.answer}
                                    </Text>
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                <View className="px-6 pb-8">
                    <View className="bg-gradient-to-br from-neon/10 to-transparent border-2 border-neon/40 rounded-2xl p-6">
                        <View className="flex-row items-center gap-2 mb-3">
                            <View className="w-2 h-2 bg-neon rounded-full" />
                            <Text className="text-neon text-xs font-bold uppercase tracking-wider">
                                {t('faq.contactLabel')}
                            </Text>
                        </View>
                        <Text className="text-white text-xl font-bold mb-2">
                            {t('faq.contactTitle')}
                        </Text>
                        <Text className="text-muted text-sm mb-5">
                            {t('faq.contactSubtitle')}
                        </Text>
                        <TouchableOpacity
                            className="bg-neon rounded-xl py-3 items-center"
                            activeOpacity={0.8}
                        >
                            <Text className="text-background font-bold text-base">
                                {t('faq.contactButton')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Layout>
    );
};

export default FAQ;