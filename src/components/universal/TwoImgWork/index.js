import * as React from 'react'
import {Holder, Block, Title, Text, OutLink, Image, Content} from './styles'
import {Link} from 'gatsby'

export const TwoImgWork = (props) => {
  return(
    <Holder>
      <Block>
      <Content>
      <Image src={props.image1}/>
      </Content>
      </Block>

      <Block>
      <Content>
      <Image src={props.image2}/>
      </Content>
      </Block>
    </Holder>
  )
}
