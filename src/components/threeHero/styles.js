import styled from 'styled-components'
import pic3 from '~/images/FrontKitchen-copy.png'

export const Holder = styled.div`
width: 100%;
outline: 2px solid var(--Dark);
outline-offset: -2px;
margin-top: -2px;
height: 400px;
display: flex;
justify-content: space-between;
margin-bottom: -30px;
position: relative;
@media(max-width: 650px){
  height: 350px;
}
@media(max-width: 500px){
  height: 300px;
}
@media(min-width: 1130px){
  height: 600px;
}
}
`

export const BigImage = styled.div`
background-image: ${props => `url(${props.imagey})`};
background-size: cover;
height: 100%;
transition: .5s linear;
outline: 2px solid var(--Dark);
outline-offset: -1px;
min-width: 100%;
position: relative;


`
export const Hidden = styled.div`
display: none;
`

export const TopVid = styled.video`
width: 100%;
object-fit: cover;
`