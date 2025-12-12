import { useAuth } from "@/components/hooks/useAuth"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from "./navigation.types"
import { routes } from './routes'
import Auth from "@/components/screens/auth/Auth"
import BasicAbilities from "@/components/screens/basicAbilities/BasicAbilities"

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation = () => {
    const { user } = useAuth();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#0B0C0C'
                }
            }}
        >
            {!user && (
                <Stack.Screen name="Auth" component={Auth} />
            )}

            {user && !user.isVerified && (
                <Stack.Screen name="BasicAbilities" component={BasicAbilities} />
            )}

            {user && user.isVerified && (
                routes.map(item => (
                    <Stack.Screen 
                        key={item.name}
                        name={item.name} 
                        component={item.component}
                    />
                ))
            )}
        </Stack.Navigator>
    );
};

export default PrivateNavigation