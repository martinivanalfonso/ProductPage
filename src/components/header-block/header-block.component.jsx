import React from 'react'
import styled from 'styled-components'

const HeaderBlockContainer = styled.div`
width: 90vw;
max-width: 1140px;
height: 90vh;
background-color: green;
margin:auto;
margin-top: 10vh;
display: grid;
grid-template-columns: 1fr 1fr;

@media screen and (max-width: 800px) {
  margin-top: 2.5vh;
}
`

const HeaderImageContainer = styled.div`
width: 100%;
height: 75vh;
background-color:red;
`
const HeaderMenuContainer = styled.div`
width: 100%;
height: 75vh;
background-color:yellow;
`

const HeaderBlock = () => (<HeaderBlockContainer>
  <HeaderMenuContainer />
  <HeaderImageContainer />
  <HeaderImageContainer />
  <HeaderMenuContainer />
</HeaderBlockContainer>)

export default HeaderBlock