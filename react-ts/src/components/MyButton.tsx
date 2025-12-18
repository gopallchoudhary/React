import React, { useState } from 'react'

interface ButtonProps {
    text: string,
    onClick?: () => void,
    fontSize: number
}

interface Book {
    name: string,
    price: number
}
const MyButton: React.FC<ButtonProps> = ({text}) => {
    const [value, setValue] = useState<Book>({
        name: "One",
        price: 10
    })

    return (
        <div>
            <h3>Name: {value.name}, Price {value.price}</h3>
            <button onClick={() => setValue({ name: "Two", price: 20 })}>{text}</button>
        </div>
    )
}

export default MyButton