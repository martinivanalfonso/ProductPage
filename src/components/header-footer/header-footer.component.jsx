import React from 'react'
import styled from 'styled-components'

import Arrow from '../arrow/arrow.component'

const HeaderFooterContainer = styled.div`
width: 100%;
height: 80px;
place-self: self-end;
display: flex;
justify-content: space-between;
`

const HeaderFooter = () => (
<HeaderFooterContainer>
<span>Hola</span>
<Arrow />
</HeaderFooterContainer>)

export default HeaderFooter