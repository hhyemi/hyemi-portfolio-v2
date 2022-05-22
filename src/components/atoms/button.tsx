import React, { forwardRef, useMemo } from "react";

import styled from "@emotion/styled";
import { useResponsive } from "@hooks";
import { variant, VariantArgs } from "styled-system";
import { Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps, ResponsiveStyleValue } from "theme-ui";

export type ButtonVariant = "white" | "primary" | "red" | "grey";
export type ButtonAppearance = "filled" | "outlined" | "tonal" | "ghost";
export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type ButtonSide = "left" | "center" | "right";
export type ButtonShape = "round" | "square";
export type ButtonShadow = "default";

export type ButtonProps = Omit<ThemeUIButtonProps, "variant" | "shape" | "size"> & {
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  size?: ResponsiveStyleValue<ButtonSize>;
  side?: ButtonSide;
  shape?: ButtonShape;
  shadow?: ResponsiveStyleValue<ButtonShadow>;
  active?: boolean;
  disabled?: boolean;
};

export type StyledThemeUIButtonProps = Omit<ThemeUIButtonProps, "size" | "shape"> & {
  size?: ButtonSize;
  side?: ButtonSide;
  shape?: ButtonShape;
  shadow?: ButtonShadow;
};

const size = variant({
  prop: "size",
  variants: {
    xs: {
      px: "8px",
      py: "6px",
      fontSize: "p1",
      minWidth: "52px",
    },
    sm: {
      px: "16px",
      py: "4px",
      fontSize: "p1",
      minWidth: "64px",
    },
    md: {
      px: "16px",
      py: "8px",
      fontSize: "p1",
      minWidth: "72px",
    },
    lg: {
      px: "20px",
      py: "12px",
      fontSize: "s2",
      fontWeight: "medium",
      minWidth: "80px",
    },
  },
} as VariantArgs);

const side = variant({
  prop: "side",
  variants: {
    left: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    center: {
      borderRadius: 0,
    },
    right: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
} as VariantArgs);

const shape = variant({
  prop: "shape",
  variants: {
    round: {
      borderRadius: 100,
    },
    square: {
      borderRadius: 4,
    },
  },
} as VariantArgs);

const shadow = variant({
  prop: "shadow",
  variants: {
    default: {
      boxShadow: "0 1px 1px 0 #161d250c, inset 0 2px 0 0 #ffffff0c",
    },
  },
} as VariantArgs);

const StyledThemeUIButton = styled(ThemeUIButton)<StyledThemeUIButtonProps>(
  size,
  side,
  shape,
  shadow,
);

export const Button: React.FunctionComponent<ButtonProps> = forwardRef((
  {
    disabled = false,
    variant = "white",
    appearance = "filled",
    shape = "square",
    size = "md",
    side,
    shadow = null,
    ...rest
  },
  ref
) => {
  const getResponsiveProp = useResponsive();

  const responsiveSize = useMemo(() => getResponsiveProp(size), [size, getResponsiveProp]);
  const responsiveShadow = useMemo(() => getResponsiveProp(shadow), [shadow, getResponsiveProp]);

  const computedVariant = useMemo(() => {
    if (disabled) {
      return "disabled";
    }
    if (variant === "white") {
      return "white-outlined";
    } else {
      return `${variant}-${appearance}`;
    }
  }, [appearance, disabled, variant]);

  return (
    <StyledThemeUIButton
      ref={ref}
      disabled={disabled}
      size={responsiveSize}
      side={side}
      shape={shape}
      shadow={responsiveShadow}
      variant={computedVariant}
      {...rest}
    />
  );
});
