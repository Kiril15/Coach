import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./user.interface";
import { register, login, logout, updateExp, uploadAvatar, updateAvatar, deleteUser } from "./user.actions";
import { getUserChallenges, initializeUserChallenges, updateChallengeProgress, claimChallengeReward } from "../challenge/challenge.action";
import { createBasicAbilities } from "../basicAbilities/basicAbilities.actions";
import i18n from "@/components/languages/i18n";

const initialState: IUserInitialState = {
    isLoading: false,
    user: null,
    error: null,
    isReg: false,
    uploading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsReg: (state, action: PayloadAction<boolean>) => {
            state.isReg = action.payload;
        },
        clearAuthError: (state) => {
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder
            // Register
            .addCase(register.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload.user;
                if (payload.user?.language) {
                    i18n.changeLanguage(payload.user.language.toLowerCase());
                }
            })
            .addCase(register.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.user = null;
                state.error = typeof payload === 'string' ? payload : 'Registration error';
            })
            
            // Login
            .addCase(login.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload.user;
                if (payload.user?.language) {
                    i18n.changeLanguage(payload.user.language.toLowerCase());
                }
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.error = 'Incorrect login or password';
            })
            
            // Logout
            .addCase(logout.fulfilled, state => {
                state.isLoading = false;
                state.user = null;
                state.error = null;
            })
            
            // Basic abilities
            .addCase(createBasicAbilities.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                i18n.changeLanguage(payload.user.language.toLowerCase());
            })
            
            // Upload Avatar 
            .addCase(uploadAvatar.pending, (state) => {
                state.uploading = true;
                state.error = null;
            })
            .addCase(uploadAvatar.fulfilled, (state, { payload }) => {
                state.uploading = false;
                if (state.user) {
                    state.user.image = payload;
                }
                state.error = null;
            })
            .addCase(uploadAvatar.rejected, (state, { payload }) => {
                state.uploading = false;
                state.error = typeof payload === 'string' ? payload : 'Failed to upload avatar';
            })
            
            // Update Avatar
            .addCase(updateAvatar.pending, (state) => {
                state.uploading = true;
                state.error = null;
            })
            .addCase(updateAvatar.fulfilled, (state, { payload }) => {
                state.uploading = false;
                if (state.user) {
                    state.user.image = payload.image;
                }
                state.error = null;
            })
            .addCase(updateAvatar.rejected, (state, { payload }) => {
                state.uploading = false;
                state.error = typeof payload === 'string' ? payload : 'Failed to update avatar';
            })

            //Update user
            .addCase(updateExp.pending, state => {
                state.isLoading = false
                state.error = null
            })
            .addCase(updateExp.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.error = null
                if(state.user) {
                    state.user.level = payload.level
                    state.user.expirience = payload.expirience
                }
            })
            .addCase(updateExp.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = typeof payload === 'string' ? payload : 'Failed to upload avatar';
            })

            //delete User
            .addCase(deleteUser.pending, state => {
                state.isLoading = false
                state.error = null
            })
            .addCase(deleteUser.fulfilled, state => {
                state.isLoading = false
                state.error = null
                if(state.user) {
                    state.user = null
                }
            })
            .addCase(deleteUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = typeof payload === 'string' ? payload : 'Failed to delete user';
            })

            //user challenge
            .addCase(initializeUserChallenges.pending, state => {
                state.isLoading = false
                state.error = null
            })
            .addCase(initializeUserChallenges.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.error = null
                if(state.user) {
                    state.user.challenge = payload
                }
            })
            .addCase(initializeUserChallenges.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = typeof payload === 'string' ? payload : 'Failed to init challenges';
            })

            //update challenge
            .addCase(updateChallengeProgress.pending, state => {
                state.isLoading = false
                state.error = null
            })
            .addCase(updateChallengeProgress.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.error = null
                if(state.user) {
                    state.user.challenge = payload
                }
            })
            .addCase(updateChallengeProgress.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = typeof payload === 'string' ? payload : 'Failed to init challenges';
            })

            //get challenge
            .addCase(getUserChallenges.pending, state => {
                state.isLoading = false
                state.error = null
            })
            .addCase(getUserChallenges.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.error = null
                if(state.user) {
                    state.user.challenge = payload
                }
            })
            .addCase(getUserChallenges.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = typeof payload === 'string' ? payload : 'Failed to init challenges';
            })

            .addCase(claimChallengeReward.pending, state => {
                state.isLoading = true
                state.error = null
            })
            .addCase(claimChallengeReward.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.error = null
            })
            .addCase(claimChallengeReward.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = typeof payload === 'string' ? payload : 'Failed to claim reward';
            })

            //reset strick
            // .addCase(resetStrick.pending, state => {
            //     state.isLoading = false
            //     state.error = null
            // })
            // .addCase(resetStrick.fulfilled, (state, {payload}) => {
            //     state.isLoading = false
            //     state.error = null
            //     if(state.user) {
            //         state.user.dayStrick = payload.dayStreak
            //     }
            // })
            // .addCase(resetStrick.rejected, (state, { payload }) => {
            //     state.isLoading = false;
            //     state.error = typeof payload === 'string' ? payload : 'Failed to upload avatar';
            // })

            //check Streak
            // .addCase(checkAndUpdateStreak.fulfilled, (state, { payload }) => {
            //     if (payload && state.user) {
            //         state.user.dayStrick = payload.dayStrick;
            //         state.user.level = payload.level;
            //         state.user.expirience = payload.expirience;

            //         console.log('✅ Streak обновлен:', payload.dayStrick);
            //     }
            // })
            // .addCase(checkAndUpdateStreak.rejected, (state, { payload }) => {
            //     console.error('❌ Ошибка обновления streak:', payload);
            // });
    }
});