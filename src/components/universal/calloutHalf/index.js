import * as React from 'react'
import {Holder, TextHold, ImageHold, Image} from './styles'
import { StructuredText } from 'react-datocms';

export const CalloutHalf = (props) => {
  return(
    <Holder>
    <TextHold>
    <StructuredText data ={props.text}/>
    </TextHold>

    <ImageHold>
    <Image src={props.image}/>
    </ImageHold>
    </Holder>
  )
}
