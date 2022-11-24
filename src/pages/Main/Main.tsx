import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button/Button'

const SMain = styled.div`
    padding: 50px 0;
    text-align: center;
`

const Main = () => {
    const navigate = useNavigate()
    return (
        <SMain>
            <h1>Main</h1>
            <span><p>1. При использовании css-js нужен ли главный индекс css. Или также сделать все компонентами</p>
                <p>2. При использовании css-js мы создаем компоненты в компонентах, норм ли это?</p>
                <p>3. Какой css-js самый топовый</p>
                <p>4. Неужели никто не юзает в проектах классический препроцессорный css.</p>
                <p>5. Почему это работает быстрее. Мы ведь создаем компонент в компонент... </p>
                <p>6. Много лишних строчек кода. А если я все вынесу в один файл и экспортирую - это ведь = css</p>
            </span>
            <Button text={'To State Page'} cb={() => navigate('/state')} />
            <Button text={'To Counter Page'} cb={() => navigate('/counter')} />
            <Button text={'To Main Page'} cb={() => navigate('/')} />
            <Outlet />
        </SMain>
    )
}

export default Main