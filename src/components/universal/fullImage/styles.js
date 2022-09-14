import styled from 'styled-components'

export const BigImage = styled.img`
width: 100%;
outline: 2px solid var(--Dark);
`

export const Holder = styled.div`
width: calc(100% - 20px);
margin: 0 auto;
padding: 10px;
background-color: var(--Light);
outline: 2px solid var(--Dark);
outline-offset: -2px;
margin-top: -2px;

@media(max-width: 750px){
  padding: 6px;
  width: calc(100% - 12px);
}
`
