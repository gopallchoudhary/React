import React, { useState } from 'react'

interface cardProps {
    name: string,
    age: number
}
const Card: React.FC<cardProps> = (props) => {
    const [count, setCount] = useState<number>(10)
    const [value, setValue] = useState<string>()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCount(50)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        <div>
            <h1>{props.name} - {props.age}</h1>
            <h2>{count} LPA</h2>
            <button onClick={(e) => handleClick(e)}>click me</button>
            
        </div>
    )
}

export default Card