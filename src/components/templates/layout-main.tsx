import React from "react";

import { Flex, FlexProps } from "@components/atoms/flex";
import { Responsive } from "@components/atoms/responsive";
import { Navbar } from "@components/organisms/navbar";
import { Sidebar } from "@components/organisms/sidabar";

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
    p: LAYOUT_MAIN_CONTENT_PADDING,
  }}
  {...props}
/>;

export const LAYOUT_MAIN_CONTENT_PADDING = [2, 4, 4, 4];

export const LayoutMain: React.FunctionComponent<LayoutMainProps> = ({
  children,
  ...rest
}) => {
  return (
    <ContainerFlex {...rest}>
      <Navbar/>
      <MainFlex>
        <Responsive lgAndUp>
          <Sidebar/>
        </Responsive>
        <ContentFlex>
          {children}
        </ContentFlex>
      </MainFlex>
    </ContainerFlex>
  );
};
