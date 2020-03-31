import React from "react";
import styled from "styled-components";
import { selectSlideToShow } from "../../redux/header/header.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
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
  position: absolute;
`;
const ImageSlider = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  overflow-x: auto;
  background-color: white;
  overflow: hidden;
  position: relative;
`;
const Slide = styled.div`
  width: 100%;
  height: 75vh;
  flex-shrink: 0;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat:no-repeat;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ slideIdToShow, id }) => (slideIdToShow === id ? "1" : "0")};
  position: absolute;
`;

const HeaderImage = ({ slideIdToShow }) => {
  console.log(slideIdToShow);
  return (
    <HeaderImageContainer>
      <ImageSlider>
        <Slide
          id="slide1"
          slideIdToShow={slideIdToShow}
          imageUrl="https://i.ibb.co/J2XWQjD/1.png"
        />
        <Slide
          id="slide2"
          slideIdToShow={slideIdToShow}
          imageUrl="https://i.ibb.co/17cP41z/2.png"
        />
        <Slide
          id="slide3"
          slideIdToShow={slideIdToShow}
          imageUrl="https://i.ibb.co/rbZvHs7/3.png"
        />
      </ImageSlider>
      <ImageFooterContainer>
        <ArrowForward />
      </ImageFooterContainer>
    </HeaderImageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  slideIdToShow: selectSlideToShow
});

export default connect(mapStateToProps)(HeaderImage);
