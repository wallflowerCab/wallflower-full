import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'

const ProjectIndex = ({data}) => {
  const homePage = data.allDatoCmsProject;

  return(
    <>
    <h2>hi</h2>
    {homePage.edges.map((node) =>{
      console.log(node)
      return(<h2>{node.node.url}</h2>)
    })}
    </>
  )
}

export const query = graphql`
query MyQueryProject {
  allDatoCmsProject {
    edges{
      node{
        id
        url
      }
    }
  }
}
`


export default ProjectIndex
