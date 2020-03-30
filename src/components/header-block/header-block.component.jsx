import React from 'react'
import styled from 'styled-components'

import HeaderLeftSide from '../header-left-side/header-left-side.component'
import HeaderImage from '../header-image/header-image.component'

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

const HeaderBlock = () => (<HeaderBlockContainer>
  <HeaderLeftSide />
  <HeaderImage />
  <HeaderImage />
  <HeaderImage />
</HeaderBlockContainer>)

export default HeaderBlock