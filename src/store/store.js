import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import userReducer from '../userSlice/userSlice'
import {
  persistReducer,
  persistStore,
 
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import dataFetchReducer from '../userSlice/dataFetchSlice'


const rootReducer = combineReducers({
  user: userReducer,
  dataFetch: dataFetchReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)