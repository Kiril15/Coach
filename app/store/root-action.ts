import { userSlice } from './user/user.slice'
import * as basicAbilities from './basicAbilities/basicAbilities.actions'
import { mailSlice } from './mail/mail.slice'
import * as mailActions from './mail/mail.actions'
import * as userActions from './user/user.actions'
import * as dayliAction from './dayliTip/dayliTip.actions'
import { dayliTipSlice } from './dayliTip/dayliTip.slice'
import * as challengeAction from './challenge/challenge.action'

export const rootAction = {
    ...userSlice.actions,
    ...basicAbilities,
    ...mailSlice.actions,
    ...mailActions,
    ...userActions,
    ...dayliAction,
    ...dayliTipSlice.actions,
    ...challengeAction
}