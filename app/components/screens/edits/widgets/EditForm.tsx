import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import InputRow from "@/components/ui/InputRow";
import TextArea from "@/components/ui/TextArea";
import { Feather } from "@expo/vector-icons";
import { FC } from "react";
import { BasicAbilities } from '@/types/basic.interface';
import { Control } from "react-hook-form";

const EditForm: FC<{ control: Control<BasicAbilities> }> = ({control}) => {
    const { t } = useTranslation();

    return (
        <>
            <View className='mb-8'>
                <View className='flex-row items-center gap-2 mb-4'>
                    <Feather name="activity" size={24} color="white" />
                    <Text className='text-white text-xl font-bold'>
                        {t('profile.sectionStatsTitle')}
                    </Text>
                </View>

                <View className='bg-zinc-900/40 rounded-2xl p-4 border border-zinc-700/50'>
                    <InputRow
                        control={control}
                        name="weight"
                        label={t('onboarding.weight')}
                        subLabel={t('onboarding.kg')}
                        rules={{
                            required: t('onboarding.required'),
                            min: { value: 30, message: t('onboarding.weightMin') },
                            max: { value: 300, message: t('onboarding.weightMax') },
                        }}
                    />
                    <InputRow
                        control={control}
                        name="height"
                        label={t('onboarding.height')}
                        subLabel={t('onboarding.cm')}
                        rules={{
                            required: t('onboarding.required'),
                            min: { value: 100, message: t('onboarding.heightMin') },
                            max: { value: 250, message: t('onboarding.heightMax') },
                        }}
                    />
                    <InputRow
                        control={control}
                        name="age"
                        label={t('onboarding.age')}
                        rules={{
                            required: t('onboarding.required'),
                            min: { value: 9, message: t('onboarding.ageMin') },
                            max: { value: 90, message: t('onboarding.ageMax') },
                        }}
                    />
                    <TextArea
                        control={control}
                        name="injury"
                        label={t('onboarding.injuryLabel')}
                        placeholder={t('onboarding.injuryPlaceholder')}
                        rules={{
                            maxLength: { value: 200, message: t('onboarding.maxLength') }
                        }}
                    />
                </View>
            </View>
            <View className='mb-8'>
                <View className='flex-row items-center gap-2 mb-4'>
                    <Feather name="zap" size={24} color="white" />
                    <Text className='text-white text-xl font-bold'>
                        {t('onboarding.abilitiesTitle')}
                    </Text>
                </View>
                    
                <View className='bg-zinc-900/40 rounded-2xl p-4 border border-zinc-700/50'>
                    <InputRow 
                        control={control}
                        name='pullUp'
                        label={t('onboarding.pullUps')}
                        subLabel={t('onboarding.reps')}
                        rules={{
                            required: t('onboarding.required'),
                            pattern: { value: /^[0-9]+$/, message: t('onboarding.numbersOnly') },
                        }}
                    />
                    <InputRow 
                        control={control}
                        label={t('onboarding.pushUps')}
                        name='pushUp'
                        subLabel={t('onboarding.reps')}
                        rules={{
                            required: t('onboarding.required'),
                            pattern: { value: /^[0-9]+$/, message: t('onboarding.numbersOnly') },
                        }}
                    />
                    <InputRow 
                        control={control}
                        label={t('onboarding.dips')}
                        name='dips'
                        subLabel={t('onboarding.reps')}
                        rules={{
                            required: t('onboarding.required'),
                            pattern: { value: /^[0-9]+$/, message: t('onboarding.numbersOnly') },
                        }}
                    />
                </View>
            </View>
        </>
    )
}

export default EditForm;