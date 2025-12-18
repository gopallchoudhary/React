import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}
export const fetchUsers = createAsyncThunk("users/login", async (amount: number) => {
    await new Promise((resolver) => setTimeout(resolver, 1000))
    return amount;
})
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, () => {

            })

            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<number>) => {
                state.value = action.payload;
            })
    }
})


export default counterSlice.reducer