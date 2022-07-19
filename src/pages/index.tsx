import React from "react";

import { Box } from "@components/atoms";
import {
  About, LayoutMain, Main, MD_AND_UP_CONTENT_PADDING, SM_CONTENT_PADDING,
} from "@components/templates";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <LayoutMain>

      <Box sx={{ flexGrow: 1, flexBasis: 0, p: [`${SM_CONTENT_PADDING}px`, `${MD_AND_UP_CONTENT_PADDING}px`]}}>
        <Main/>
        <About/>
      </Box>

    </LayoutMain>
  );
};

export default Home;
