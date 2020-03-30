import React from 'react'
import styled from 'styled-components'

const HeaderMenuContainer = styled.div`
height: 80px;
display: flex;
justify-content: space-between;
padding: 10px;
`
const MenuSpan = styled.span`
padding: 10px;
`

const HeaderMenu = () => (
<HeaderMenuContainer>
<MenuSpan>Home</MenuSpan>
<MenuSpan>About</MenuSpan>
<MenuSpan>Projects</MenuSpan>
<MenuSpan>Contact</MenuSpan>
</HeaderMenuContainer>)

export default HeaderMenu