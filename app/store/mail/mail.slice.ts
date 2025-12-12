import { createSlice } from "@reduxjs/toolkit"
import { IMailinitialState } from "./mail.interface"
import { sendMail, validateMail } from "./mail.actions"

const initialState: IMailinitialState = {
    email: "",
    password: "",
    verificationError: "",
    sendCodeLoading: false,
    validateLoading: false
}

export const mailSlice = createSlice({
    name: "mail",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setVerificationError: (state, action) => {
            state.verificationError = action.payload
        }
    },

    extraReducers: builder => {
        builder
            .addCase(sendMail.pending, state => {
                state.sendCodeLoading = true
                state.verificationError = ""
            })
            .addCase(sendMail.fulfilled, state => {
                state.sendCodeLoading = false
            })
            .addCase(sendMail.rejected, (state, action) => {
                state.sendCodeLoading = false
                state.verificationError = action.payload?.message || "Error send code"
            })
            .addCase(validateMail.pending, state => {
                state.validateLoading = true
                state.verificationError = ""
            })
            .addCase(validateMail.fulfilled, state => {
                state.validateLoading = false
            })
            .addCase(validateMail.rejected, (state, action) => {
                state.validateLoading = false
                state.verificationError = action.payload?.message || "Invalid code"
            })
    }
})
