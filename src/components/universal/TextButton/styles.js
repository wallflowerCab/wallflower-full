import styled from 'styled-components'

export const Holder = styled.div`
width: calc(100% - 60px);
padding: 60px 30px;
position: relative;
z-index: 2;
background-color: var(--Light);
display: flex;
align-items: center;
outline: solid;
outline-width: 2px;
outline-offset: -2px;
margin-bottom: -2px;

@media(max-width: 750px){
  flex-wrap: wrap;
  padding: 30px;
}
`

export const Text = styled.div`
width: calc(66% - 30px);
padding: 10px 30px 10px 0;
border-right: 2px solid var(--Dark);
@media(max-width: 750px){
  width: 100%;
  border-right: none;
}
h2{
  font-family: adelle-sans;
  font-weight: 600;
  font-size: 42px;
  margin-bottom: 6px;
}

h4{
  font-size: 28px;
}

@media(max-width: 950px){
  h2{
    font-size: 32px;
  }
  h4{
    font-size: 22px;
  }
}

`
export const ButtonPad = styled.div`
width: 34%;
display: flex;
justify-content: center;
@media(max-width: 750px){
  justify-content: flex-start;
  margin-top: 20px;
  width: 100%;
}
`

export const Button = styled.div`
background-color: var(--HalfDark);
font-family: planar;
font-size: 24px;
border: 2px solid var(--Dark);
padding: 20px 40px;
transition: 0.25s linear;
letter-spacing: 0;
:hover{
  border: 4px solid var(--Dark);
  cursor: pointer;
  padding: 19px 39px;
  letter-spacing: 1px;
  color: var(--Dark);
}
`
