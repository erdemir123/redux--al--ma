import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import NewsReducer from "../features/NewsSlice"

export const store =configureStore({
    reducer:{
        auth:authReducer,
        news:NewsReducer
    }
})