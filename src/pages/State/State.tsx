import React from 'react'
import useStore from '../../zustand/zustand'
import styled from 'styled-components'

const SState = styled.div`
    font-size: 50px;
    font-weight: 700;
    padding: 50px 0;
`

const State = () => {
    const count = useStore((state) => state.count)
    return (
        <SState className='state'>
            <div>{count}</div>
        </SState>
    )
}

export default State