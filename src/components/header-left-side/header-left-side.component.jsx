import React from "react";
import styled from "styled-components";

import HeaderMenu from "../header-menu/header-menu.component";
import HeaderFooter from "../header-footer/header-footer.component";
import Title from "../title/title.component";

const HeaderLeftSideContainer = styled.div`
  width: 100%;
  height: 75vh;
  background-color: white;
  display: grid;
`;

const HeaderLeftSide = () => (
  <HeaderLeftSideContainer>
    <HeaderMenu />
    <Title />
    <HeaderFooter />
  </HeaderLeftSideContainer>
);

export default HeaderLeftSide;
