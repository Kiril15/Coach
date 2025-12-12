import { createAsyncThunk } from "@reduxjs/toolkit";
import dayliTipService from "@/services/dayliTip/dayliTip.sevice";
import { IDayliTip } from "@/types/gpt-request.interface";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LAST_UPDATE_KEY = 'last_tip_date';
const CACHED_TIP_KEY = 'current_tip_data';

export const generateDailyTip = createAsyncThunk<
    IDayliTip,
    { forceRefresh?: boolean } | undefined
>(
    'dayliTip/post',
    async (payload, thunkApi) => {
        const forceRefresh = payload?.forceRefresh || false;

        try {
            const todayDate = new Date().toISOString().split('T')[0];
            const lastUpdateDate = await AsyncStorage.getItem(LAST_UPDATE_KEY);
            const cachedTipData = await AsyncStorage.getItem(CACHED_TIP_KEY);

            if (!forceRefresh && lastUpdateDate === todayDate && cachedTipData) {
                return JSON.parse(cachedTipData) as IDayliTip;
            }

            const newTip = await dayliTipService.generateDailyTip();

            await AsyncStorage.setItem(CACHED_TIP_KEY, JSON.stringify(newTip));
            await AsyncStorage.setItem(LAST_UPDATE_KEY, todayDate);

            return newTip;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                const message = e.response?.data?.message || e.message || 'Failed to fetch tip';
                return thunkApi.rejectWithValue(message);
            }

            return thunkApi.rejectWithValue('An unexpected error occurred');
        }
    }
);