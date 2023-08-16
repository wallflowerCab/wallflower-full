import * as React from 'react'
import GlobalStyle from '~/styles/globalStyles'
import{ Nav, NavSmall} from '~/nav/index'
import Footer from '~/footer/index'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import styled from 'styled-components';

const Holder = styled.div`
outline: 2px solid var(--Dark);
outline-offset: -2px;
`

const Layout = ({children}) => {
  const breakpoints = useBreakpoint();

  return(
    <Holder>
    {breakpoints.sm ? <NavSmall/>: <Nav/>}
    <GlobalStyle/>
    {children}
    <Footer/>
    </Holder>
  )
}

export default Layout
