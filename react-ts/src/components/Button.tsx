import React from 'react'

// type Color = "red" | "blue" | "green" | "yellow" | "purple"

// interface ButtonProps {
//     text: string,
//     fontSize: number,
//     pillShape: boolean,
//     buttonSize: "sm" | "md" | "lg",
//     backgroundColor: Color,
//     textColor: Color,
//     padding: [number, number, number, number]
// }

interface ButtonProps {
    style: React.CSSProperties,
    text: string
}

const Button: React.FC<ButtonProps> = (props) => {

    return (
        <div >
            <button style={props.style} >{props.text}</button>
        </div>
    )
}

export default Button