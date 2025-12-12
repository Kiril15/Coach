import { View } from "react-native"
import { FC } from "react"
import cn from "clsx"

interface ISkeleton {
    styles?: string
    compact: boolean
}

const UserSkeleton: FC<ISkeleton> = ({styles, compact}) => {
    return (
        <>
            {
                compact ? (
                    <View className={cn("w-14 h-14 rounded-full bg-[#1A1A1A] justify-center items-center", styles)}>
                        <View className="w-3 h-3 rounded-full bg-[#3A3A3A]" />
                        <View className="w-6 h-3 mt-1 rounded-full bg-[#3A3A3A]" />
                    </View>
                ) : (
                    <View className={cn("w-[125px] h-[125px] rounded-full bg-[#1A1A1A] justify-center items-center", styles)}>
                        <View className="w-[40px] h-[40px] rounded-full bg-[#3A3A3A]" />
                        <View className="w-[70px] h-[35px] mt-1 rounded-full bg-[#3A3A3A]" />
                    </View>
                )
            }
        </>
    )
}

export default UserSkeleton
