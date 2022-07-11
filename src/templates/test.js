import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'

const Test = ({data}) => {

  console.log(data.datoCmsTest.slug)

  return(
    <h2>{data.datoCmsTest.slug}</h2>
  )

}

export const query = graphql`
query($slug: String!){

  datoCmsTest(slug: {eq: $slug}){
    slug

  }
}
`
export default Test
