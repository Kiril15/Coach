import instance from "@/services/api/interceptors";

const challengeService = {
    async initializeUserChallenges() {
        const response = await instance.post('challenge/initialize');
        return response.data;
    },

    async updateChallengeProgress(title: string, current: number) {
        const response = await instance.patch("challenge/update", {
            title,
            current
        })
        return response.data
    },

    async getUserChallenges() {
        const response = await instance.get('challenge')
        return response.data
    },

    async claimReward() {
        const response = await instance.patch('challenge/claim');
        return response.data
    }
}

export default challengeService