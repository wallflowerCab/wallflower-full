import styled from 'styled-components'

export const Picture = styled.img`
width: 100%;
outline: solid;
outline-width: 2px;
outline-offset: -2px;
margin-top: -2px;
height: 600px;
object-fit: cover;
position: sticky;
top: 0;
z-index: -1;
margin-bottom: -20px;

@media(max-width: 950px){
  height: 450px;
}

@media(max-width: 500px){
  height: 250px;
}
`
