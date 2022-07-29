import React, { useRef } from "react";

import {
  Box, Flex, StyledLink, Text, TextProps,
} from "@components/atoms";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@themes/main";

import { Cursor } from "../molecules";

export const SIDEBAR_WIDTH = "13%";

export type DrawerProps = {};

const ContainerFlex = (({ ...props }) => {
  return (<Flex
    sx={{
      zIndex: 9,
      position: "absolute",
      alignItems: "center",
      flexDirection: "column",
      width: SIDEBAR_WIDTH,
      height: "auto",
      left: [-SIDEBAR_WIDTH, null, 0],
      top: [SM_TOP_NAV_HEIGHT, MD_AND_UP_TOP_NAV_HEIGHT],
      bottom: 0,
      mixBlendMode: "difference",
    }}
    {...props}
  />);
});

const Title = (props: TextProps) => <Text
  appearance={"alternative"}
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
    <>
      <ContainerFlex>
        <Box sx={{ position: "fixed", cursor: "pointer" }}>
          <Box ref={aboutElement}>
            <StyledLink
              href={"/#about"}>
              <Title>{"ABOUT"}</Title>
            </StyledLink>
          </Box>
          <Box ref={skillsElement}>
            <StyledLink
              href={"/#skills"}>
              <Title>{"SKILLS"}</Title>
            </StyledLink>
          </Box>
          <Box ref={careerElement}>
            <StyledLink
              href={"/#career"}>
              <Title>{"CAREER"}</Title>
            </StyledLink>
          </Box>
          <Box ref={projectsElement}>
            <StyledLink
              href={"/#projects"}>
              <Title>{"PROJECTS"}</Title>
            </StyledLink>
          </Box>

        </Box>
      </ContainerFlex>
      <Cursor elements={[aboutElement, skillsElement, careerElement, projectsElement]}/>
    </>
  );
};
