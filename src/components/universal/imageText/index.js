import * as React from 'React'
import {Holder, Image, Text} from './styles'

export const ImageText = (props) => {
  return(
    <Holder>
      <Image src={props.image}/>
      <Text>{props.text}</Text>
    </Holder>
  )
}
