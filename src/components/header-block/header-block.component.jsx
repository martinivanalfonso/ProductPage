import React from 'react'
import styled from 'styled-components'

import HeaderLeftSide from '../header-left-side/header-left-side.component'
import HeaderImage from '../header-image/header-image.component'

const HeaderBlockContainer = styled.div`
width: 90vw;
max-width: 1140px;
height: 90vh;
background-color: white;
margin:auto;
margin-top: 10vh;
display: grid;
grid-template-columns: 1fr 1fr;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5), -10px 10px 10px rgba(0, 0, 0, 0.5);



@media screen and (max-width: 800px) {
  margin-top: 2.5vh;
}
`

const HeaderBlock = () => (<HeaderBlockContainer>
  <HeaderLeftSide />
  <HeaderImage />
</HeaderBlockContainer>)

export default HeaderBlock