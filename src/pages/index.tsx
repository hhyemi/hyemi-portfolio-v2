import React from "react";

import { Box } from "@components/atoms/box";
import { ScrollButton } from "@components/molecules/scroll-button";
import { About } from "@components/templates/about";
import { Career } from "@components/templates/career";
import { Footer } from "@components/templates/footer";
import { Home } from "@components/templates/home";
import { LayoutMain } from "@components/templates/layout-main";
import { Projects } from "@components/templates/projects";
import { Skills } from "@components/templates/skills";
import styled from "@emotion/styled";
import type { NextPage } from "next";

const StyledBox = styled.div`
    .container{ 
        scroll-behavior: smooth;
        width: 100vw;
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
          <Skills/>
          <Career/>
          <Projects/>
          <Footer/>
        </Box>
      </StyledBox>
      <ScrollButton/>
    </LayoutMain>
  );
};

export default Main;
