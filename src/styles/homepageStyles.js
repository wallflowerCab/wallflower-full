import styled from 'styled-components'

export const Container = styled.div`
width: calc(100% - 80px);
max-width: 1600px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
min-height: 100vh;
color: var(--Dark);
background-color: var(--Light);

@media(max-width: 1200px){
  width: calc(100% - 40px);
  flex-wrap: wrap;
  margin: 40px auto 0;
}
`

export const Text = styled.div`
padding-bottom: 40px;
`

export const Logo = styled.img`
height: 100px;
`

export const Header = styled.h1`
font-family: 'Planar';
font-weight: normal;
font-size: 72px;
margin: 20px 0;
`

export const Paragraph = styled.p`
font-family: adelle-sans;
font-weight: 400;
font-style: normal;
font-size: 16px;
color: #558319;
max-width: 400px;
@media(max-width: 1060px){
  max-width: 600px;
}
`

export const Form = styled.div`
width: 50%;
@media(max-width: 1200px){
  width: 60%;
}
@media(max-width: 1060px){
  width: 100%;
}
`
