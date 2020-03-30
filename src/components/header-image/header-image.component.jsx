import React from 'react'
import styled from 'styled-components'

import HeaderFooter from '../header-footer/header-footer.component'

const HeaderImageContainer = styled.div`
width: 100%;
height: 75vh;
background-color:red;
display: grid;
`
const HeaderImage = () => (
<HeaderImageContainer>
<HeaderFooter />
</HeaderImageContainer>)

export default HeaderImage