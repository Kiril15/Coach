import instance from "../api/interceptors"

export const emailService = {
    async sendMail(email: string) {
        const response = await instance.post('/mail/send-mail', {
            email
        })

        return response
    },

    async validateMail(email: string, code: string) {
        const response = await instance.post('/mail/verify', {
            email,
            code
        })

        return response
    }
}