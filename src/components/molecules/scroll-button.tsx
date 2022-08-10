import React, { useEffect, useState } from "react";

import { Box, BoxProps } from "@components/atoms/box";
import { StyledLink } from "@components/atoms/styled-link";
import { IconButton } from "@components/molecules/icon-button";
import { prefix } from "@config/config";

export type ScrollButtonProps = BoxProps & {};

export const ScrollButton: React.FunctionComponent<ScrollButtonProps> = ({
  ...props
}) => {
  return (
    <Box>
      <StyledLink
        href={"/#home"}>
        <IconButton
          src={`${prefix}/images/scroll-up.svg`}
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
