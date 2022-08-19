import styled from 'styled-components'

export const Holder = styled.div`
width: calc(100% - 60px);
padding: 60px 30px;
background-color: var(--Dark);
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-column-gap: 30px;

@media(max-width: 750px){
  grid-template-columns: repeat(1, 1fr);
  padding: 30px;
}
`

export const ImgHold = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 750px){
    justify-content: flex-start;
    margin-bottom: 20px;
}
`

export const FootLogo = styled.img`
width: 120px;

@media(max-width: 750px){
width: 60px;
}
`

export const Column = styled.div`
border-top: 1px solid #fff;
@media(max-width: 750px){
    margin-top: 12px;
}
`

export const Title = styled.h3`
color: var(--Light);
font-size: 18px;
margin-top: 12px;
font-family: planar;
margin-bottom: 6px;
a{
  color: var(--Light);
}
@media(max-width: 750px){
}
`

export const List = styled.ul`
li{
  color: var(--Light);
  font-size: 12px;
  font-family: adelle-sans;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 24px;
  a{
    color: var(--Light);
  }
}
`
