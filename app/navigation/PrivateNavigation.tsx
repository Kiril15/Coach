import { useAuth } from "@/components/hooks/useAuth"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from "./navigation.types"
import { routes } from './routes'
import Auth from "@/components/screens/auth/Auth"

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation = () => {
    const {user} = useAuth()

    return (
        <Stack.Navigator 
            screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#0B0C0C'
				}
			}}
        >
            {user ? (
                routes.map(item => (
                    <Stack.Screen name={item.name} component={item.component}/>
                ))
            ) : (
                <Stack.Screen name="Auth" component={Auth}/>
            )}
        </Stack.Navigator>
    )
}

export default PrivateNavigation