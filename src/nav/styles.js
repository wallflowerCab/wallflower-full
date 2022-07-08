import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 120px;
outline: solid;
outline-width: 2px;
outline-offset: -2px;
align-items: center;
justify-content: space-between;
width: 100%;
margin: 0 auto;

`

export const NameLogo = styled.div`
display: flex;
align-items: center;
margin-left: 30px;
`

export const Logo = styled.img`
height: 76px;
margin-right: 20px;
`

export const Name = styled.div`

h2{
  font-size: 32px;
}

h4{
  font-size: 14px;
  padding-left: 3px;
}
`

export const Links = styled.div`
a{
  margin-right: 30px;
  font-size: 16px;
}
`

export const MenuSmall = styled.div`
width: 100%;
background-color: var(--Light);
position: absolute;
outline: 2px solid var(--Dark);
outline-offset: -2px;
margin-top: -2px;
text-align: center;
z-index: 3;

transition: 0.5s linear;
max-height: ${props => props.active ? "400px" : "0"};
overflow: hidden;

h2{
  padding: 10px;
  outline: 2px solid var(--Dark);
  margin-top: 1px;
}
`

export const MenuButton = styled.h2`
  padding: 10px;
  outline: 2px solid var(--Dark);
  margin-top: 1px;
  outline-offset: -2px;
  margin-top: -2px;
  text-align: center;
  transition: 0.5s linear;

  color: ${props => props.active ? "var(--Light)" : "var(--Dark)"};
  background-color: ${props => props.active ? "var(--Dark)" : "var(--Light)"};

  :hover{
    cursor: pointer;
  }

`

export const LinksSmall = styled.ul`
border-bottom: 8px solid var(--Dark);
li{
  padding: 16px;
  outline: 2px solid var(--Dark);

}

`
