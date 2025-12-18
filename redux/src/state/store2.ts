import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter2/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})