import React, { useState } from 'react'

const Input: React.FC = () => {
    const [value, setValue] = useState<String | undefined>()

    const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    
    return (
        <div>
            <form onSubmit={submitForm} action="">
                <input onChange={handleEvent} type="text" placeholder='input your text here' />
                <button type='submit'>Submit</button>
            </form>
            <h2>{value}</h2>
        </div>
    )
}

export default Input