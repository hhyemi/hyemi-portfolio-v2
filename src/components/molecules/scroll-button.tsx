import React from "react";

import {
  Box, BoxProps, Icon, StyledLink,
} from "@components/atoms";

export type ScrollButtonProps = BoxProps & {};

export const ScrollButton: React.FunctionComponent<ScrollButtonProps> = ({
  ...props
}) => {
  return (
    <Box>
      <StyledLink
        href={"/#home"}>
        <Icon
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
