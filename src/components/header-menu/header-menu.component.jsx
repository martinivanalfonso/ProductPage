import React from 'react'
import styled from 'styled-components'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { connect } from "react-redux";
import { switchMode } from '../../redux/header/header.actions'



const HeaderMenuContainer = styled.div`
height: 80px;
display: flex;
justify-content: space-between;
padding: 20px;
`
const MenuSpan = styled.span`
cursor:pointer;
padding: 10px;
z-index: 6;
transition: all 0.3s ease-in-out;

&:hover {
    font-size:1.2rem;
  }
`

const IconSpan = styled.span`
cursor:pointer;
z-index: 6;
`

const HeaderMenu = ({switchMode}) => (
<HeaderMenuContainer>
<IconSpan onClick={() => switchMode()}><Brightness4Icon fontSize="large"/></IconSpan>
<MenuSpan>About</MenuSpan>
<MenuSpan>Projects</MenuSpan>
<MenuSpan>Contact</MenuSpan>
</HeaderMenuContainer>)

const mapDispatchToProps = dispatch => ({
    switchMode: () => dispatch(switchMode()),
});

export default connect(null, mapDispatchToProps)(HeaderMenu);
