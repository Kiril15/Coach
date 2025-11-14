export type TypeRootStackParamList = {
    Auth: undefined
	Home: undefined
	Profile: undefined
    Statistics: undefined
    Training: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: React.ComponentType
}
