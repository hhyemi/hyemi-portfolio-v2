import React from "react";

import { Box } from "@components/atoms/box";
import { Flex } from "@components/atoms/flex";
import { StyledLink } from "@components/atoms/styled-link";
import { Text } from "@components/atoms/text";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@components/organisms/navbar";

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

export const Sidebar: React.FunctionComponent<DrawerProps> = () => {
  return (
    <ContainerFlex>
      <Box sx={{ paddingLeft: [0, 0, 6, 12], position: "fixed" }}>
        <StyledLink
          href={"#about"}>
          <Text variant={"h5"} sx={{ fontFamily: "sidetitle", my: 4, letterSpacing: "0.1em" }}>{"ABOUT"}</Text>
        </StyledLink>
        <Text variant={"h5"} sx={{ fontFamily: "sidetitle", my: 4, letterSpacing: "0.1em" }}>{"SKILLS"}</Text>
        <Text variant={"h5"} sx={{ fontFamily: "sidetitle", my: 4, letterSpacing: "0.1em" }}>{"PROJECTS"}</Text>
        <Text variant={"h5"} sx={{ fontFamily: "sidetitle", my: 4, letterSpacing: "0.1em" }}>{"CAREER"}</Text>
      </Box>
    </ContainerFlex>
  );
};
