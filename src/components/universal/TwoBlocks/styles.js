import styled from 'styled-components'

export const Holder = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: var(--Light);

@media(max-width: 750px){
  flex-wrap: wrap;
}
`

export const Block = styled.div`
width: calc(50% - 1px);
outline: 2px solid;
display: flex;
flex-direction: column;
justify-content: space-between;

@media(max-width: 750px){
  width: 100%;
}
`

export const Content = styled.div`
padding: 50px 30px 30px;
`

export const Title = styled.h2`
font-family: adelle-sans;
font-weight: 600;
margin-bottom: 10px;

`

export const Text = styled.div`
h4{
margin: 0;
}

h2{
  font-family: adelle-sans;
  font-weight: 600;
  margin-bottom: 10px;
}

p{
  margin-top: 18px;
}
a{  text-decoration: underline;
}
`

export const OutLink = styled.a`
margin-bottom: 30px;
margin-left: 30px;
text-decoration: underline;
`

export const Image = styled.img`
width: 100%;
height: 400px;
object-fit: cover;
margin-bottom: 10px;
outline: 2px solid var(--Dark);
@media(max-width: 950px){
  height: 325px;
}
@media(max-width: 750px){
  height: 250px;
}
`
