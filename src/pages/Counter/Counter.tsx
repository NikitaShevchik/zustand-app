import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import useStore from '../../zustand/zustand'


const SCounter = styled.div`
    font-size: 30px;
    padding: 30px 0;
    font-weight: 700;
`
const SInput = styled.input`
    width: 90px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 5px;
`


const Counter = () => {
    const { count, inc, dec, dep, noDep, beb, bebr, setBeb } = useStore()
    const [how, setHow] = useState('')
    const [bebHow, setBebHow] = useState('')

    return (
        <SCounter>
            <div>{count}</div>
            <Button cb={() => beb()} text="beb"></Button>
            {bebr}
            <Button text="+1" cb={() => inc()}></Button>
            <Button text="-1" cb={() => dec()}></Button>
            <Button text="+40" cb={() => dep(40)}></Button>
            <SInput type="number" placeholder='Number...' value={how} onChange={(event) => setHow(event.target.value)} />
            <Button text={`-${how}`} cb={() => noDep(Number(how))} ></Button>
            <SInput type="text" placeholder='Your beb...' value={bebHow} onChange={(event) => setBebHow(event.target.value)} />
            <Button cb={() => setBeb(bebHow)} text="custom beb"></Button>
        </SCounter >
    )
}

export default Counter