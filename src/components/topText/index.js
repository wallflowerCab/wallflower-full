import * as React from 'react'
import {Holder} from './styles'
import { StructuredText } from 'react-datocms';

export const TopText = (props) => {
  return(
    <Holder>
    <StructuredText data={props.text}/>
    </Holder>
  )
}
