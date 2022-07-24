import React from "react";

import { Box, Text, TextProps } from "@components/atoms";
import {
  About, Home, LayoutMain, Skill,
} from "@components/templates";
import type { NextPage } from "next";

export const MeunTitle = (props: TextProps) => <Text
  variant={["h3", "h2", "h1"]}
  sx={{
    pb: 4,
    fontFamily: "title",
    letterSpacing: "0.1em",
  }}
  {...props}
/>;

const Main: NextPage = () => {
  return (
    <LayoutMain>

      <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
        <Home/>
        <About/>
        <Skill/>
      </Box>

    </LayoutMain>
  );
};

export default Main;
