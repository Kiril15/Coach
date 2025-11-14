import { IUser } from "@/types/user.type"

export interface IAuthInitialState {
    // isLoading: boolean
    error: null | string
    user: null | IUser
}