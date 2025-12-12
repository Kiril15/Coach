import axios, { InternalAxiosRequestConfig } from 'axios'
import * as SecureStore from 'expo-secure-store'
import i18n from '@/components/languages/i18n'

export const API_URL = `http://192.168.0.106:3000`

export const getContentType = () => ({
    'Content-Type': 'application/json',
})

const instance = axios.create({
    baseURL: API_URL,
    headers: getContentType(),
})

instance.interceptors.request.use(
    async (config): Promise<InternalAxiosRequestConfig> => {
        try {
            const accessToken = await SecureStore.getItemAsync('accessToken')

            if (config.headers && accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`
            }
        } catch (error) {
            Promise.reject(error)
        }

        if (config.headers) {
            const currentLanguage = i18n.language || 'en'; 
            config.headers['Accept-Language'] = currentLanguage;
        }

        return config
    },
)

export default instance
