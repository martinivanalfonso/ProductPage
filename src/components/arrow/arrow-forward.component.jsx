import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { selectDarkModeBackground } from '../../redux/header/header.selector'
import { createStructuredSelector} from 'reselect'
import { connect } from "react-redux";
import { updateHeaderForward } from "../../redux/header/header.actions";

const ArrowForwardContainer = styled.div`
  width: 100px;
  height: 80px;
  background-color: ${props => props.darkMode};
  transition: background-color 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ArrowForward = ({ updateHeaderForward, darkMode }) => (
  <ArrowForwardContainer darkMode={darkMode} onClick={() => updateHeaderForward()}>
    <ArrowForwardIcon fontSize="large" />
  </ArrowForwardContainer>
);

const mapDispatchToProps = dispatch => ({
  updateHeaderForward: () => dispatch(updateHeaderForward())
});
const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkModeBackground
})

export default connect(mapStateToProps, mapDispatchToProps)(ArrowForward);
