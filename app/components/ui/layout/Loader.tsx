import { AppConstants } from '@/app.constants'
import { FC } from 'react'
import { ActivityIndicator, View } from 'react-native'

const Loader: FC = () => {
	return (
		<View className='absolute w-full h-full justify-center items-center'>
			<ActivityIndicator color={AppConstants.primary} size='large'/>
		</View>
	)
}

export default Loader
