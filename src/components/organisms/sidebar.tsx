import React from "react";

import {
  Box, Flex, StyledLink, Text, TextProps,
} from "@components/atoms";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@themes/main";

export const SIDEBAR_WIDTH = "13%";

export type DrawerProps = {};

const ContainerFlex = (({ ...props }) => {
  return (<Flex
    sx={{
      position: "absolute",
      alignItems: "center",
      flexDirection: "column",
      width: SIDEBAR_WIDTH,
      height: "auto",
      left: [-SIDEBAR_WIDTH, null, 0],
      top: [SM_TOP_NAV_HEIGHT, MD_AND_UP_TOP_NAV_HEIGHT],
      bottom: 0,
    }}
    {...props}
  />);
});

const Title = (props: TextProps) => <Text
  variant={["s2", null, null, "s1"]}
  sx={{
    fontFamily: "title",
    letterSpacing: "0.1em",
    my: 4,
  }}
  {...props}
/>;

export const Sidebar: React.FunctionComponent<DrawerProps> = () => {
  return (
    <ContainerFlex>
      <Box sx={{ position: "fixed" }}>
        <StyledLink
          href={"#about"}>
          <Title>{"ABOUT"}</Title>
        </StyledLink>
        <Title>{"SKILLS"}</Title>
        <Title>{"PROJECTS"}</Title>
        <Title>{"CAREER"}</Title>
      </Box>
    </ContainerFlex>
  );
};
