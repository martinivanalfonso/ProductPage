import React from "react";
import styled from "styled-components";

import ArrowForward from "../arrow/arrow-forward.component";

const HeaderImageContainer = styled.div`
  width: 100%;
  height: 75vh;
  background-color: red;
  display: grid;
  position: relative;
`;
const ImageFooterContainer = styled.div`
  width: 100%;
  height: 80px;
  place-self: self-end;
  display: flex;
  justify-content: space-between;
  position:absolute;
`;
const ImageSlider = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  overflow-x: auto;
  background-color: black;
  overflow: hidden;
`;
const Slide = styled.div`
  width: 100%;
  height: 75vh;
  flex-shrink:0;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;


const HeaderImage = () => (
  <HeaderImageContainer>
    <ImageSlider>
      <Slide imageUrl="https://i.ibb.co/cvpntL1/hats.png">1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      </ImageSlider>
    <ImageFooterContainer>
      <ArrowForward />
    </ImageFooterContainer>
  </HeaderImageContainer>
);

export default HeaderImage;
