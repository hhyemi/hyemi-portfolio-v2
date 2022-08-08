import React from "react";

import {
  Box, Flex, FlexProps,
} from "@components/atoms";
import {
  ImageHeader, SIDEBAR_WIDTH,
} from "@components/organisms";
import { LayoutMain } from "@components/templates";

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
