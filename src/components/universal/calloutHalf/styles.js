import styled from 'styled-components'

export const Holder = styled.div`
width: 100%;
margin: -2px auto;
align-items: stretch;
display: flex;
background-color: var(--Light);
outline: 2px solid var(--Dark);
outline-offset: -2px;

@media(max-width: 750px){
  flex-wrap: wrap;
}
`

export const TextHold = styled.div`
width: 50%;
padding: 30px;
h2{
  font-size: 36px;
  margin-bottom: 12px;
}

h4{
  font-size: 20px;
}

@media(max-width: 750px){
  width: 100%;
}
`

export const ImageHold = styled.div`
width: 50%;
padding: 30px;
outline: 2px solid var(--Dark);
outline-offset: -2px;

@media(max-width: 750px){
  width: 100%;
  padding: 6px;
}
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
outline: 2px solid var(--Dark);
`
