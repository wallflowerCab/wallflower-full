import * as React from 'react'
import {Holder, Column, Title, List, FootLogo, ImgHold} from './styles'
import Logo from '~/images/WF_Logo_Foot.svg'

const Footer = () => {
  return(
    <Holder>
      <ImgHold>
      <FootLogo src={Logo}/>
      </ImgHold>

      <Column>
      <Title>Our Work</Title>
      </Column>

      <Column>
      <Title>About Us</Title>
      <List>
      <li>process</li>
      <li>team</li>
      </List>
      </Column>

      <Column>
      <Title>Address</Title>
      <List>
        <li>4717 ne 10th ave</li>
        <li>Portland, OR 97211</li>
      </List>
      </Column>

      <Column>
      <Title>Contact</Title>
      <List>
        <li>Email</li>
        <li>Instagram</li>
      </List>
      </Column>

      <Column>
      <Title>More Info</Title>
      <List>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </List>
      </Column>
    </Holder>
  )
}

export default Footer
