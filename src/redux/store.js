import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import contactsSlice from "./contactsSlice";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";
import isLoggedSlice from "./isLoggedSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        contacts: contactsSlice.reducer,
        token: tokenSlice.reducer,
        isLogged: isLoggedSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,

    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;