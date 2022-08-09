import React, { forwardRef, useMemo } from "react";

import styled from "@emotion/styled";
import { useResponsive } from "@hooks";
import { variant, VariantArgs } from "styled-system";
import { ResponsiveStyleValue, Text as ThemeUIText, TextProps as ThemeUITextProps } from "theme-ui";

export type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "s1" | "s2" | "p1" | "p2" | "l1";
export type TextAppearance = "default" | "hint" | "disabled" | "alternative" | "primary" | "red" | "green" | "black" | "gray";

export type TextProps = Omit<ThemeUITextProps, "variant"> & {
  variant?: ResponsiveStyleValue<TextVariant>;
  appearance?: ResponsiveStyleValue<TextAppearance>;
  multiLineEllipsis?: number;
  ellipsis?: boolean;
};

const appearance = variant({
  prop: "appearance",
  variants: {
    default: {
      color: "text-primary",
    },
    hint: {
      color: "text-secondary",
    },
    disabled: {
      color: "text-tertiary",
    },
    alternative: {
      color: "alternative",
    },
    primary: {
      color: "primary",
    },
    red: {
      color: "red-500",
    },
    green: {
      color: "green-700",
    },
    black: {
      color: "grey-900",
    },
    gray: {
      color: "#717981",
    },
  },
} as VariantArgs);

const StyledThemeUIText = styled(ThemeUIText)<TextProps>(appearance);

export const Text: React.FunctionComponent<TextProps> = forwardRef((
  {
    ellipsis,
    multiLineEllipsis = 0,
    variant = "p1",
    appearance = "black",
    ...rest
  },
  ref
) => {
  const getResponsiveProp = useResponsive();

  const ellipsisProps: ThemeUITextProps["sx"] = useMemo(() => {
    if (multiLineEllipsis) {
      return {
        display: "-webkit-box",
        textOverflow: "ellipsis",
        overflow: "hidden",
        WebkitLineClamp: `${multiLineEllipsis}`,
        WebkitBoxOrient: "vertical",
      };
    } else if (ellipsis) {
      return {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      };
    }

    return { whiteSpace: "pre-line" };
  }, [ellipsis, multiLineEllipsis]);

  const responsiveVariant = useMemo(() => getResponsiveProp(variant), [variant, getResponsiveProp]);
  const responsiveAppearance = useMemo(() => getResponsiveProp(appearance), [appearance, getResponsiveProp]);

  return <StyledThemeUIText
    ref={ref}
    as={"div"}
    variant={responsiveVariant || "p1"}
    appearance={responsiveAppearance}
    sx={{
      ...ellipsisProps,
    }}
    {...rest}
  />;
});
