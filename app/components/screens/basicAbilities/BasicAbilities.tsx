import Layout from "@/components/ui/layout/Layout";
import { View, Text, Keyboard, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LanguageSwitcher from "./actions/LanguageSwitcher";
import InputRow from "@/components/ui/InputRow";
import Button from "@/components/ui/Button";
import { useActions } from "@/components/hooks/useAction";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BasicAbilities as BasicAbilitiesForm } from "@/types/basic.interface";
import { LanguageEnum } from "@/types/language.enum";
import { useTranslation } from "react-i18next";
import TextArea from "@/components/ui/TextArea";

const BasicAbilities = () => {
    const { createBasicAbilities, logout, initializeUserChallenges } = useActions();
    const { t } = useTranslation();

    const { control, handleSubmit } = useForm<BasicAbilitiesForm>({
        mode: "onChange",
        defaultValues: {
            language: LanguageEnum.en,
            pullUp: "",
            pushUp: "",
            dips: "",
            weight: "",
            height: "",
            age: "",
            injury: ""
        }
    });

    const onSubmit: SubmitHandler<BasicAbilitiesForm> = async (data) => {
        Keyboard.dismiss();
        await createBasicAbilities(data);
        await initializeUserChallenges()
    };

    return (
        <Layout>
            <View className="w-3/4 mt-[30px] mx-auto">
                <View className="relative flex-row items-center justify-between py-2">
                    <Pressable onPress={() => logout()} className="z-10">
                        <Ionicons name="arrow-back" size={28} color="white" />
                    </Pressable>

                    <Text className="absolute left-0 right-0 text-center text-white text-3xl font-bold">
                        {t("onboarding.title")}
                    </Text>
                </View>

                <Text className="text-muted mt-2 leading-5">
                    {t("onboarding.subtitle")}
                </Text>

                <Text className="text-white text-2xl font-semibold mt-10 mb-3">
                    {t("onboarding.selectLanguage")}
                </Text>

                <Controller
                    control={control}
                    name="language"
                    render={({ field }) => (
                        <LanguageSwitcher
                            language={field.value}
                            setLanguage={field.onChange}
                        />
                    )}
                />

                <Text className="text-white text-2xl font-semibold mt-10 mb-3">
                    {t("onboarding.abilitiesTitle")}
                </Text>

                <InputRow
                    control={control}
                    name="pullUps"
                    label={t("onboarding.pullUps")}
                    subLabel={t("onboarding.reps")}
                    rules={{
                        required: t("onboarding.required"),
                        pattern: { value: /^[0-9]+$/, message: t("onboarding.numbersOnly") },
                    }}
                />

                <InputRow
                    control={control}
                    name="pushUps"
                    label={t("onboarding.pushUps")}
                    subLabel={t("onboarding.reps")}
                    rules={{
                        required: t("onboarding.required"),
                        pattern: { value: /^[0-9]+$/, message: t("onboarding.numbersOnly") },
                    }}
                />

                <InputRow
                    control={control}
                    name="dips"
                    label={t("onboarding.dips")}
                    subLabel={t("onboarding.reps")}
                    rules={{
                        required: t("onboarding.required"),
                        pattern: { value: /^[0-9]+$/, message: t("onboarding.numbersOnly") },
                    }}
                />

                <Text className="text-white text-2xl font-semibold my-6">
                    {t("onboarding.bodyStatsTitle")}
                </Text>

                <View className="items-center gap-5">
                    <View className="flex-row gap-4">
                        <InputRow
                            control={control}
                            name="weight"
                            label={t("onboarding.weight")}
                            subLabel={t("onboarding.kg")}
                            compact
                            rules={{
                                required: t("onboarding.required"),
                                pattern: { value: /^[0-9]+$/, message: t("onboarding.numbersOnly") },
                                min: { value: 30, message: t("onboarding.weightMin") },
                                max: { value: 300, message: t("onboarding.weightMax") },
                            }}
                        />

                        <InputRow
                            control={control}
                            name="height"
                            label={t("onboarding.height")}
                            subLabel={t("onboarding.cm")}
                            compact
                            rules={{
                                required: t("onboarding.required"),
                                pattern: { value: /^[0-9]+$/, message: t("onboarding.numbersOnly") },
                                min: { value: 100, message: t("onboarding.heightMin") },
                                max: { value: 250, message: t("onboarding.heightMax") },
                            }}
                        />
                    </View>
                    <InputRow
                        control={control}
                        name='age'
                        compact
                        label={t('onboarding.age')}
                        styles="ml-2"
                        rules={{
                            required: t("onboarding.required"),
                            pattern: { value: /^[0-9]+$/, message: t("onboarding.numbersOnly") },
                            min: { value: 9, message: t("onboarding.ageMin") },
                            max: { value: 90, message: t("onboarding.ageMax") },
                        }}
                    />
                </View>

                <TextArea
                    control={control}
                    name="injury"
                    label={t("onboarding.injuryLabel")}
                    placeholder={t("onboarding.injuryPlaceholder")}
                    rules={{
                        maxLength: { value: 200, message: t("onboarding.maxLength") }
                    }}
                />

                <Button className="mt-7 w-full" onPress={handleSubmit(onSubmit)}>
                    <Text className="text-white text-center font-semibold text-lg">
                        {t("onboarding.next")}
                    </Text>
                </Button>
            </View>
        </Layout>
    );
};

export default BasicAbilities;
