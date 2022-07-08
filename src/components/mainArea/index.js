import * as React from "react"
import {TopImg} from '~/components/universal/TopImg/index'
import {TextButton} from '~/components/universal/TextButton/index'
import {TwoBlocks} from '~/components/universal/TwoBlocks/index'
import {ImageText} from '~/components/universal/imageText/index'
import {FullImage} from '~/components/universal/fullImage/index'
import {TopText} from '~/components/topText/index'
import {CalloutHalf} from '~/components/universal/calloutHalf/index'

import {Text, Form, Logo, Header, Paragraph, Container} from "~/styles/homepageStyles"
import {useStaticQuery, graphql, Link} from 'gatsby'
import { StructuredText } from 'react-datocms';

export const MainArea = (props) => {
const outData = props.stuff
return(
  <>

    {outData.map((chunk) => {
      if(chunk.internal.type === 'DatoCmsTextButton'){
        return(
          <TextButton corner={chunk.roundCorner ? 'round' : null} internal={chunk.internalLink} button={chunk.linkText} link={chunk.linkUrl} text={
            <StructuredText data={chunk.text}

            />
          }/>
      )
      }
      else if(chunk.internal.type === 'DatoCmsTwoImage'){
        return(
          <TwoBlocks
            image1={chunk.imageOne.url}
            text1={<StructuredText data={chunk.textOne} />}
            linktext1={chunk.linkTextOne}
            link1={chunk.linkUrlOne}
            image2={chunk.imageTwo.url}

            text2={<StructuredText data={chunk.textTwo} />}
            linktext2={chunk.linkTextTwo}
            link2={chunk.linkUrlTwo}
          />
        )
      }else if(chunk.internal.type === "DatoCmsTopImage"){
        return(
          <TopImg pic={chunk.image.url}/>
        )
      }else if(chunk.internal.type === "DatoCmsImageText"){
        return(
          <ImageText
          image={chunk.image.url}
          text={<><StructuredText data={chunk.text}/><Link to={chunk.linkUrl}>{chunk.linkText}</Link></>}

          />
        )
      }else if(chunk.internal.type ==="DatoCmsFullImage"){
        return(
          <FullImage image={chunk.image.url}/>
        )
      }else if(chunk.internal.type ==="DatoCmsIntroText"){
        return(<TopText text={chunk.text}/>)
      }else if(chunk.internal.type ==="DatoCmsCalloutHalf"){
        return(<CalloutHalf image={chunk.image.url} text={chunk.text}/>)
      }

      else return null

    })}





  </>
)

}
