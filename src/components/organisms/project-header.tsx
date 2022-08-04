import React from "react";

import {
  Box, Flex, FlexProps, Image,
} from "@components/atoms";

export type ProjectHeaderProps = FlexProps & {
  src: string;
};

export const ProjectHeader: React.FunctionComponent<ProjectHeaderProps> = ({
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
