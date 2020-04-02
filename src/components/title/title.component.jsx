import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  padding: 10px;
  font-size: 1.8rem;
  z-index: 5;
`;

const TitleAnimation = styled.h1`
    border-right: ${props => (props.header ? 'none' : ' .15em solid orange')};
    animation: ${props => (props.header ? 'none' : ' blink-caret .75s step-end infinite')};
    margin-left: ${props => (props.header ? "5vw" : "0px")};

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }
`

const Title = ({ title, header }) => (
  <TitleContainer>
    <TitleAnimation header={header}>{title}</TitleAnimation>
  </TitleContainer>
);

export default Title;
