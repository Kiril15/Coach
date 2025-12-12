import { createSlice } from "@reduxjs/toolkit";
import { getBasicAbilities, updateBasicAbilities } from "./basicAbilities.actions";
import { BasicAbilitiesState } from "./basicAbilities.interface";

const initialState: BasicAbilitiesState = {
    pullUp: '',
    pushUp: '',
    dips: '',
    weight: '',
    height: '',
    age: '',
    injury: '',
    isLoading: false,
    error: null,
}

export const basicAbilitiesSlice = createSlice({
    name: 'basicAbilities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBasicAbilities.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getBasicAbilities.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.pullUp = action.payload.pullUp
                state.pushUp = action.payload.pushUp
                state.dips = action.payload.dips
                state.weight = action.payload.weight
                state.height = action.payload.height
                state.age = action.payload.age
                state.injury = action.payload.injury
            })
            .addCase(getBasicAbilities.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
            .addCase(updateBasicAbilities.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(updateBasicAbilities.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.pullUp = action.payload.pullUp
                state.pushUp = action.payload.pushUp
                state.dips = action.payload.dips
                state.weight = action.payload.weight
                state.height = action.payload.height
                state.age = action.payload.age
                state.injury = action.payload.injury
            })
            .addCase(updateBasicAbilities.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
    }
})