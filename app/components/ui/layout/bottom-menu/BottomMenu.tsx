import { View } from "react-native"
import MenuItem from "./MenuItem"
import { TypeNav } from "./menu.interface"
import { FC } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { menuData } from "./menu.data"

interface IBottomMenu {
    nav: TypeNav
    currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = props => {
    const { bottom } = useSafeAreaInsets()

    return (
        <View 
            className='pt-5 px-3 flex-row justify-around items-center w-full m-auto bg-[#1E1C2E]'
            style={{
                paddingBottom: bottom + 10
            }}
        >
            {menuData.map(item => (
                <MenuItem item={item} key={item.path} {...props}/>
            ))}
        </View>
    )
}

export default BottomMenu