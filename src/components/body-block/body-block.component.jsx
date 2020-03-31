import React from "react";
import styled from "styled-components";
import ProjectView from "../project-view/project-view.component";
import Title from '../title/title.component'

import { connect } from "react-redux";
import { selectDarkModeBackground } from "../../redux/header/header.selector";
import { createStructuredSelector } from "reselect";

const BodyBlockContainer = styled.div`
  width: 90vw;
  max-width: 1140px;
  height: 1400px;
  background-color: ${props => props.darkMode};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5),
    -10px 10px 10px rgba(0, 0, 0, 0.5);
`;

const BodyBlock = ({ darkMode }) => (
  <BodyBlockContainer darkMode={darkMode}>
    <Title title="My projects"/>
    <ProjectView
      imageUrl="https://i.ibb.co/cF3Lbt0/crownclothing.png"
      title="Crown Clothing"
      info="E-commerce responsive clothing shop created using React, Redux and styled-components library and configured to fetch data from a real time database."
    />
    <ProjectView
      imageUrl="https://i.ibb.co/N3j6DGG/myproblemcloud.png"
      title="My Problem Cloud"
      info="Interactive website created to store logic problems and their solution"
    />
  </BodyBlockContainer>
);

const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkModeBackground
});

export default connect(mapStateToProps)(BodyBlock);
