import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import counterApp from './counter/counterApp'
import indexApp from './counter/indexApp'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        counterApp: counterApp, 
        indexApp: indexApp,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch