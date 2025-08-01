import {
    createAsyncThunk,
    createSlice,
    type PayloadAction,
} from "@reduxjs/toolkit";

interface counterState {
    value: number;
}

const initialState: counterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, () => {
                console.log("Increment Pending");
            })
            .addCase(
                incrementAsync.fulfilled,
                (state, action: PayloadAction<number>) => {
                    state.value += action.payload;
                    console.log("Increment fulfilled");

                }
            );
    },
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
