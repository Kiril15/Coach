import { Pressable } from "react-native"
import { Feather } from "@expo/vector-icons"
import { FC } from "react"
import { IMenu, TypeNav } from "./menu.interface"
import { AppConstants } from "@/app.constants"

interface IMenuItem {
    item: IMenu
    nav: TypeNav
    currentRoute?: string
}

const MenuItem: FC<IMenuItem> = ({item, nav, currentRoute}) => {
    const isActive = currentRoute === item.path

    return (
        <Pressable
            onPress={() => nav(item.path)}
            style={
				isActive
					? {
							padding: 5,
							borderRadius: 25,
							shadowColor: AppConstants.primary,
							shadowOffset: {
								width: 0,
								height: 5
							},
							shadowOpacity: 0.6,
							shadowRadius: 8,
							elevation: 20
						}
					: {}
			}
        >
            <Feather
                name={item.iconName}
                size={26}
                color={isActive ? AppConstants.primary : "#999999"}
            />
        </Pressable>
    )
}

export default MenuItem