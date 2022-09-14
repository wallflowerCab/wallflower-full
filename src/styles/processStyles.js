import styled from 'styled-components'

export const BigContain = styled.div`
width: 100%;
outline: 2px solid var(--Dark);
outline-offset: -2px;
padding-top: 60px;
padding-bottom: 10px;
margin-top: -1px;

p{
  font-size: 14px;
  max-width: 500px;
  line-height: 20px;
}
`

export const TopHold = styled.div`
width: calc(100% - 60px);
max-width: 1600px;
margin: 0px auto;
padding-bottom: 90px;
display: flex;
justify-content: space-between;
align-items: center;


@media(max-width: 1200px){
  width: calc(100% - 40px);
  flex-wrap: wrap;
  margin: 40px auto 0;
}

@media(max-width: 500px){
  padding-bottom: 20px;
}
`

export const MainHold = styled(TopHold)`
margin: 0 auto 0;
padding-bottom: 0;
border-bottom: none;
display: block;
`

export const TopText = styled.div`
width: 80%;
max-width: 600px;

h2{
  font-size: 48px;
  margin-bottom: 20px;
  font-family: adelle-sans
  font-weight: 600;
}
h4{
  font-size: 22px;
}

@media (max-width: 850px){
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
`

export const LinkList = styled.div`
@media(max-width: 500px){
  width: 100%;
}
`

export const LinkHold = styled.button`
display: flex;
width: 160px;
margin: 6px 0 0;
justify-content: space-between;
align-items: center;
background: none;
padding: 0;
border: none;

@media(max-width: 850px){
  width: 300px;
  max-width: 100%;
}
@media(max-width: 500px){
  width: 100%;
}
  :hover{
    p{
       letter-spacing: 2px;
       color: var(--Dark);
    }
    cursor: pointer;
    }


p{
  transition: 0.125s linear;

  font-size: 12px;
  white-space: nowrap;
  color: var(--Highlight);
  letter-spacing: 0;


}
`

export const LinkLine = styled.span`
border-bottom: 2px solid var(--Highlight);
display: flex;
width: 100%;
margin: 0 6px;
transition: 0.125s linear;

${LinkHold}:hover &{
  border-bottom: 2px solid var(--Dark);

}
`

export const BigChunk = styled.div`
margin-top: 30px;

h3{
  max-width: 600px;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
}
p{
  max-width: 600px;
  margin-top: 8px;
}
`

export const TwoBlocks = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
padding: 20px 0;
margin-bottom: 10px;
border-bottom: 2px solid var(--Dark);

&.noBottom{
  border-bottom: none;
}

&.topFlex{
  align-items: flex-start;
}
img{
  width: calc(50% - 15px);
  outline: 2px solid var(--Dark);

  &.noLine{
    outline: none;
  }
}

@media(max-width: 850px){
  flex-wrap: wrap;
  img{
    width: 100%;
    margin: 15px 0;
  }
}


`

export const TextChunk = styled.div`
width: calc(50% - 15px);
img{
  width: 100%;
}
h3{
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
}

@media(max-width: 850px){
  width: 100%;
  margin: 15px 0;
}

@media(max-width: 500px){
  h3{
    font-size: 22px;
  }
  p{
    font-size: 14px;
    line-height: 20px;
  }
}
`

export const Pad = styled.div`
width: 30px;
`
