import { createAsyncThunk } from "@reduxjs/toolkit";
import { BasicAbilitiesResponse } from "./basicAbilities.interface";
import { BasicAbilities } from "@/types/basic.interface";
import basicAbilitiesService from "@/services/basicAbilities/basicAbilities.service";

export const createBasicAbilities = createAsyncThunk<BasicAbilitiesResponse, BasicAbilities>(
    'basicAbilities/create',
    async (data: BasicAbilities, thunkApi) => {
        try {
            return await basicAbilitiesService.createBasicAbilities(data)
        } catch (e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)

export const getBasicAbilities = createAsyncThunk<BasicAbilitiesResponse>(
    'basicAbilities/get',
    async (_, thunkApi) => {
        try {
            return await basicAbilitiesService.getBasicAbilities()
        } catch (e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)

export const updateBasicAbilities = createAsyncThunk<BasicAbilitiesResponse, Partial<BasicAbilities>>(
    'basicAbilities/update',
    async (data: Partial<BasicAbilities>, thunkApi) => {
        try {
            return await basicAbilitiesService.updateBasicAbilities(data)
        } catch (e: any) {
            const errorMessage = e.response?.data?.message || e.message || 'Unknown error';
            return thunkApi.rejectWithValue(errorMessage)
        }
    }
)
