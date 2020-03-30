import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateColorType, updateSlide } from '../../redux/primary-color/primary-color.actions'
import { createStructuredSelector } from 'reselect'
import { selectPrimaryColor } from '../../redux/primary-color/primary-color.selector'

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ArrowContainer = styled.div`
  width: 100px;
  height: 80px;
  background-color: ${props => props.primaryColor};
  transition: background-color 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Arrow = ({ updateColorType, updateSlide, primaryColor }) => (
  <ArrowContainer primaryColor={primaryColor} onClick={() => {
    updateColorType()
    updateSlide()
    console.log('hola')
    }}>
    <ArrowBackIcon fontSize="large" />
  </ArrowContainer>
);

const mapDispatchToProps = dispatch => ({
    updateColorType: () => dispatch(updateColorType()),
    updateSlide: () => dispatch(updateSlide()),
});
const mapStateToProps = createStructuredSelector({
  primaryColor: selectPrimaryColor
})
export default connect(mapStateToProps, mapDispatchToProps)(Arrow);
