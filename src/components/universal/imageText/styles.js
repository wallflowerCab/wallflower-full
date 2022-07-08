import styled from 'styled-components'

export const Holder = styled.div`
width: calc(100% - 60px);
padding: 30px;
outline: 2px solid var(--Dark);
outline-offset: -2px;
margin-top: -1px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--Light);

@media(max-width: 950px){
flex-wrap: wrap;
}
`

export const Image = styled.img`
width: 66%;
object-fit: cover;
outline: 2px solid var(--Dark);

@media(max-width: 950px){
  width: 100%;
  max-height: 500px;
}
`

export const Text = styled.div`
width: 34%;
padding: 0 0 0 30px;
margin-left: 30px;
border-left: 2px solid var(--Dark);
h2{
  font-family: adelle-sans;
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  padding: 0;
}

h4{
  font-size: 18px;
  margin-bottom: 15px;
}

a{
  text-decoration: underline;
  font-size: 18px;
}

@media(max-width: 950px){
margin-left: 0;
border-left: none;
padding: 0;
width: 100%;
max-width: 600px;
margin-top: 20px;
}
`
