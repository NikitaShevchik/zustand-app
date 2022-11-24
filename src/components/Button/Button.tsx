import React from 'react'
import '../../styles/components/Button/Button.scss'

const Button = ({ text, cb }: { text: string | number, cb: VoidFunction }) => {
    return (
        <button onClick={() => cb()} className='button'>{text}</button>
    )
}

export default Button