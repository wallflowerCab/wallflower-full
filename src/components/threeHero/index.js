import * as React from 'react'
import {useEffect, useState} from 'react'
import {Holder, BigImage, Hidden} from './styles'
import { graphql } from "gatsby"
import {StaticImage} from 'gatsby-plugin-image'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import pic1 from '~/images/bg/heroDoor.png'
import pic2 from '~/images/bg/heroAM.png'
import pic3 from '~/images/bg/heroInstall.png'
import pic4 from '~/images/bg/heroFingers.png'
import pic5 from '~/images/bg/heroAM2.png'


const settings = {
  className: "slider variable-width",
dots: true,
infinite: true,
centerMode: false,
slidesToShow: 1,
slidesToScroll: 1,
    };

const testPics = [
  pic3,
  pic2,
  pic1,
  pic4,
  pic5
]



export const ThreeHero = (props) => {
  const [count, setCount] = useState(0);
    const [countInTimeout, setCountInTimeout] = useState(0);

    if(count > (testPics.length - 1)){
      setCount(0)
    }else{setTimeout(() => setCount(count + 1), 3000);}



  return(
    <>
    <Hidden>{testPics.map((number) => <img src={number}/>)}</Hidden>
    <Holder>

      <BigImage imagey={testPics[count]}/>
    </Holder>

    </>

  )
}
