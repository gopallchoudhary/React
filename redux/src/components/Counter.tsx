import { useDispatch, useSelector } from "react-redux"
import {type AppDispatch, type RootState } from "../state/store"
import { decrement, incrementAsync } from "../state/counter/counterSlice"


const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(incrementAsync(10))}>IncrementByAmt</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter