import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
import { selectDarkModeBackground } from '../../redux/header/header.selector'
import { createStructuredSelector} from 'reselect'
import { selectTitleToShow } from "../../redux/header/header.selector";




import HeaderMenu from "../header-menu/header-menu.component";
import HeaderFooter from "../header-footer/header-footer.component";
import Title from "../title/title.component";

const HeaderLeftSideContainer = styled.div`
  width: 100%;
  height: 75vh;
  background-color: ${props => props.darkMode};
  display: grid;
`;

const HeaderLeftSide = ({ darkMode, title }) => (
  <HeaderLeftSideContainer darkMode={darkMode} >
    <HeaderMenu />
    <Title header title={title} />
    <HeaderFooter />
  </HeaderLeftSideContainer>
);
const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkModeBackground,
  title: selectTitleToShow
})

export default connect(mapStateToProps)(HeaderLeftSide);
