import * as React from 'react'
import {Holder, BigImage} from './styles'
import pic1 from '~/images/heroDesign.png'
import pic2 from '~/images/heroAssembly.png'
import pic3 from '~/images/heroInstall.png'

export const ThreeHero = (props) => {
  return(
    <Holder>
    <BigImage imagey={pic2}><h4>Design</h4></BigImage>
    <BigImage imagey={pic1}><h4>Assembly</h4></BigImage>
    <BigImage imagey={pic3}><h4>Installation</h4></BigImage>
    </Holder>
  )
}
