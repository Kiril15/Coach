import { IDayliTipInitialState } from "@/types/gpt-request.interface"
import { createSlice } from "@reduxjs/toolkit"
import { generateDailyTip } from "./dayliTip.actions"

const initialState: IDayliTipInitialState = {
    text: '',
    type: '',
    isLoading: false,
    error: null
}

export const dayliTipSlice = createSlice({
    name: 'dayliTip',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(generateDailyTip.pending, state => {
                state.isLoading = true
            })
            .addCase(generateDailyTip.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.text = action.payload.text
                state.type = action.payload.type
            })
            .addCase(generateDailyTip.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
    },
})