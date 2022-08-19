import styled from 'styled-components'

export const Container = styled.div`
width: calc(100% - 60px);
margin: 30px auto 30px;
border-left: 2px solid var(--Dark);

h2, h3, h4, p, a{
  max-width: 600px;
  padding-left: 10px;
}

h2{
  font-family: adelle-sans;
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 20px;
}

h4{
  font-weight: 600;
  margin: 20px 0 8px;
}

p{
  font-size: 14px;
  margin-bottom: 10px;
}
`
