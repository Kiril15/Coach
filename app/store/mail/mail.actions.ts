import { createAsyncThunk } from "@reduxjs/toolkit"
import { emailService } from "@/services/email/email.service"
import { IApiError } from "@/types/error.interface"

export const sendMail = createAsyncThunk<
    number, 
    string, 
    { rejectValue: IApiError }
>(
    "mail/send-mail",
    async (email, thunkApi) => {
        try {
            const res = await emailService.sendMail(email.trim())
            return res.data  
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.response?.data)
        }
    }
)

interface IValidateMailPayload {
    email: string
    code: string
}

interface IValidateMailResponse {
    success: boolean
    message: string
}

export const validateMail = createAsyncThunk<
    IValidateMailResponse,
    IValidateMailPayload, 
    { rejectValue: IApiError }
>(
    "mail/validate-mail",
    async ({ email, code }, thunkApi) => {
        try {
            const res = await emailService.validateMail(email, code)
            return res.data
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.response?.data)
        }
    }
)
