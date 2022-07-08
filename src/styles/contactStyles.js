import styled from 'styled-components'

export const Holder = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
margin: -2px auto 0;
outline: 2px solid var(--Dark);
outline-offset: -2px;

div{
  padding: 10px;
}

@media(max-width: 950px){
  grid-template-columns: repeat(1, 1fr);
}
`


export const Text = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media(max-width: 950px){
  border-bottom: 2px solid var(--Dark);

}

h2, h4{
  margin: 0 30px;
  @media(max-width: 950px){
    margin: 0 15px;
  }
}

h2{
  font-family: adelle-sans;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;

  @media(max-width: 950px){
    padding-top: 20px;
  }
}

h4{
  font-size: 18px;
  @media(max-width: 950px){
    padding-bottom: 20px;
  }
}
`

export const FormHold = styled.div`
padding: 30px;
width: calc(100% - 30px);
height: 100%;
border-left: 2px solid var(--Dark);
margin: 0 auto;

@media(max-width: 950px){
  border-left: none;
  margin-top: 30px;
}
`
