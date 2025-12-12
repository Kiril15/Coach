import { combineReducers } from "@reduxjs/toolkit";
import { mailSlice } from "./mail/mail.slice";
import { basicAbilitiesSlice } from "./basicAbilities/basikAbilities.slice";
import { userSlice } from "./user/user.slice";
import { dayliTipSlice } from "./dayliTip/dayliTip.slice";

export const rootReducer = combineReducers({
    mail: mailSlice.reducer,
    basicAbilities: basicAbilitiesSlice.reducer,
    user: userSlice.reducer,
    dayliTip: dayliTipSlice.reducer
})