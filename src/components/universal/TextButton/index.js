import * as React from 'react'
import {Holder, Text, Button, ButtonPad} from './styles'
import {Link} from 'gatsby'

export const TextButton = (props) => {
  return(
    <Holder className={props.corner}>
      <Text>{props.text}</Text>
      <ButtonPad>
      <Link to={props.link}><Button>{props.button}</Button></Link>
      </ButtonPad>
    </Holder>
  )
}
