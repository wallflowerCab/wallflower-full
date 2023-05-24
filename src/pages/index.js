import * as React from "react"
import ContactForm from "~/components/contactForm/contactForm"
import LogoImg from "~/images/WF_Logo.svg"
import {useStaticQuery, graphql, Link} from 'gatsby'
import {MainArea} from '~/components/mainArea/index'
import {ThreeHero} from '~/components/threeHero/index'


// markup
const IndexPage = ({data}) => {
  const homePage = data.datoCmsHomepage.mainArea;
  return (
    <>
    <ThreeHero/>
    <MainArea stuff={homePage} />
    </>
  )
}

export const query = graphql`
query MyQuery {
  datoCmsHomepage {
    id
    mainArea{
      ... on DatoCmsTextButton{
      linkText
      linkUrl
      roundCorner
      text{
        value

      }
      internal{
        type
      }
    }

    ... on DatoCmsTopImage{
      image{
        url
      }
      internal{
        type
      }
    }

    ... on DatoCmsTwoImage{
      imageOne{
        url
      }
      imageTwo{
        url
      }
      textOne{
        value
      }
      internal{
        type
      }
      textTwo{
        value
      }
      linkTextTwo
      linkUrlTwo
      linkTextOne
      linkUrlOne
    }

    ... on DatoCmsOneImage{
      imageOne{
        url
      }

      textOne{
        value
      }
      internal{
        type
      }


      linkTextOne
      linkUrlOne
    }

    ... on DatoCmsImageText{
      internal{
        type
      }
      image{
        url
      }
      text{
        value
      }
      linkUrl
      linkText
    }

    }
  }
}
`



export default IndexPage
