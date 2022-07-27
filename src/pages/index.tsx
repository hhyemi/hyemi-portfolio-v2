import React from "react";

import { Box } from "@components/atoms";
import {
  About, Career, Home, LayoutMain, Projects, Skill,
} from "@components/templates";
import type { NextPage } from "next";

const Main: NextPage = () => {
  return (
    <LayoutMain>

      <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
        <Home/>
        <About/>
        <Skill/>
        <Career/>
        <Projects/>
      </Box>

    </LayoutMain>
  );
};

export default Main;
