import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/ui/layout/Layout';
import BackArrow from '@/components/ui/layout/BackArrow';

interface StepProps {
  number: number;
  icon: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: FC<StepProps> = ({ number, icon, title, description, isLast }) => (
  <View className="flex-row gap-4">
    {/* Timeline */}
    <View className="items-center">
      <View className="w-12 h-12 bg-neon/20 border-2 border-neon rounded-full items-center justify-center">
        <Feather name={icon as any} size={20} color="#0ddb74" />
      </View>
      {!isLast && (
        <View className="w-0.5 h-20 bg-border/30 my-2" />
      )}
    </View>

    {/* Content */}
    <View className="flex-1 pb-6">
      <View className="flex-row items-center gap-2 mb-2">
        <View className="w-6 h-6 bg-neon/20 rounded-full items-center justify-center">
          <Text className="text-neon text-xs font-bold">{number}</Text>
        </View>
        <Text className="text-white text-lg font-bold">{title}</Text>
      </View>
      <Text className="text-muted leading-6">{description}</Text>
    </View>
  </View>
);

const Works: FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: 'user-plus',
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Description')
    },
    {
      icon: 'activity',
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Description')
    },
    {
      icon: 'cpu',
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Description')
    },
    {
      icon: 'target',
      title: t('howItWorks.step4Title'),
      description: t('howItWorks.step4Description')
    },
    {
      icon: 'trending-up',
      title: t('howItWorks.step5Title'),
      description: t('howItWorks.step5Description')
    }
  ];

  const features = [
    {
      icon: 'zap',
      title: t('howItWorks.feature1Title'),
      description: t('howItWorks.feature1Description')
    },
    {
      icon: 'shield',
      title: t('howItWorks.feature2Title'),
      description: t('howItWorks.feature2Description')
    },
    {
      icon: 'refresh-cw',
      title: t('howItWorks.feature3Title'),
      description: t('howItWorks.feature3Description')
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
              {t('howItWorks.label')}
            </Text>
          </View>
          <Text className="text-white text-3xl font-bold mb-2">
            {t('howItWorks.title')}
          </Text>
          <Text className="text-muted text-base">
            {t('howItWorks.subtitle')}
          </Text>
        </View>

        {/* Steps Section */}
        <View className="px-6 mb-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </View>

        {/* Features Section */}
        <View className="px-6 mb-8">
          <Text className="text-white text-2xl font-bold mb-6">
            {t('howItWorks.featuresTitle')}
          </Text>
          <View className="gap-4">
            {features.map((feature, index) => (
              <View
                key={index}
                className="bg-card/30 border border-border/20 rounded-2xl p-5"
              >
                <View className="flex-row items-start gap-4">
                  <View className="w-12 h-12 bg-neon/20 rounded-xl items-center justify-center">
                    <Feather name={feature.icon as any} size={24} color="#0ddb74" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-white text-lg font-bold mb-2">
                      {feature.title}
                    </Text>
                    <Text className="text-muted leading-6">
                      {feature.description}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <View className="px-6 pb-8">
          <View className="bg-gradient-to-br from-neon/10 to-transparent border-2 border-neon/40 rounded-2xl p-6 relative overflow-hidden">
            <View className="absolute -right-8 -top-8 w-32 h-32 bg-neon/10 rounded-full" />
            <View className="flex-row items-center gap-2 mb-3">
              <View className="w-2 h-2 bg-neon rounded-full" />
              <Text className="text-neon text-xs font-bold uppercase tracking-wider">
                {t('howItWorks.ctaLabel')}
              </Text>
            </View>
            <Text className="text-white text-xl font-bold mb-2">
              {t('howItWorks.ctaTitle')}
            </Text>
            <Text className="text-muted text-sm mb-5">
              {t('howItWorks.ctaSubtitle')}
            </Text>
            <TouchableOpacity
              className="bg-neon rounded-xl py-3 items-center"
              activeOpacity={0.8}
            >
              <Text className="text-background font-bold text-base">
                {t('howItWorks.ctaButton')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
    </Layout>
  );
};

export default Works;