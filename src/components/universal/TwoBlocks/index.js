import * as React from 'React'
import {Holder, Block, Title, Text, OutLink, Image, Content} from './styles'
import {Link} from 'gatsby'

export const TwoBlocks = (props) => {
  return(
    <Holder>
      <Block>
      <Content>
      <Image src={props.image1}/>
      <Text>{props.text1}</Text>
      </Content>
      <OutLink href={props.link1}>{props.linktext1}</OutLink>
      </Block>

      <Block>
      <Content>
      <Image src={props.image2}/>
      <Text>{props.text2}</Text>
      </Content>
      <OutLink href={props.link2}>{props.linktext2}</OutLink>

      </Block>
    </Holder>
  )
}
