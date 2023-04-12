import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {FullImage} from '~/components/universal/fullImage/index'
import {Image, Container, TopText, Block} from '~/styles/projectsStyles.js'

const ProjectIndex = ({data}) => {
  const homePage = data.datoCmsProjectIndex;

  return(
    <Container>
    <TopText>
    <h2>Projects</h2>
    <h4>{homePage.topText}<Link to='/contact'>reach out.</Link></h4>
    </TopText>
    {homePage.projects.map((node) =>{
      return(
        <Link to={`/${node.link.url}`}>
        <Block>
        <Image src={node.image.url}/>
        <h2>{node.text}</h2> 
        </Block>
        </Link>

      )
    })}
    </Container>
  )
}

export const query = graphql`
query MyQueryProject {
  datoCmsProjectIndex {
      id
      topText

      projects {
        id
        link{
          url
        }
        image {
          url
        }
        text
      }
    }
}
`


export default ProjectIndex
