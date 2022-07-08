import * as React from 'react'
import GlobalStyle from '~/styles/globalStyles'
import{ Nav, NavSmall} from '~/nav/index'
import Footer from '~/footer/index'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Layout = ({children}) => {
  const breakpoints = useBreakpoint();

  return(
    <>
    {breakpoints.sm ? <NavSmall/>: <Nav/>}
    <GlobalStyle/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout
