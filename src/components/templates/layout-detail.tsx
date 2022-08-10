import React from "react";

import { Box } from "@components/atoms/box";
import { Flex, FlexProps } from "@components/atoms/flex";
import { ImageHeader } from "@components/organisms/image-header";
import { SIDEBAR_WIDTH } from "@components/organisms/sidebar";
import { LayoutMain } from "@components/templates/layout-main";

export type LayoutDetailProps = FlexProps & {
  headerImage: string;
  navbarStyle?: FlexProps;
  loading?: boolean;
};

export const LayoutDetail: React.FunctionComponent<LayoutDetailProps> = ({
  headerImage,
  children,
  ...rest
}) => {
  return (
    <LayoutMain>
      <Box>
        <ImageHeader src={headerImage}/>

        <Flex
          sx={{
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          {...rest}>

          <Box sx={{ ml: [0, null, SIDEBAR_WIDTH], p: [3, 6]}}>
            {children}
          </Box>

        </Flex>
      </Box>
    </LayoutMain>
  );
};
