import * as React from 'react'
import {BigImage, Holder} from './styles'

export const FullImage = (props) => {
  return(
    <Holder>
    <BigImage src={props.image}/>
    </Holder>
  )
}
