import React from 'react'
import styled from 'styled-components'

import { selectTitleToShow } from "../../redux/header/header.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const TitleContainer = styled.div`
padding: 50px;
margin-left: 10vw;
position: absolute;
font-size: 2rem;
z-index: 5;
`

const Title = ({ text }) => (
<TitleContainer>
<h1>{text}</h1>
</TitleContainer>)

const mapStateToProps = createStructuredSelector({
    text: selectTitleToShow
  });

export default connect(mapStateToProps)(Title)