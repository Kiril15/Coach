export type TypeRootStackParamList = {
    Auth: undefined
	Home: undefined
	Training: undefined
    Statistics: undefined
	Profile: undefined
	BasicAbilities: undefined
	FAQ: undefined
	PrivacyPolicy: undefined
	Works: undefined
	TermsConditions: undefined
	EditProfile: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: React.ComponentType<any>
}
