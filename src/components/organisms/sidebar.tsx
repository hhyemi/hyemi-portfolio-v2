import React, { useRef } from "react";

import {
  Box, Flex, Text, TextProps,
} from "@components/atoms";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@themes/main";

import { Cursor } from "../molecules";

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
    my: 5,
  }}
  {...props}
/>;

export const Sidebar: React.FunctionComponent<DrawerProps> = () => {
  const aboutElement = useRef<HTMLDivElement>(null);
  const skillsElement = useRef<HTMLDivElement>(null);
  const careerElement = useRef<HTMLDivElement>(null);
  const projectsElement = useRef<HTMLDivElement>(null);

  return (
    <ContainerFlex>
      <Box sx={{ position: "fixed", cursor: "pointer" }}>
        <Box ref={aboutElement}>
          <Title>{"ABOUT"}</Title>
        </Box>
        <Box ref={skillsElement}>
          <Title>{"SKILLS"}</Title>
        </Box>
        <Box ref={careerElement}>
          <Title>{"CAREER"}</Title>
        </Box>
        <Box ref={projectsElement}>
          <Title>{"PROJECTS"}</Title>
        </Box>

      </Box>
      <Cursor elements={[aboutElement, skillsElement, careerElement, projectsElement]}/>
    </ContainerFlex>
  );
};
