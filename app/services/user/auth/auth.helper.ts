import { setItemAsync, deleteItemAsync } from 'expo-secure-store'

export const saveTokenStorage = async (accessToken: string) => {
    await setItemAsync('accessToken', accessToken)
}

export const removeTokenStorage = async () => {
    await deleteItemAsync('accessToken')
}

