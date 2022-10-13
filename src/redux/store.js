import { configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;
import { apiSlice } from "./apiSlice";
import contactsSlice from "./contactsSlice";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";
import isLoggedSlice from "./isLoggedSlice";


const persistConfig1 = {
    key: 'root1',
    storage,
};
const persistConfig2 = {
  key: 'root2',
  storage,
};
const persistConfig3 = {
  key: 'root3',
  storage,
};


const persistedisLoggedReducer = persistReducer(persistConfig1, isLoggedSlice.reducer);
const persistedUserReducer = persistReducer(persistConfig2, userSlice.reducer);
const persistedTokenReducer = persistReducer(persistConfig3, tokenSlice.reducer);

export let store = configureStore({
    reducer: {
        token: persistedTokenReducer,
        user: persistedUserReducer,
        isLogged: persistedisLoggedReducer,

        contacts: contactsSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,

    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(apiSlice.middleware)
});

export let persistor = persistStore(store);