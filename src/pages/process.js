import React, {useRef} from 'react'
import {BigContain, TopHold, MainHold, TopText, LinkList, LinkHold, LinkLine, TwoBlocks, TextChunk, Pad, BigChunk} from '~/styles/processStyles'
import {useStaticQuery, graphql, Link} from 'gatsby'
import image1 from '~/images/flatPlan.png'
import image2 from '~/images/A+M_layout_v1.png'
import image3 from '~/images/kitchen_render_v2_greenKnobs.png'
import image4 from '~/images/assemblyPic2.png'
import image5 from '~/images/FrontKitchen-copy.png'
const ProcessPage = () => {
  const myRef1 = useRef(null)
  const executeScroll1 = () => myRef1.current.scrollIntoView()

  const myRef2 = useRef(null)
  const executeScroll2 = () => myRef2.current.scrollIntoView()

  const myRef3 = useRef(null)
  const executeScroll3 = () => myRef3.current.scrollIntoView()

  const myRef4 = useRef(null)
  const executeScroll4 = () => myRef4.current.scrollIntoView()

  return(
    <BigContain>
    <TopHold>
      <TopText>
        <h2>Our Process</h2>
        <h4>Every cabinet project we take on follows 4 steps to ensure the highest quality product and smoothest process achievable. Starting with a clear on-boarding through a rigorous final installation, we strive to be as transparent and communicative as possible at every step.</h4>
      </TopText>
      <LinkList>
        <LinkHold onClick={executeScroll1}><p>01.</p><LinkLine/><p>On-Boarding</p></LinkHold>
        <LinkHold onClick={executeScroll2}><p>02.</p><LinkLine/><p>Design</p></LinkHold>
        <LinkHold onClick={executeScroll3}><p>03.</p><LinkLine/><p>Assembly</p></LinkHold>
        <LinkHold onClick={executeScroll4}><p>04.</p><LinkLine/><p>Installation</p></LinkHold>
      </LinkList>
    </TopHold>

    <MainHold>
      <TwoBlocks ref={myRef1}>
        <img src={image1} className="noLine"/>
        <TextChunk>
        <h3>Step 1: On-Boarding</h3>
        <p>Before work begins, we discuss your space, needs, and vision. From these conversations, and an initial measurement of the space, we develop an index of cabinets to build and a quotation of the estimated cost.</p>
        </TextChunk>
      </TwoBlocks>

      <BigChunk ref={myRef2}>
      <h3>Step 2: Design</h3>
      <p>In this phase, we develop a cabinet
system collaboratively and determine the
number & placement of units based on our conversations and measurements.
Cabinet plans are illustrated through renders, and up to 2 rounds of
revisions are included in the process.</p>
        <TwoBlocks className="topFlex">
          <TextChunk>
            <img src={image2}/>
            <p>During design, we collaboratively develop a layout and assembly of products that comprise your project. </p>
          </TextChunk>
          <TextChunk>
            <img src={image3}/>
            <p>When big picture decisions have been made, we provide realistic renders to aid with finalizing material & finish decisions.</p>
          </TextChunk>
          </TwoBlocks>
      </BigChunk>

      <TwoBlocks ref={myRef3}>
        <TextChunk>
        <h3>Step 3: Assembly</h3>
        <p>Each unit is cut and assembled with
precision to ensure an exact match to all agreed upon designs.</p>
        </TextChunk>
        <img src={image4}/>
      </TwoBlocks>

      <TwoBlocks className="noBottom" ref={myRef4}>
      <img src={image5}/>
        <TextChunk>
        <h3>Step 4: Installation</h3>
        <p>After all units have been built, we install them on site to ensure a perfect fit. We take extreme care to make sure every cabinet is level, straight, and at the correct height.</p>
        </TextChunk>
      </TwoBlocks>

    </MainHold>
    </BigContain>
  )
}

export default ProcessPage
