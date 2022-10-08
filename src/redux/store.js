import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import contactsSlice from "./contactsSlice";
import tokenSlice from "./tokenSlice";

const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        token: tokenSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;