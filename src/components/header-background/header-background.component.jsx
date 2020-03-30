import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectPrimaryColor } from '../../redux/primary-color/primary-color.selector'

import styled from 'styled-components'
import HeaderBackgroundTop from './header-background-top.component'


const HeaderBackgroundContainer = styled.div`
width: 100vw;
height:85vh;
background-color: ${props => props.primaryColor};
transition: background-color 0.5s ease-in-out;
position:fixed;
top:0;
z-index: -1;
`

const HeaderBackground = ({ primaryColor }) => (
<div>
<HeaderBackgroundTop primaryColor={primaryColor}/>
<HeaderBackgroundContainer primaryColor={primaryColor} />
</div>
)
const mapStateToProps = createStructuredSelector({
    primaryColor: selectPrimaryColor
  })
  
  export default connect(mapStateToProps)(HeaderBackground);