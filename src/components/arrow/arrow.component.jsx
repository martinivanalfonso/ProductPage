import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateHeader } from '../../redux/header/header.actions'
import { createStructuredSelector } from 'reselect'
import { selectPrimaryColor } from '../../redux/header/header.selector'

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

const Arrow = ({ updateHeader, primaryColor }) => (
  <ArrowContainer primaryColor={primaryColor} onClick={() => updateHeader() }>
    <ArrowBackIcon fontSize="large" />
  </ArrowContainer>
);

const mapDispatchToProps = dispatch => ({
    updateHeader: () => dispatch(updateHeader()),
});
const mapStateToProps = createStructuredSelector({
  primaryColor: selectPrimaryColor
})
export default connect(mapStateToProps, mapDispatchToProps)(Arrow);
