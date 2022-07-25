import React from "react";

import {
  Flex, FlexProps, Image, Responsive,
} from "@components/atoms";
import { Navbar, Sidebar } from "@components/organisms";

export type LayoutMainProps = FlexProps & {
  navbarStyle?: FlexProps;
  loading?: boolean;
};

const ContainerFlex = (props: FlexProps) => <Flex
  sx={{
    flexDirection: "column",
    alignItems: "stretch",
    minHeight: "100vh",
    bg: "white-500",
  }}
  {...props}
/>;

const MainFlex = (props: FlexProps) => <Flex
  sx={{
    flexDirection: "row",
    alignItems: "stretch",
    flex: "auto",
  }}
  {...props}
/>;

const ContentFlex = (props: FlexProps) => <Flex
  sx={{
    justifyContent: "center",
    flex: "auto",
  }}
  {...props}
/>;

export const LayoutMain: React.FunctionComponent<LayoutMainProps> = ({
  children,
  ...rest
}) => {
  return (
    <ContainerFlex {...rest}>
      <Navbar/>
      <MainFlex>
        <ContentFlex>
          <Image
            src={"/images/home-background.jpg"}
            sx={{
              position: "absolute",
              width: ["100%", null, "87%"],
              minWidth: ["100%", null, "87%"],
              height: "100%",
              right: 0,
            }}/>
          <Responsive lgAndUp>
            <Sidebar/>
          </Responsive>
          {children}
        </ContentFlex>
      </MainFlex>
    </ContainerFlex>
  );
};
