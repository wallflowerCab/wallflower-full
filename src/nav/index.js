import React, {useState, useEffect} from 'react'
import {Link} from 'gatsby'
import {Container, Name, Links, NameLogo, Logo, MenuSmall, LinksSmall, MenuButton, Bump} from './styles'
import LogoImg from "~/images/WF_Logo.svg"
import {useScrollPosition} from '~/hooks/useScrollPosition'
import { Turn as Hamburger } from 'hamburger-react'

export const Nav = () => {
  function classNames(...classes) {
     return classes.filter(Boolean).join(' ')
   }
  const scrollPosition = useScrollPosition()


  return(
    <>
    <Container className={classNames(
        scrollPosition > 0 ? 'scrolled' : 'notScrolled',
      )}>

      <Link to='/'>
      <NameLogo>
      <Logo src={LogoImg} className={classNames(
          scrollPosition > 0 ? 'scrolled' : 'notScrolled',
        )}/>
      <Name className={classNames(
          scrollPosition > 0 ? 'scrolled' : 'notScrolled',
        )}>
      <h2>Wall Flower</h2>
      </Name>
      </NameLogo>
      </Link>

      <Links>
      <Link to="/process"  activeClassName="active">Process</Link>
      <Link to="/projects"  activeClassName="active">Projects</Link>
      <Link to="/contact"  activeClassName="active">Contact</Link>
      </Links>
    </Container>
    <Bump className={classNames(
        scrollPosition > 0 ? 'scrolled' : 'notScrolled',
      )}/>
    </>
  )
}

export const NavSmall = () => {
  const [isOpen, setOpen] = useState(false)
  const [menuVis, menuToggle] = useState(false);
  const openToggle = () => {
    setOpen(!isOpen)
  }
  const makeClosed = () =>{
    setOpen(false)
  }

  const menuSwitch = () => {
    menuToggle(!menuVis)
  }


  function classNames(...classes) {
     return classes.filter(Boolean).join(' ')
   }
  const scrollPosition = useScrollPosition()

  return(
    <>
    <Container className={classNames(
        scrollPosition > 0 ? 'scrolled' : 'notScrolled',
      )}>
      <Link to='/' onClick={makeClosed}>
      <NameLogo>
      <Logo src={LogoImg} className={classNames(
          scrollPosition > 0 ? 'scrolled' : 'notScrolled',
        )}/>
      <Name className={classNames(
          scrollPosition > 0 ? 'scrolled' : 'notScrolled',
        )}>
      <h2>Wall Flower</h2>
      </Name>
      </NameLogo>
      </Link>
      <Hamburger toggled={isOpen} toggle={setOpen} />

    </Container>
    <MenuSmall active={isOpen}>
    <LinksSmall className={classNames(
        scrollPosition > 0 ? 'scrolled' : 'notScrolled',
      )}>
    <Link to="/process" onClick={openToggle} activeClassName="active"><li>Process</li></Link>
  <Link to="/projects" onClick={openToggle} activeClassName="active"><li>Projects</li></Link>
    <Link to="/contact" onClick={openToggle} activeClassName="active"><li>Contact</li></Link>
    </LinksSmall>
    </MenuSmall>
    <Bump className={classNames(
        scrollPosition > 0 ? 'scrolled' : 'notScrolled',
      )}/>
    </>
  )
}
