import { BasicAbilities } from "@/types/basic.interface";
import { IUser } from "@/types/user.interface";

export interface BasicAbilitiesState extends Omit<BasicAbilities, 'language'> {
    isLoading: boolean
    error: null | string
}

export interface BasicAbilitiesResponse extends BasicAbilities {
    id: number
    userId: number
    user: IUser
}