import * as React from 'react'
import {Holder, Block, Title, Text, OutLink, Image, Content} from './styles'
import {Link} from 'gatsby'

export const OneBlock = (props) => {
  return(
    <Holder>
      <Block>
      <Content>
      <Image src={props.image1}/>
      <Text>{props.text1}</Text>
      </Content>
      <OutLink href={props.link1}>{props.linktext1}</OutLink>
      </Block>
    </Holder>
  )
}
