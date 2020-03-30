import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateColorType } from '../../redux/primary-color/primary-color.actions'

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ArrowContainer = styled.div`
  width: 100px;
  height: 80px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Arrow = ({ updateColorType }) => (
  <ArrowContainer onClick={() => updateColorType("black")}>
    <ArrowBackIcon fontSize="large" />
  </ArrowContainer>
);

const mapDispatchToProps = dispatch => ({
    updateColorType: color => dispatch(updateColorType(color))
});

export default connect(null, mapDispatchToProps)(Arrow);
