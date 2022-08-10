import React, { useCallback, useState } from "react";

import { Box } from "@components/atoms/box";
import { Flex, FlexProps } from "@components/atoms/flex";
import { Icon, IconProps } from "@components/atoms/icon";
import { Responsive } from "@components/atoms/responsive";
import { StyledLink } from "@components/atoms/styled-link";
import { Text, TextProps } from "@components/atoms/text";
import { prefix } from "@config/config";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@themes/main";

export type NavbarProps = FlexProps & {};

const NavbarTitle = (props: TextProps) => <Text
  appearance={"black"}
  variant={["s1", "h2"]}
  sx={{ mb: 8, fontWeight: "bold" }}
  {...props}
/>;

const StyledMenu = (props: FlexProps & {open: boolean}) => <Flex
  sx={{
    flexDirection: "column",
    justifyContent: "center",
    background: "pastel-yellow",
    transform: props.open ? "translateY(0)" : "translateY(-100%)",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    position: "absolute",
    top: 0,
    left: 0,
    transition: "transform 0.3s ease-in-out",
  }}
  {...props}
/>;

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

const TopNavHamburger = (props: FlexProps & {onClick: IconProps["onClick"]; open: boolean}) => {
  return (
    <Flex
      sx={{
        zIndex: 99,
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
      <Icon
        src={props.open ? `${prefix}/images/close.svg` : `${prefix}/images/menu-hamburger.svg`}
        onClick={props.onClick}
        size={props.open ? 22 : 32}
      />
    </Flex>
  );
};

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <ContainerFlex>
      <Responsive mdAndDown>
        <TopNavHamburger
          open={open}
          onClick={handleClose}
        />
        <Box sx={{ flex: "1 0 auto" }}/>
      </Responsive>

      <Responsive lgAndUp>
        <Box sx={{ flex: "1 0 auto" }}/>
      </Responsive>

      <StyledMenu open={open}>
        <Box onClick={handleClose}>
          <StyledLink
            href={`${prefix}/#about`}>
            <NavbarTitle>{"ABOUT"}</NavbarTitle>
          </StyledLink>
        </Box>
        <Box onClick={handleClose}>
          <StyledLink
            href={`${prefix}/#skills`}>
            <NavbarTitle>{"SKILLS"}</NavbarTitle>
          </StyledLink>
        </Box>
        <Box onClick={handleClose}>
          <StyledLink
            href={`${prefix}/#career`}>
            <NavbarTitle>{"CAREER"}</NavbarTitle>
          </StyledLink>
        </Box>
        <Box onClick={handleClose}>
          <StyledLink
            href={`${prefix}/#projects`}>
            <NavbarTitle>{"PROJECTS"}</NavbarTitle>
          </StyledLink>
        </Box>
      </StyledMenu>
    </ContainerFlex>
  );
};
