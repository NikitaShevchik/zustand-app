import React from 'react'
import { useStore } from '../../zustand/zustand'
import '../../styles/pages/State/State.scss'

const State = () => {
    const count = useStore((state) => state.count)
    return (
        <div className='state'>
            <div>{count}</div>
        </div>
    )
}

export default State