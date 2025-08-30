import React from 'react'

type InputType = {
    type: string,
    placeholder?: string,
}

const TextInput = ({ type, placeholder }: InputType) => {
    return (
        <div className="relative w-full text-xl  bg-[rgba(208,204,199,0.1)]">

            <input
                type={type}
                placeholder={placeholder || 'First name'}
                className='w-full pl-12 py-6 text-gray-400 rounded-[20px] bg-[rgba(208,204,199,0.1)] focus:outline-none focus:ring-2'
            />
        </div>
    )
}

export default TextInput
