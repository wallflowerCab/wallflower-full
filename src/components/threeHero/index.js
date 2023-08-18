import * as React from 'react'
import {useEffect, useState} from 'react'
import {Holder, BigImage, Hidden, TopVid} from './styles'
import { graphql } from "gatsby"
import {StaticImage} from 'gatsby-plugin-image'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import pic1 from '~/images/bg/v2/heroDoor.png'
import pic2 from '~/images/bg/v2/heroAM.png'
import pic3 from '~/images/bg/v2/heroInstall.png'
import pic4 from '~/images/bg/v2/heroFingers.png'
import pic5 from '~/images/bg/v2/heroAM2.png'
import pic6 from '~/images/bg/flowerRenderBrown.png'
import vid from '~/images/bg/flowerRender2.mp4'
const settings = {
  className: "slider variable-width",
dots: true,
infinite: true,
centerMode: false,
slidesToShow: 1,
slidesToScroll: 1,
    };

const testPics = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5
]



export const ThreeHero = (props) => {
  const breakpoints = useBreakpoint();

  const [count, setCount] = useState(0);
    const [countInTimeout, setCountInTimeout] = useState(0);

    if(count > (testPics.length - 1)){
      setCount(0)
    }else{setTimeout(() => setCount(count + 1), 3000);}



  return(
    <>
    <Hidden>{testPics.map((number) => <img src={number}/>)}</Hidden>
    <Holder>

      {/*<BigImage imagey={testPics[count]}/>*/}
    
      {breakpoints.xs ? 
      <TopVid src={"https://wallflowerweb.s3.us-west-1.amazonaws.com/FlowerRender.mp4"} loop muted autoPlay playsInline />

      : 
      <TopVid src={"https://wallflowerweb.s3.us-west-1.amazonaws.com/FlowerRender.mp4"} autoPlay loop muted playsinline />
      }
      
    </Holder>

    </>

  )
}
