import * as React from 'react'
import {Holder, Column, Title, List, FootLogo, ImgHold} from './styles'
import {Link} from 'gatsby'
import Logo from '~/images/WF_Logo_Foot.svg'

const Footer = () => {
  return(
    <Holder>
      <ImgHold>
      <FootLogo src={Logo}/>
      </ImgHold>

      <Column>
      <Title><Link to='/zoe'>Our Work</Link></Title>
      </Column>

      <Column>
      <Title>About Us</Title>
      <List>
      <li><Link to='/process'>Process</Link></li>
      </List>
      </Column>

      <Column>
      <Title>Address</Title>
      <List>
        <li>9210 n Peninsular ave, Portland, OR 97217</li>
      </List>
      </Column>

      <Column>
      <Title>Contact</Title>
      <List>
        <li><a href="mailto: al@wallflower.cab">Email</a></li>
      </List>
      </Column>

      <Column>
      <Title>More Info</Title>
      <List>
        <li><Link to='/privacy'>Privacy Policy</Link></li>
        <li><Link to='/tos'>Terms of Service</Link></li>
      </List>
      </Column>
    </Holder>
  )
}

export default Footer
