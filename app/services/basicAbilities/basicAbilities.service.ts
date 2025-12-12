import { BasicAbilities } from "@/types/basic.interface";
import instance from "../api/interceptors";

const basicAbilitiesService = {
    async createBasicAbilities(data: BasicAbilities) {
        const response = await instance.post('basic-abilities', data)
        return response.data
    },

    async getBasicAbilities() {
        const response = await instance.get('basic-abilities')
        return response.data
    },

    async updateBasicAbilities(data: Partial<BasicAbilities>) {
        const response = await instance.put('basic-abilities', data)
        return response.data
    }
}
export default basicAbilitiesService