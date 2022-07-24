import React from "react";

import {
  Box, Flex, StyledLink, Text, TextProps,
} from "@components/atoms";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@components/organisms";

export const SIDEBAR_WIDTH = 268;

export type DrawerProps = {};

const ContainerFlex = (({ ...props }) => {
  return (<Flex
    sx={{
      position: "absolute",
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
  variant={"h5"}
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
      <Box sx={{ paddingLeft: [0, 0, 6, 12], position: "fixed" }}>
        <StyledLink
          href={"#about"}>
          <Text variant={"h5"} sx={{ fontFamily: "title", my: 4, letterSpacing: "0.1em" }}>{"ABOUT"}</Text>
        </StyledLink>
        <Title>{"SKILLS"}</Title>
        <Title>{"PROJECTS"}</Title>
        <Title>{"CAREER"}</Title>
      </Box>
    </ContainerFlex>
  );
};
