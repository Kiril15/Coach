import { Pressable } from "react-native"
import { Feather } from "@expo/vector-icons"
import { FC } from "react"
import { IMenu, TypeNav } from "./menu.interface"
import { AppConstants } from "@/app.constants"
import { Platform } from "react-native"

interface IMenuItem {
    item: IMenu
    nav: TypeNav
    currentRoute?: string
}

const MenuItem: FC<IMenuItem> = ({ item, nav, currentRoute }) => {
    const isActive = currentRoute === item.path

    return (
        <Pressable
            onPress={() => nav(item.path)}
            style={{
                height: 40,
                width: 50,
                justifyContent: "center",
                alignItems: "center",

                ...(isActive && {
                    shadowColor: AppConstants.primary,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.7,
                    shadowRadius: 6,
                    elevation: Platform.OS === "android" ? 8 : 0,
                }),
            }}
        >
            <Feather
                name={item.iconName}
                size={24}
                color={isActive ? AppConstants.primary : "#999999"}
            />
        </Pressable>
    )
}

export default MenuItem