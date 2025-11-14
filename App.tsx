import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import './global.css'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from '@/navigation/Navigation'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</Provider>
			<StatusBar style='light' />
		</QueryClientProvider>
	)
}
