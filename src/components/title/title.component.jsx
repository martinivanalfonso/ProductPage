import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  padding: 10px;
  margin-left: ${props => (props.header ? "5vw" : "0px")};
  font-size: 2rem;
  z-index: 5;
`;

const Title = ({ title, header }) => (
  <TitleContainer header={header}>
    <h1>{title}</h1>
  </TitleContainer>
);

export default Title;
