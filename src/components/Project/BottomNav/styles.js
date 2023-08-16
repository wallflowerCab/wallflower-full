import styled from 'styled-components'

export const Holder = styled.div`
width: calc(100% - 60px);
margin: -1px auto -2px;
padding: 30px;
background-color: var(--Light);
outline: 2px solid var(--Dark);
outline-offset: -2px;

display: flex;
justify-content: space-between;
.next{
  text-align: right;
}

.middle{
  text-align: center;
}

.prev{
  text-align: left;
}
a{
width: 33%;
font-size: 22px;

@media(max-width: 720px){
  width: 100%;
}
}

.hide{
  display: none;
}

`
