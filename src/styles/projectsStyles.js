
import styled from 'styled-components'

export const Image = styled.img`
width: 100%;
border: 2px solid;
height: 600px;
object-fit: cover;
transition: 0.5s;
:hover{
  opacity: 0.7;
  cursor: pointer;
}
`

export const Container = styled.div`
width: calc(100% - 80px);
max-width: 1600px;
margin: 0 auto;
min-height: 100vh;
color: var(--Dark);
background-color: var(--Light);

@media(max-width: 1200px){
  width: calc(100% - 40px);
  flex-wrap: wrap;
  margin: 40px auto 0;
}
`

export const Block = styled.div`
margin: 30px 0;
h2{
  font-size: 20px;
}
`

export const TopText = styled.div`
width: 80%;
max-width: 600px;

h2{
  font-size: 48px;
  margin-bottom: 20px;
  font-family: adelle-sans
  font-weight: 600;
}
h4{
  font-size: 22px;
}

@media (max-width: 850px){
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
`
