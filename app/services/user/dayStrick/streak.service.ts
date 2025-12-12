import AsyncStorage from '@react-native-async-storage/async-storage';

const LAST_VISIT_KEY = 'last_visit_date';

const streakService = {
    async shouldUpdateStreak(): Promise<{ shouldUpdate: boolean; newStreak: number | null }> {
        try {
            const today = new Date().toISOString().split('T')[0];
            const lastVisit = await AsyncStorage.getItem(LAST_VISIT_KEY);

            if (!lastVisit) {
                await AsyncStorage.setItem(LAST_VISIT_KEY, today);
                return { shouldUpdate: true, newStreak: 1 };
            }

            if (lastVisit === today) {
                return { shouldUpdate: false, newStreak: null };
            }

            const lastVisitDate = new Date(lastVisit);
            const todayDate = new Date(today);
            const diffTime = todayDate.getTime() - lastVisitDate.getTime();
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            await AsyncStorage.setItem(LAST_VISIT_KEY, today);

            if (diffDays === 1) {
                return { shouldUpdate: true, newStreak: 1 };
            } else if (diffDays > 1) {
                return { shouldUpdate: true, newStreak: 0 };
            }

            return { shouldUpdate: false, newStreak: null };
        } catch (error) {
            console.error('Error checking streak:', error);
            return { shouldUpdate: false, newStreak: null };
        }
    },

    async resetStreak(): Promise<void> {
        await AsyncStorage.removeItem(LAST_VISIT_KEY);
    },

    async getLastVisit(): Promise<string | null> {
        return await AsyncStorage.getItem(LAST_VISIT_KEY);
    }
}

export default streakService;
