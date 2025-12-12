import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './global.css'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from '@/navigation/Navigation'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { store, persistor } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import "@/components/languages/i18n";
import LanguageLoader from '@/components/languages/LanguageLoader'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<LanguageLoader/>
					<SafeAreaProvider>
						<Navigation />
					</SafeAreaProvider>
				</PersistGate>
			</Provider>
			<StatusBar style='light' />
		</QueryClientProvider>
	)
}
