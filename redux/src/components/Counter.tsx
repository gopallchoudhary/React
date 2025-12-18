import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../state/store"
import { decrement, incrementAsync } from "../state/counter/counterApp"


const Counter = () => {
    const count = useSelector((state: RootState) => state.counterApp.value)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(incrementAsync(15))}>IncrementByAmt</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter