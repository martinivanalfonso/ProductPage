import React from 'react'
import styled from 'styled-components'
import Brightness4Icon from '@material-ui/icons/Brightness4';

const HeaderMenuContainer = styled.div`
height: 80px;
display: flex;
justify-content: space-between;
padding: 20px;
`
const MenuSpan = styled.span`
cursor:pointer;
`

const HeaderMenu = () => (
<HeaderMenuContainer>
<MenuSpan><Brightness4Icon /></MenuSpan>
<MenuSpan>About</MenuSpan>
<MenuSpan>Projects</MenuSpan>
<MenuSpan>Contact</MenuSpan>
</HeaderMenuContainer>)

export default HeaderMenu