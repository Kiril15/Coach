import { IAuthResponse } from "@/services/user/auth/auth-service.interface";
import { AuthService } from "@/services/user/auth/auth.service";
import { IAuthFormData } from "@/types/user.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "@/services/user/user.service";
import { 
    UploadSignatureResponse,
    UpdateAvatarPayload, 
    UpdateAvatarResponse,
    CloudinaryUploadResponse ,
    UpdatePayload
} from "@/types/user.interface";
import { FileUploadPayload } from "./user.interface";
import * as SecureStore from 'expo-secure-store'

export const register = createAsyncThunk<any, IAuthFormData>(
    'auth/register',
    async ({password, email}, thunkApi) => {
        try {
            return await AuthService.register(email.trim(), password.trim())
        } catch (e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IAuthFormData>(
    'auth/login',
    async ({password, email}, thunkApi) => {
        try {
            return await AuthService.login(email.trim(), password.trim())
        } catch (e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout', 
    async () => {
        await AuthService.logout()
        return {}
    }
)

export const checkUser = createAsyncThunk(
    'user/get',
    async (_, thunkApi) => {
        try {
            const token = await SecureStore.getItemAsync('accessToken')
    
            if (!token) {
                return thunkApi.rejectWithValue('No token');
            }
            
            return await userService.getUser()
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
)

export const getUploadSignature = createAsyncThunk<UploadSignatureResponse>(
    'user/getUploadSignature',
    async (_, thunkApi) => {
        try {
            return await userService.getUploadSignature();
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const uploadToCloudinary = createAsyncThunk<
    CloudinaryUploadResponse,
    { fileData: FileUploadPayload; signatureData: UploadSignatureResponse }
>(
    'user/uploadToCloudinary',
    async ({ fileData, signatureData }, thunkApi) => {
        try {
            return await userService.uploadToCloudinary(fileData, signatureData);
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const updateAvatar = createAsyncThunk<UpdateAvatarResponse, UpdateAvatarPayload>(
    'user/updateAvatar',
    async (data, thunkApi) => {
        try {
            return await userService.updateAvatar(data);
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const uploadAvatar = createAsyncThunk<
    string,
    FileUploadPayload 
>(
    'user/uploadAvatar',
    async (imageUri, thunkApi) => {
        try {
            const signatureData = await userService.getUploadSignature();
            const uploadResult = await userService.uploadToCloudinary(imageUri, signatureData);

            const state: any = thunkApi.getState();
            const oldPublicId = state.user.avatarPublicId;
            
            await userService.updateAvatar({
                avatarUrl: uploadResult.secure_url,
                oldPublicId
            });
            
            return uploadResult.secure_url;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e?.response?.data?.message || 'Failed to upload avatar');
        }
    }
);

export const deleteUser = createAsyncThunk(
    'user/delete',
    async (_, thunkApi) => {
        try {
            return await userService.deleteUser()
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
)

// export const checkAndUpdateStreak = createAsyncThunk<UpdatePayload | null, void>(
//     'user/checkStreak',
//     async (_, thunkApi) => {
//         try {
//             const { shouldUpdate, newStreak } = await streakService.shouldUpdateStreak();

//             if (!shouldUpdate || newStreak === null) {
//                 console.log('✅ Streak не требует обновления');
//                 return null;
//             }

//             console.log('🔥 Обновляем streak:', newStreak === 0 ? 'ПОЛНЫЙ СБРОС' : `+${newStreak}`);

//             if (newStreak === 0) {
//                 const response = await userService.resetStreak();
//                 return response;
//             }

//             const response = await userService.updateUser({ dayStrick: newStreak });
//             return response;
//         } catch (e) {
//             return thunkApi.rejectWithValue(e);
//         }
//     }
// );

export const updateExp = createAsyncThunk<{expirience: number, level: number}, UpdatePayload>(
    'user/update',
    async (data, thunkApi) => {
        try {
            return await userService.updateExp(data);
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }
    }
);

// export const resetStrick = createAsyncThunk<{dayStreak: number}>(
//     'user/reset-streak',
//     async (_, thunkApi) => {
//         try {
//             return await userService.resetStreak()
//         } catch (e) {
//             return thunkApi.rejectWithValue(e);
//         }
//     }
// )