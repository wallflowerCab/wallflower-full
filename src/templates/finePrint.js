import * as React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import { StructuredText } from 'react-datocms';
import { Container } from '~/styles/finePrintStyles'

const FinePrintTemplate = ({data}) => {
  const finePrint = data.datoCmsFinePrint;
  console.log(finePrint.text)
  return(
      <Container>
      <StructuredText data={finePrint.text}/>
      </Container>
  )
}

export const query = graphql`
query($url: String!){
  allDatoCmsFinePrint{
      edges{
        node{
          url
        }
      }
    }
  datoCmsFinePrint(url: {eq: $url}){
    url
    text{
      value
    }
  }
}
`


export default FinePrintTemplate
