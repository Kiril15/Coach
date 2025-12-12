import { FC, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { LanguageEnum } from "@/types/language.enum";
import i18n from "@/components/languages/i18n";

interface ILanguageSwitcher {
    language: LanguageEnum;
    setLanguage: (lang: LanguageEnum) => void;
}

const LanguageSwitcher: FC<ILanguageSwitcher> = ({ language, setLanguage }) => {
    const isActive = (lang: LanguageEnum) => language === lang;
    
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language])

    return (
        <View className="flex-row gap-3 mt-3">
            <Pressable
                onPress={() => setLanguage(LanguageEnum.en)}
                className={`px-10 py-2 rounded-xl border
                    ${isActive(LanguageEnum.en) 
                        ? "border-neon bg-[#0f0f0f]" 
                        : "border-[#333] bg-[#111]"
                    }`}
            >
                <Text
                    className={` 
                        ${isActive(LanguageEnum.en) ? "text-neon" : "text-muted"}
                    `}
                >
                    EN
                </Text>
            </Pressable>

            <Pressable
                onPress={() => setLanguage(LanguageEnum.ru)}
                className={`px-10 py-2 rounded-xl border 
                    ${isActive(LanguageEnum.ru) 
                        ? "border-neon bg-[#0f0f0f]" 
                        : "border-[#333] bg-[#111]"
                    }`}
            >
                <Text
                    className={` 
                        ${isActive(LanguageEnum.ru) ? "text-neon" : "text-muted"}
                    `}
                >
                    RU
                </Text>
            </Pressable>
        </View>
    );
};

export default LanguageSwitcher;
