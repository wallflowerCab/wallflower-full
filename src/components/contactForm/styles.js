import styled from 'styled-components'

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
color: var(--Dark);
font-family: adelle-sans;

p{

}

input, select, textarea{
  border: none;
  border-bottom: 2px solid var(--Dark);
  margin: 0 0 20px;
  font-size: 18px;
  background: none;
  font-family: adelle-sans;
  color: var(--Dark);
  padding: 0;
  ::placeholder{
    color: var(--Dark);
    opacity: 0.5;
  }

  :focus{
    outline: none;
  }

}

input, select{
  width: calc(50% - 20px);
  height: 40px;
  @media(max-width: 500px){
    width: 100%;
  }
}

textarea{
  width: 100% !important;
  height: 300px;
  border-bottom: none;
  background-color: rgba(0, 0, 0, 0.03);
}

select{
  :hover{
    cursor: pointer;
  }
}
`

export const SubmitHold = styled.div`
display: flex;
width: 100%;
margin-top: 20px;
align-items: center;
justify-content: space-between;

@media(max-width: 500px){
  flex-wrap: wrap;
}
`


export const Check = styled.div`
display: flex;
align-items: center;
input{
height: 8px !important;
width: 30px !important;
margin: 0;
padding-bottom: 20px;
border: 2px solid;
appearance: none;
font-size: 9px;
:hover{
  cursor: pointer;
}
:checked{
  background-color: var(--Dark);
}
}
`

export const CheckText = styled.p`
font-size: 16px;
max-width: calc(100% - 50px);
margin-left: 20px;
`

export const Submit = styled.input`
border-bottom: none !important;
background-color: var(--Dark) !important;
color: var(--Light) !important;
height: 60px !important;
margin-top: 20px !important;

opacity: 1;
transition: 0.5s;
:hover{
  cursor: pointer;
  opacity: 0.9;
}
`

export const FormHead = styled.h2`
font-family: adelle-sans;
font-size: 32px;
color: var(--Dark);
`
