import { FC, useEffect } from 'react'
import { useAuth } from '@/components/hooks/useAuth'
import { useState } from 'react'
import { useNavigationContainerRef } from '@react-navigation/native'
import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'
import { NavigationContainer } from '@react-navigation/native'
import PrivateNavigation from './PrivateNavigation'

const Navigation: FC = () => {
	const {user} = useAuth()
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () => {
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		})


		return () => {
			navRef.removeListener('state', listener)
		}
	}, []) 

	return (
		<NavigationContainer ref={navRef}>
			<PrivateNavigation />
			{user && currentRoute && (
				<BottomMenu currentRoute={currentRoute} nav={navRef.navigate} />
			)}
		</NavigationContainer>
	)
}

export default Navigation
