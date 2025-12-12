// @ts-ignore
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FLUSH, PAUSE, PERSIST, PersistConfig, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import { rootReducer } from './root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user', 'basicAbilities', 'dayliTip'],
}

const persistedReducer = persistReducer<TypeRootState>(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware ({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
})

export const persistor = persistStore(store)

export type TypeRootDispatch = typeof store.dispatch

export type TypeRootState = ReturnType<typeof rootReducer>