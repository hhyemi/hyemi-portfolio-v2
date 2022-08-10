import React from "react";

import { Box } from "@components/atoms/box";
import { Flex, FlexProps } from "@components/atoms/flex";
import { Image } from "@components/atoms/image";

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
