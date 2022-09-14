import {createGlobalStyle} from 'styled-components';
import Planar from '~/fonts/GT-Planar-Regular.ttf';

const GlobalStyle = createGlobalStyle`
:root{
  --Dark: #3A5109;
  --Light: #FDFFFD;
  --Bg2: #F6F9F2;
  --Highlight: #689210;
  --HalfDark: rgba(58, 81, 9, 0.1);
}

html{
  scroll-behavior: smooth;

}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  outline-offset: -1px;
  }

body{
  margin: 0;
background-color: var(--Light);}

a{
  text-decoration: none;
  transition: 0.25s linear;
  :hover{
    cursor: pointer;
    color: var(--Highlight);

  }
}

h1, h2{
  font-family: Planar;
  font-weight: normal;
}

a, h3, h4, p, ul, li{
  font-family: adelle-sans;
  font-weight: normal;

}

a, h1, h2, h3, h4, p, ul, li{
  color: var(--Dark);
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "Planar";
  font-style: normal;
  font-weight: normal;
  src: url(${Planar}) format('truetype');
}

ul, li{
  list-style: none;
  font-weight: normal;
}
.g-recaptcha{

}


.round{
  border-radius: 20px 20px 0 0;
}



.each-slide {
  display: flex;
  width: 100%;
  height: 400px;
}

.each-slide>div {
  width: 75%;
}

.each-slide>div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.each-slide p {
  width: 25%;
  font-size: 1em;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0;
}
`
export default GlobalStyle;
