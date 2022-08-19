import React, {useState} from 'react'
import {Link} from 'gatsby'
import {Container, Name, Links, NameLogo, Logo, MenuSmall, LinksSmall, MenuButton} from './styles'
import LogoImg from "~/images/WF_Logo.svg"

export const Nav = () => {
  return(
    <Container>
      <Link to='/'>
      <NameLogo>
      <Logo src={LogoImg}/>
      <Name>
      <h2>Wall Flower</h2>
      <h4>Custom Cabinets</h4>
      </Name>
      </NameLogo>
      </Link>

      <Links>
      <Link to="/process">Process</Link>
      <Link to="/zoe">Work</Link>
      <Link to="/contact">Contact</Link>
      </Links>
    </Container>
  )
}

export const NavSmall = () => {

  const [menuVis, menuToggle] = useState(false);
  const menuSwitch = () => {
    menuToggle(!menuVis)
  }

  return(
    <>
    <Container>
      <Link to='/'>
      <NameLogo>
      <Logo src={LogoImg}/>
      <Name>
      <h2>Wall Flower</h2>
      <h4>Custom Cabinets</h4>
      </Name>
      </NameLogo>
      </Link>
    </Container>
    <MenuButton onClick={menuSwitch} active={menuVis}>menu</MenuButton>

    <MenuSmall active={menuVis}>
    <LinksSmall>
    <li><Link to="/process" onClick={menuSwitch}>Process</Link></li>
    <li><Link to="/zoe" onClick={menuSwitch}>Inpiration</Link></li>
    <li><Link to="/contact" onClick={menuSwitch}>Contact</Link></li>
    </LinksSmall>
    </MenuSmall>
    </>
  )
}
