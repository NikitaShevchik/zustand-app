import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import '../../styles/pages/Main/Main.scss'

const Main = () => {
    const navigate = useNavigate()
    return (
        <div className='main'>
            <h1>Main</h1>
            <p>Zustand</p>
            <Button text={'To State Page'} cb={() => navigate('/state')} />
            <Button text={'To Counter Page'} cb={() => navigate('/counter')} />
            <Button text={'To Main Page'} cb={() => navigate('/')} />
            <Outlet />
        </div>
    )
}

export default Main