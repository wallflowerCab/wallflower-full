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
position: fixed;
top: 0;
z-index: 5;
background-color: var(--Light);
transition: 0.25s linear;

.hamburger-react{
  margin-right: 15px; 
}

&.notScrolled{
}

&.scrolled{
height:60px }
`

export const NameLogo = styled.div`
display: flex;
align-items: center;
margin-left: 30px;
`

export const Logo = styled.img`
height: 76px;
margin-right: 20px;
transition: 0.25s linear;

&.scrolled{
  height: 40px;
  margin-right: 10px;
}
`

export const Name = styled.div`

h2{
  font-size: 32px;
}

h4{
  font-size: 14px;
  padding-left: 3px;
}

&.scrolled{
  h2{
    font-size: 24px;
  }
  h4{
    display: none;
  }
}
`

export const Links = styled.div`
a{
  margin-right: 30px;
  font-size: 16px;
}

.active{
  color: var(--Highlight);
  letter-spacing: 1px;
}
`

export const MenuSmall = styled.div`
width: 100%;
background-color: var(--Light);
position: fixed;
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

export const Bump = styled.div`
height: 120px;
transition: 0.5s linear;


&.scrolled{
height:60px }


`

export const LinksSmall = styled.ul`
border-bottom: 8px solid var(--Dark);
padding-top: 120px;
position: relative;
width: 100%;
background-color: var(--Light);
transition: 0.25s linear;
&.scrolled{
padding-top:60px }

a{

    &.active{
      li{
      background-color: var(--HalfDark);
    }
  }
}

li{
  padding: 16px;
  outline: 2px solid var(--Dark);

  a{

  }
}

`
