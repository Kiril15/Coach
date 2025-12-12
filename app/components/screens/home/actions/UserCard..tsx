import { View, Image, Text, TouchableOpacity } from "react-native";
import { useTypedSelector } from "@/components/hooks/useTypedSelector";
import { Feather } from "@expo/vector-icons";
import UserSkeleton from "@/components/ui/layout/skeleton/UserSkeleton";
import { useTranslation } from "react-i18next";

const UserCard = () => {
    const { user } = useTypedSelector(state => state.user);
    const { t } = useTranslation()

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 9) {
            return { text: t("home.goodMorning"), icon: 'sunrise' as const };
        } else if (hour >= 9 && hour < 18) {
            return { text: t("home.goodAfternoon"), icon: 'sun' as const };
        } else {
            return { text: t("home.goodEvening"), icon: 'moon' as const };
        }
    };

    const greeting = getGreeting();

    return (
        <View className='flex-row items-center justify-between mb-6'>
            <View className='flex-1'>
                <View className='flex-row items-center gap-3 mb-1'>
                    <Text className='text-2xl font-bold text-white'>
                        {greeting.text}
                    </Text>
                    <View className='w-8 h-8 bg-neon/20 rounded-full items-center justify-center'>
                        <Feather name={greeting.icon} size={16} color="#0ddb74" />
                    </View>
                </View>
                <Text className='text-zinc-400 text-sm'>
                    {t("home.readyToTrain")}
                </Text>
            </View>

            <TouchableOpacity activeOpacity={0.8}>
                {user?.image ? (
                    <View className='relative'>
                        <Image
                            source={{ uri: user.image }}
                            className='w-14 h-14 rounded-full'
                        />
                        <View className='absolute inset-0 w-14 h-14 rounded-full border-2 border-neon/50' />

                        {user?.subscriptionType === 'PRO' && (
                            <View className='absolute -bottom-1 -right-1 w-5 h-5 bg-neon rounded-full items-center justify-center border-2 border-background'>
                                <Feather name="zap" size={10} color="#0a0a0a" />
                            </View>
                        )}
                    </View>
                ) : (
                    <UserSkeleton compact/>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default UserCard;