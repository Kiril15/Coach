import { FC, PropsWithChildren } from "react"
import { Text, View, TouchableWithoutFeedback, Platform, ScrollView, Keyboard } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

const Layout: FC<PropsWithChildren> = ({children}) => {
    const { top } = useSafeAreaInsets()

    return (
        <SafeAreaView className="flex-1">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <KeyboardAwareScrollView
                        enableOnAndroid
                        extraScrollHeight={80}
                        keyboardOpeningTime={0}
                        showsVerticalScrollIndicator={false}
                    >
                        <View
			            	className='flex-1 py-5 relative'
			            	style={{
			            		paddingTop: Platform.OS === 'ios' ? top / 5 : top
			            	}}
			            >
                        <Text className="text-white text-2xl text-center font-bold">SW | Coach</Text>
                        {children}
                        </View>
                    </KeyboardAwareScrollView>
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Layout