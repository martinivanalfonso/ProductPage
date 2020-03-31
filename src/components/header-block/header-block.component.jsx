import React from "react";
import styled from "styled-components";

import { selectDarkModeBackground } from "../../redux/header/header.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import HeaderLeftSide from "../header-left-side/header-left-side.component";
import HeaderImage from "../header-image/header-image.component";

const HeaderBlockContainer = styled.div`
  width: 90vw;
  max-width: 1140px;
  height: 90vh;
  background-color: ${props => props.darkMode};
  margin: auto;
  margin-top: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5),
    -10px 10px 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 800px) {
    margin-top: 2.5vh;
  }
`;

const HeaderBlock = ({ darkMode }) => (
  <HeaderBlockContainer darkMode={darkMode}>
    <HeaderLeftSide />
    <HeaderImage />
  </HeaderBlockContainer>
);

const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkModeBackground
});

export default connect(mapStateToProps)(HeaderBlock);
