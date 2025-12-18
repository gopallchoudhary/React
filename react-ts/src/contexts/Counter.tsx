import React, { createContext, useContext, useState } from "react";

interface CounterContextProps {
    children: React.ReactNode
}

interface CounterContextValues {
    count: number, 
    setCount: (num: number) => void
}

const CounterContext = createContext<CounterContextValues | null>(null)
export const userCounter = () => {
    return useContext(CounterContext)
}

const CounterContextProvider: React.FC<CounterContextProps> = ({children}) => {

    const [count, setCount] = useState(1)

    const value = {
        count, 
        setCount
    }

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider