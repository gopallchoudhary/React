import { createSlice } from "@reduxjs/toolkit";


interface indexState {
    value: number;
}

const initialState: indexState = {
    value: 1,
}


const indexSlice = createSlice({
    name: "indexApp",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const { increment, decrement } = indexSlice.actions;

export default indexSlice.reducer;