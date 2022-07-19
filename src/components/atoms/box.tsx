import React, { forwardRef } from "react";

import styled from "@emotion/styled";
import { variant } from "styled-system";
import { Box as ThemeUIBox, BoxProps as ThemeUIBoxProps } from "theme-ui";

export type BoxProps = ThemeUIBoxProps & {
  appearance?: "success" | "error" | "info" | "warning";
};

const appearance = variant({
  prop: "appearance",
  variants: {
    success: {
      bg: "success",
    },
    "error": {
      bg: "error",
    },
    "info": {
      bg: "warning",
    },
    "warning": {
      bg: "warning",
    },
  },
});

const StyledThemeUIBox = styled(ThemeUIBox)<BoxProps>(
  appearance,
);

export const Box: React.FunctionComponent<BoxProps> = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <StyledThemeUIBox ref={ref} {...props}/>
  );
});
