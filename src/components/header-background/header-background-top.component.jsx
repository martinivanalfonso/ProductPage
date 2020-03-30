import React from 'react'
import styled from 'styled-components'

const HeaderBackgroundTopContainer = styled.div`
width: 100vw;
height:10vh;
background-color: ${props => props.primaryColor};
transition: background-color 0.5s ease-in-out;
position:fixed;
top:0;
z-index: 10;
@media screen and (max-width: 800px) {
    height: 2.5vh;
  }
`

const HeaderBackgroundTop = ({ primaryColor }) => (<HeaderBackgroundTopContainer primaryColor={primaryColor}/>)

export default HeaderBackgroundTop