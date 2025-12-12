import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import i18n from "./i18n"

const LanguageLoader = () => {
	const {user} = useTypedSelector(state => state.user)

	useEffect(() => {
		if (user?.language) {
			i18n.changeLanguage(user.language.toLowerCase())
		}
	}, [user])

	return null
}

export default LanguageLoader