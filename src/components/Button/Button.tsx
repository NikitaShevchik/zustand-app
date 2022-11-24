import styled from 'styled-components'

const SButton = styled.button`
padding: 8px 16px;
border-radius: 5px;
outline: none;
border: none;
color: #fff;
background-color: #000;
margin: 0 15px;
&:hover {
    background-color: rgb(51, 51, 51);
}
`

const Button = ({ text, cb }: { text: string | number, cb: VoidFunction }) => {
    return (
        <SButton onClick={() => cb()} className='button'>{text}</SButton>
    )
}

export default Button
