import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface counterState { 
    value: number;
}

const initialState: counterState = {
    value: 10
}

const counterSlicee = createSlice({
    name: "counterApp", 
    initialState, 
    reducers: {
        incrementByValue: (state, action:PayloadAction<number>) => {
            state.value +=action.payload;
        }, 

        increment: (state) => {
            state.value+=1;
        }, 
        
        decrement: (state) => {
            state.value-=1;
        }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, () => {
                console.log("pending");
                
            })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.value += action.payload;
            })
    }
})

export const incrementAsync = createAsyncThunk(
    "counterApp/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount;
    }
)

export const {increment, incrementByValue, decrement} = counterSlicee.actions;

export default counterSlicee.reducer;