import React from "react";

import {
  Box, Flex, FlexProps, Icon, Responsive,
} from "@components/atoms";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@themes/main";

export type NavbarProps = FlexProps & {};

const ContainerFlex = (props: FlexProps) => <Flex
  sx={{
    width: "100%",
    position: "fixed",
    alignItems: "center",
    height: [SM_TOP_NAV_HEIGHT, MD_AND_UP_TOP_NAV_HEIGHT],
    px: 4,
    zIndex: 99,
    ...props.sx,
  }}
  {...props}
/>;

const TopNavHamburger = (props: FlexProps) => {
  return (
    <Flex
      sx={{
        mr: 2,
        borderRadius: "50%",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "bg-hover",
        },
        "&:active": {
          backgroundColor: "bg-pressed",
        },
      }}
      {...props}>
      <Icon src={"/images/menu-hamburger.svg"} size={32}/>
    </Flex>
  );
};

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <ContainerFlex>
      <Responsive mdAndDown>
        <TopNavHamburger/>
        <Box sx={{ flex: "1 0 auto" }}/>
      </Responsive>

      <Responsive lgAndUp>
        <Box sx={{ flex: "1 0 auto" }}/>
      </Responsive>
    </ContainerFlex>
  );
};
