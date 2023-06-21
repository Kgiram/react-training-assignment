import { configureStore } from "@reduxjs/toolkit";
import { reminderReducer } from "./reminderReducer";

export const store = configureStore({
    reducer: {
        reminderReducer: reminderReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})