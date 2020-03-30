import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import Arrow from "../arrow/arrow.component";

const HeaderFooterContainer = styled.div`
  width: 100%;
  height: 80px;
  place-self: self-end;
  display: flex;
  justify-content: space-between;
`;

const HeaderSocialMedia = styled.div`
display: grid;
grid-template-columns: 1fr;
padding: 20px;
margin-top: -100px;
cursor:pointer;
`;

const HeaderFooter = () => (
  <HeaderFooterContainer>
    <HeaderSocialMedia>
      <TwitterIcon />
      <LinkedInIcon />
      <GitHubIcon />
    </HeaderSocialMedia>
    <Arrow />
  </HeaderFooterContainer>
);

export default HeaderFooter;
