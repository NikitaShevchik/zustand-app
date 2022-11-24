import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import { useStore } from '../../zustand/zustand'
import '../../styles/pages/Counter/Counter.scss'

const Counter = () => {
    const count = useStore((state) => state.count)
    const inc = useStore((state) => state.inc)
    const dec = useStore((state) => state.dec)
    const dep = useStore((state) => state.dep)
    const noDep = useStore((state) => state.noDep)
    const [how, setHow] = useState('')
    return (
        <div className='counter'>
            <div>{count}</div>
            <Button text="+1" cb={() => inc()}></Button>
            <Button text="-1" cb={() => dec()}></Button>
            <Button text="+40" cb={() => dep(40)}></Button>
            <input type="number" value={how} onChange={(event) => setHow(event.target.value)} />
            <Button text={`-${how}`} cb={() => noDep(Number(how))} ></Button>
        </div>
    )
}

export default Counter