import React from "react";

import {
  Box, Flex, FlexProps, Image,
} from "@components/atoms";

export type ImageHeaderProps = FlexProps & {
  src: string;
};

export const ImageHeader: React.FunctionComponent<ImageHeaderProps> = ({
  src,
}) => {
  return (
    <Flex sx={{
      justifyContent: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <Box sx={{
        position: "relative",
        height: ["auto", null, "calc(100vh - 400px)"],
        overflow: "hidden",

      }}>
        <Image src={src} sx={{ width: "100vw" }}/>
      </Box>
    </Flex>
  );
};
