import { createSlice } from "@reduxjs/toolkit"
import { IAuthInitialState } from "./auth.interface"

const initialState: IAuthInitialState = {
    // isLoading: false,
    user: {
        _id: '1',
        email: 'asdfsdfsdf',
        password: 'asdfsafsdf'
    },
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
})