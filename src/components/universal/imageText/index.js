import * as React from 'react'
import {Holder, Image, Text} from './styles'

export const ImageText = (props) => {
  return(
    <Holder>
      <Image src={props.image}/>
      <Text>{props.text}</Text>
    </Holder>
  )
}
