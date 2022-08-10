import React from "react";

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
        href={`${prefix}/#home`}>
        <IconButton
          src={`${prefix}/images/scroll-up.svg`}
          size={[40, 60]}
          sx={{
            position: "fixed",
            bottom: ["10px", "40px"],
            right: ["10px", "40px"],
          }}
          {...props}
        />
      </StyledLink>
    </Box>
  );
};
