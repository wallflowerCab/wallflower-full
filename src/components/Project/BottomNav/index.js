import React, {useState} from 'react'
import {Holder} from './styles'
import {Link} from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export const BottomNav = (props) => {

  const breakpoints = useBreakpoint();

  let checkPrev;
  if(props.prevText.length > 0){
    checkPrev = true
  }else checkPrev = false

  let checkNext;
  if(props.nextText.length > 0){
    checkNext = true
  }else checkNext = false

  let hideswitch;
  if(breakpoints.sm){
    hideswitch = true
  }else hideswitch = false


  return(
    <Holder>
    <Link to={props.prevLink} className={hideswitch ? 'prev hide' : 'prev'}>{checkPrev ? '🠜' : ''} {props.prevText}</Link>
    <Link to='/' className="middle">All Projects</Link>
    <Link to={props.nextLink} className={hideswitch ? 'next hide' : 'next'}>{props.nextText} {checkNext ? '🠞' : ''}</Link>
    </Holder>
  )
}
