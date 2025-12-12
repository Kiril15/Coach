import challengeService from "@/services/user/challenge/challenge.service"
import { IChallenge, IChallengeRequest } from "@/types/challenge.interface";
import { createAsyncThunk } from "@reduxjs/toolkit"

export const initializeUserChallenges = createAsyncThunk(
    'challenge/create',
    async (_, thunkApi) => {
        try {
            return await challengeService.initializeUserChallenges()
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
)

export const updateChallengeProgress = createAsyncThunk<IChallenge[], IChallengeRequest>(
    'challenge/update',
    async (data, thunkApi) => {
        try {
            return await challengeService.updateChallengeProgress(data.title, data.current)
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
)

export const getUserChallenges = createAsyncThunk<IChallenge[]>(
    'challenge/get',
    async (_, thunkApi) => {
        try {
            return await challengeService.getUserChallenges()
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
)

export const claimChallengeReward = createAsyncThunk<boolean>(
    'challenge/claim',
    async (_, thunkAPI) => {
        try {
            return await challengeService.claimReward();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
