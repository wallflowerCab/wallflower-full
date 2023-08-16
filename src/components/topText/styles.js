import styled from 'styled-components'

export const Holder = styled.div`
width: calc(100% - 60px);
margin: 0 auto;
padding: 60px 30px;
background-color: var(--Light);
outline: 2px solid var(--Dark);
outline-offset: -2px;
h2{
font-family: adelle-sans;
font-weight: 600;
font-size: 36px;
margin-bottom: 12px;
}

@media(max-width: 750px){
  padding: 30px;
}

h4{
  width: 66%;
  max-width: 800px;
  font-size: 22px;
  margin-bottom: 15px;
  @media(max-width: 750px){
      width: 100%;
    }
  )
}
`
