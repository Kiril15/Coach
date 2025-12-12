import { LanguageEnum } from "@/types/language.enum";
import { BasicAbilities } from "@/types/basic.interface";
import { IGPTRequest } from "@/types/gpt-request.interface";
import { IDailyState } from "@/types/daily-state.interface";
import { IChallenge } from "./challenge.interface";

export interface IUser {
    _id: number;
    email: string;
    password: string;
    image?: string;
    isVerified: boolean;
    subscriptionType: string;
    subscriptionExpiresAt: Date | null;
    language: LanguageEnum;
    dayStrick?: number;
    expirience?: number;
    level?: number;
    createdAt: Date;
    updatedAt: Date;
    basicAbilities: BasicAbilities;
    gptRequests: IGPTRequest[];
    dailyState: IDailyState[];
    challenge: IChallenge[]
}

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}

export interface UserState {
    avatarUrl: string | null;
    uploading: boolean;
    error: string | null;
}

export interface UploadSignatureResponse {
    signature: string;
    timestamp: number;
    publicId: string;
    folder: string;
    apiKey: string;
    cloudName: string;
    uploadUrl: string;
}

export interface UpdateAvatarPayload {
    avatarUrl: string;
    oldPublicId?: string;
}

export interface UpdateAvatarResponse {
    _id: string;
    image: string;
    email: string;
}

export interface CloudinaryUploadResponse {
    secure_url: string;
    public_id: string;
    format: string;
    width: number;
    height: number;
}

export interface UpdatePayload extends Pick<IUser, 'expirience'> {}