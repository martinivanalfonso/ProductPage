import React from 'react';
import styled from 'styled-components'

const HeaderBackgroundContainer = styled.div`
width: 100vw;
height:85vh;
background-color: salmon;
position:fixed;
top:0;
z-index: -1;
`

const HeaderBackgroundTopContainer = styled.div`
width: 100vw;
height:5vh;
background-color: salmon;
position:fixed;
top:0;
z-index: 5;
`

const HeaderBackground = () => (
<HeaderBackgroundContainer />
)

export default HeaderBackground;
