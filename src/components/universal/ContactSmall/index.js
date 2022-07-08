import * as React from 'react'
import {Holder, Button} from './styles'
import { StructuredText } from 'react-datocms';
import {Link} from 'gatsby'

export const ContactSmall = (props) => {
  return(
    <Holder>
      <h3>{props.text}</h3>
      <Link to='/contact'><Button>Contact Us</Button></Link>
    </Holder>
  )
}
