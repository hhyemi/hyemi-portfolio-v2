import React, { useRef } from "react";

import { Box } from "@components/atoms/box";
import { Flex } from "@components/atoms/flex";
import { StyledLink } from "@components/atoms/styled-link";
import { Text, TextProps } from "@components/atoms/text";
import { Cursor } from "@components/molecules/cursor";
import { prefix } from "@config/config";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@themes/main";

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
              href={`${prefix}/#about`}>
              <Title>{"ABOUT"}</Title>
            </StyledLink>
          </Box>
          <Box ref={skillsElement}>
            <StyledLink
              href={`${prefix}/#skills`}>
              <Title>{"SKILLS"}</Title>
            </StyledLink>
          </Box>
          <Box ref={careerElement}>
            <StyledLink
              href={`${prefix}/#career`}>
              <Title>{"CAREER"}</Title>
            </StyledLink>
          </Box>
          <Box ref={projectsElement}>
            <StyledLink
              href={`${prefix}/#projects`}>
              <Title>{"PROJECTS"}</Title>
            </StyledLink>
          </Box>

        </Box>
      </ContainerFlex>
      <Cursor elements={[aboutElement, skillsElement, careerElement, projectsElement]}/>
    </>
  );
};
