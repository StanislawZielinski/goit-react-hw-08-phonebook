import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' ;
import { apiSlice } from "./apiSlice";
import contactsSlice from "./contactsSlice";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";
import isLoggedSlice from "./isLoggedSlice";


// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedTokenReducer = persistReducer(persistConfig, tokenSlice);
// const persistedUserReducer = persistReducer(persistConfig, userSlice);
// const persistedisLoggedReducer = persistReducer(persistConfig, isLoggedSlice);

export let store = configureStore({
    reducer: {
        user: userSlice.reducer,
        contacts: contactsSlice.reducer,
        token: tokenSlice.reducer,
        isLogged: isLoggedSlice.reducer,
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