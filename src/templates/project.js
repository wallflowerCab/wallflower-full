import * as React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {MainArea} from '~/components/mainArea/index'
import {TopText} from '~/components/topText/index'
import { StructuredText } from 'react-datocms';
import {ContactSmall} from '~/components/universal/ContactSmall/index'
import {BottomNav} from '~/components/Project/BottomNav/index'

const ProjectTemplate = ({data}) => {
  const project = data.datoCmsProject.mainArea;
  const projectFull = data.datoCmsProject;

  return(
      <>
      <MainArea stuff={project} />
      <BottomNav
        prevText={projectFull.previousProjectText}
        prevLink={projectFull.previousProjectUrl}
        nextText={projectFull.nextProjectText}
        nextLink={projectFull.nextProjectUrl}
        />
      <ContactSmall text ="Feeling inpsired? Get in touch to get started on a cabinetry project of your own."/>
      </>
  )
}

export const query = graphql`
query($url: String!){
  allDatoCmsProject{
      edges{
        node{
          url
        } 
      }
    }
  datoCmsProject(url: {eq: $url}){
    url
    previousProjectText
    previousProjectUrl
    nextProjectText
    nextProjectUrl
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
      id
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

    ... on DatoCmsIntroText{
      internal{
        type
      }
      text{
        value
      }
    }

    ... on DatoCmsFullImage{
      internal{
        type
      }
      image{
        url
      }
    }

    ... on DatoCmsCalloutHalf{
      internal{
        type
      }
      image{
        url
      }
      text{
        value
      }
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


export default ProjectTemplate
