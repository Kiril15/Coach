import { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'
import cn from 'clsx'

interface IButton extends PressableProps {}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<Pressable
			className={cn(
				'self-center mt-3 bg-neon py-3 px-8 rounded-2xl justify-center',
				className
			)}
			{...rest}
		>
			{children}
		</Pressable>
	)
}

export default Button
