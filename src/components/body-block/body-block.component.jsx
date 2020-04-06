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
const DetailsContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyBlock = ({ darkMode }) => (
  <BodyBlockContainer darkMode={darkMode}>
    <DetailsContainer>

    <Title title="Lorem ipsum dolor"/>
    <p style={{ padding: '10px'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, condimentum tortor est eleifend lacus pellentesque fames porttitor sociis, malesuada nunc dui aliquam phasellus rhoncus vitae. Iaculis dictumst maecenas sollicitudin dui torquent volutpat venenatis litora, class ornare blandit dapibus a porttitor rhoncus eros hendrerit, taciti massa urna aptent nec leo ligula. Ut montes faucibus ad ornare cras massa hac vestibulum elementum urna quisque, ultricies eros himenaeos sociosqu rutrum fames blandit praesent egestas taciti, duis mauris fusce aptent aliquam auctor iaculis proin rhoncus dis.</p> 
    <p style={{ padding: '10px'}}>Lacus gravida eu aenean dictum facilisi velit massa hac, laoreet fringilla felis turpis taciti per purus donec conubia, augue at congue parturient nibh condimentum sociis. Dictum pulvinar nisi ad aliquam ridiculus posuere integer cum non habitant laoreet turpis facilisi augue cubilia ut, tincidunt est neque facilisis mattis cras natoque eget hendrerit felis pellentesque lacus fermentum curabitur sed. Lacus ligula quis imperdiet integer eleifend mattis tortor, inceptos hac nascetur maecenas ac nostra, orci vitae vulputate mus fermentum augue. Ac dapibus quisque libero platea fermentum a class euismod vivamus nascetur, litora malesuada congue molestie inceptos faucibus magnis cum eget pretium integer, urna magna rutrum tortor ante imperdiet odio fringilla pharetra.</p> 
    </DetailsContainer>
    <ProjectView 
    title='Lorem ipsum dolor sit amet'
    info='Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, condimentum tortor est eleifend lacus pellentesque fames porttitor sociis, malesuada nunc dui aliquam phasellus rhoncus vitae. Iaculis dictumst maecenas sollicitudin dui torquent volutpat venenatis litora, class ornare blandit dapibus a porttitor rhoncus eros hendrerit, taciti massa urna aptent nec leo ligula. Ut montes faucibus ad ornare cras massa hac vestibulum elementum urna quisque, ultricies eros himenaeos sociosqu rutrum fames blandit praesent egestas'
    imageUrl="https://i.ibb.co/CJnWQ21/3.png"
  />
  </BodyBlockContainer>
);

const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkModeBackground
});

export default connect(mapStateToProps)(BodyBlock);
