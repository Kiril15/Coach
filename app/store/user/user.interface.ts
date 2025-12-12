import { IUser } from "@/types/user.interface"

export interface IUserInitialState {
    isLoading: boolean
    error: null | string
    user: null | IUser
    isReg: boolean
    uploading: boolean
}

export interface FileUploadPayload {
    uri: string;
    type: string;
    name: string;
}