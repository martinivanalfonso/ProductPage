import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectPrimaryColor } from '../../redux/header/header.selector'

import styled from 'styled-components'


const HeaderBackgroundContainer = styled.div`
width: 100vw;
height:85vh;
background-color: ${props => props.primaryColor};
transition: background-color 0.5s ease-in-out;
position:fixed;
top:0;
z-index: -1;
`
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

const HeaderBackground = ({ primaryColor }) => (
<div>
<HeaderBackgroundTopContainer primaryColor={primaryColor}/>
<HeaderBackgroundContainer primaryColor={primaryColor} />
</div>
)
const mapStateToProps = createStructuredSelector({
    primaryColor: selectPrimaryColor
  })
  
  export default connect(mapStateToProps)(HeaderBackground);