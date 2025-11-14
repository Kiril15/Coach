import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { Feather } from '@expo/vector-icons'

export interface IMenu {
	iconName: keyof typeof Feather.glyphMap
	path: keyof TypeRootStackParamList
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void
