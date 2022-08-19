import styled from 'styled-components'
import pic3 from '~/images/FrontKitchen-copy.png'

export const Holder = styled.div`
width: 100%;
outline: 2px solid var(--Dark);
outline-offset: -2px;
margin-top: -1px;
height: 450px;
display: flex;
justify-content: space-between;
margin-bottom: -30px;

@media(max-width: 650px){
  height: 350px;
}
@media(max-width: 500px){
  height: 300px;
}
`

export const BigImage = styled.div`
background-image: ${props => `url(${props.imagey})`};
background-size: cover;
height: 100%;
flex-grow: 1;
transition: .25s linear;
outline: 2px solid var(--Dark);
outline-offset: -1px;
:hover{
  flex-grow: 3;
  @media(max-width: 500px){
    flex-grow: 5;
  }
}
position: relative;
h4{
  position: absolute;
  top:-1px;
  left: 35px;
  padding: 10px 20px;
  background-color: var(--Light);
  outline: 2px solid var(--Dark);
  outline-offset: -2px;
  font-size: 12px;
  transform: rotate(90deg);
  transform-origin: top left;

}

`
