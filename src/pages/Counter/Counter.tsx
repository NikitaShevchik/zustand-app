import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Button from '../../components/Button/Button'
import useStore from '../../zustand/zustand'

const SCounter = styled.div`
    font-size: 30px;
    padding: 20px 0;
    font-weight: 700;
`
const SInput = styled.input`
    width: 90px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 5px;
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.col};
`

const themes = {
    dark: {
        bg: "#000",
        col: "red"
    },
    blue: {
        bg: "skyblue",
        col: "#000",
    }
}

const rotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    
    100%{
        transform: rotate(360deg);
    }
`
const SRotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
`

const STitle = styled.div`
    font-size: 50px;
    &.red{
        color: red;
    }
`

const Counter = () => {
    const { count, inc, dec, dep, noDep, beb, bebr, setBeb } = useStore()
    const [how, setHow] = useState('')
    const [bebHow, setBebHow] = useState('')

    return (
        <SCounter>
            <STitle className='red' >{count}</STitle>
            <Button cb={() => beb()} text="beb"></Button>
            {bebr}
            <SRotate>TEST</SRotate>
            <Button text="+1" cb={() => inc()}></Button>
            <Button text="-1" cb={() => dec()}></Button>
            <Button text="+40" cb={() => dep(40)}></Button>
            <SInput theme={themes.blue} type="number" placeholder='Number...' value={how} onChange={(event) => setHow(event.target.value)} />
            <Button text={`-${how}`} cb={() => noDep(Number(how))} ></Button>
            <SInput theme={themes.dark} type="text" placeholder='Your beb...' value={bebHow} onChange={(event) => setBebHow(event.target.value)} />
            <Button cb={() => setBeb(bebHow)} text="custom beb"></Button>
        </SCounter >
    )
}

export default Counter