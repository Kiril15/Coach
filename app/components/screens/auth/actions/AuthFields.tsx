import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { View, TextInput, Text } from 'react-native'
import cn from 'clsx'
import { IAuthFormData } from '@/types/user.interface'

const AuthFields: FC<{ control: Control<IAuthFormData> }> = ({ control }) => {
	return (
		<>
			<Controller
				control={control}
				name='email'
				rules={{
					required: 'Email is required',
					pattern: {
						value: /^\S+@\S+\.\S+$/,
						message: 'Please enter a valid email'
					}
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={cn(
								'rounded-2xl bg-[#151515] border px-4 my-3 h-14 justify-center',
								error ? 'border-red-500' : 'border-[#666666]'
							)}
                        >
							<TextInput
								placeholder='Enter email'
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								autoCapitalize='none'
								className='text-white leading-none placeholder:text-[#666666]'
							/>
                        </View>
						{error && <Text className='text-red-500'>{error.message}</Text>}
					</>
				)}
			/>
			<Controller
				control={control}
				name='password'
				rules={{
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Password must be at least 6 characters'
					}
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={cn(
								'rounded-2xl bg-[#151515] border px-4 my-3 h-14 justify-center',
								error ? 'border-red-500' : 'border-[#666666]'
							)}
						>
							<TextInput
								placeholder='Enter password'
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								autoCapitalize='none'
								className='text-white leading-none placeholder:text-[#666666]'
							/>
                        </View>
						{error && <Text className='text-red-500'>{error.message}</Text>}
					</>
				)}
			/>
		</>
	)
}

export default AuthFields
