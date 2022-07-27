import React from "react";

import { Box } from "@components/atoms";
import {
  About, Career, Home, LayoutMain, Projects, Skill,
} from "@components/templates";
import styled from "@emotion/styled";
import type { NextPage } from "next";

const StyledBox = styled.div`
    .container{ 
        scroll-behavior: smooth;
        height: 100vh;
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
    }
    .container::-webkit-scrollbar { width: 0; background: transparent;}
    .container > div {
        scroll-snap-align: start;
    }
`;

const Main: NextPage = () => {
  return (
    <LayoutMain>
      <StyledBox>
        <Box className={"container"}>
          <Home/>
          <About/>
          <Skill/>
          <Career/>
          <Projects/>
        </Box>
      </StyledBox>
    </LayoutMain>
  );
};

export default Main;
