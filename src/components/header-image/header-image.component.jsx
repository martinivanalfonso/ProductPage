import React from "react";
import styled from "styled-components";

import ArrowForward from "../arrow/arrow-forward.component";

const HeaderImageContainer = styled.div`
  width: 100%;
  height: 75vh;
  background-color: red;
  display: grid;
`;
const ImageFooterContainer = styled.div`
  width: 100%;
  height: 80px;
  place-self: self-end;
  display: flex;
  justify-content: space-between;
`;
const HeaderImage = () => (
  <HeaderImageContainer>
    <ImageFooterContainer>
      <ArrowForward />
    </ImageFooterContainer>
  </HeaderImageContainer>
);

export default HeaderImage;
