import styled from 'styled-components'

export const Holder = styled.div`
width: calc(100% - 60px);
margin: 0 auto;
padding: 60px 30px;
outline: 2px solid var(--Dark);
outline-offset: -2px;
background-color: var(--Light);
display: flex;
justify-content: space-between;
align-items: center;

h3{
  font-size: 28px;
  max-width: 700px;
}

@media(max-width: 750px){
  flex-wrap: wrap;
}
`

export const ButtonPad = styled.div`
width: 34%;
display: flex;
justify-content: center;

`

export const Button = styled.div`

font-family: planar;
font-size: 24px;
border: 2px solid var(--Dark);
padding: 20px 40px;
transition: 0.25s linear;
letter-spacing: 0;
min-width: 130px;
text-align: center;
margin-left: 20px;
:hover{
  border: 4px solid var(--Dark);
  cursor: pointer;
  padding: 19px 39px;
  letter-spacing: 1px;
  color: var(--Dark);
}

@media(max-width: 750px){
  margin-top: 20px;
  margin-left: 0;
}
`
