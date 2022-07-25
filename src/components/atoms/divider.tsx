import React from "react";

import { Box, BoxProps } from "@components/atoms";
import styled from "@emotion/styled";
import theme from "@themes/main";
import { variant, VariantArgs } from "styled-system";
import { ResponsiveStyleValue } from "theme-ui";

export type DividerType = "solid" | "dashed";
export type DividerOrientation = "vertical" | "horizontal";

export type DividerProps = BoxProps & {
  type?: DividerType;
  orientation?: ResponsiveStyleValue<DividerOrientation>;
};

const type = variant({
  prop: "type",
  variants: {
    solid: {
      bg: "grey-200",
    },
    dashed: {
      borderTop: `2px dashed ${theme.colors["grey-200"]}`,
    },
  },
} as VariantArgs);

const orientation = variant({
  prop: "orientation",
  variants: {
    vertical: {
      width: "1px",
      height: "100%",
    },
    horizontal: {
      width: "100%",
      height: "1px",
    },
  },
} as VariantArgs);

const StyledDivider = styled(Box)<DividerProps>(
  type,
  orientation
);

export const Divider: React.FunctionComponent<DividerProps> = ({
  type = "solid",
  orientation = "horizontal",
  ...props
}) => {
  return (
    <StyledDivider
      type={type}
      orientation={orientation}
      sx={{
        flexShrink: 0,
      }}
      {...props}
    />
  );
};
