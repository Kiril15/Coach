import instance from "../api/interceptors"

const dayliTipService = {
    async generateDailyTip() {
        const response = await instance.post('dayli-tip')
        return response.data
    }
}

export default dayliTipService