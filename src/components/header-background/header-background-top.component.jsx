import React from 'react'
import styled from 'styled-components'

const HeaderBackgroundTopContainer = styled.div`
width: 100vw;
height:10vh;
background-color: salmon;
position:fixed;
top:0;
z-index: 5;
@media screen and (max-width: 800px) {
    height: 2.5vh;
  }
`

const HeaderBackgroundTop = () => (<HeaderBackgroundTopContainer/>)

export default HeaderBackgroundTop