import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectDarkModeBackground } from "../../redux/header/header.selector";
import { createStructuredSelector } from "reselect";

const ProjectViewContainer = styled.div`
  width: 90%;
  height: 400px;
  background-color: ${props => props.darkMode};
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px 0px;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  max-width: 640px;
  width: 100%;
  height: auto;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5), -10px 10px 10px rgba(0, 0, 0, 0.5);
`;

const ProjectView = ({ title, info, imageUrl, darkMode }) => (
  <ProjectViewContainer darkMode={darkMode}>
    <InfoContainer>
      <h2>{title}</h2>
      <p>{info}</p>
    </InfoContainer>
    <Image src={imageUrl} />
  </ProjectViewContainer>
);

const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkModeBackground
});

export default connect(mapStateToProps)(ProjectView);
