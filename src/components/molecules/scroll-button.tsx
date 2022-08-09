import React, { useEffect, useState } from "react";

import {
  Box, BoxProps, StyledLink,
} from "@components/atoms";
import { IconButton } from "@components/molecules";

export type ScrollButtonProps = BoxProps & {};

export const ScrollButton: React.FunctionComponent<ScrollButtonProps> = ({
  ...props
}) => {
  return (
    <Box>
      <StyledLink
        href={"/#home"}>
        <IconButton
          src={"/images/scroll-up.svg"}
          size={60}
          sx={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
          }}
          {...props}
        />
      </StyledLink>
    </Box>
  );
};
