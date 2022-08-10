import React, { forwardRef, useCallback, useMemo } from "react";
import { ReactSVG } from "react-svg";

import { Flex, FlexProps } from "@components/atoms/flex";
import { useResponsive } from "@hooks";
import { ResponsiveStyleValue } from "theme-ui";

export type IconProps = Omit<FlexProps, "size"> & {
  src: string;
  size?: ResponsiveStyleValue<number>;
  disabled?: boolean;
  disabledColor?: FlexProps["color"];
};

export const Icon: React.FunctionComponent<IconProps> = forwardRef((
  {
    src,
    size = null,
    color = "icon",
    disabledColor = "icon-disabled",
    disabled,
    ...rest
  },
  ref
) => {
  const getResponsiveProp = useResponsive();

  const responsiveSize = useMemo(() => getResponsiveProp(size), [size, getResponsiveProp]);

  const handleBeforeInjection = useCallback((svg) => {
    if (!svg || !responsiveSize) return;

    // update svg style
    svg.setAttribute("width", responsiveSize);
    svg.setAttribute("height", responsiveSize);
  }, [responsiveSize]);

  const reactSvgStyle = useMemo(() => ({
    color: "inherit",
    fontSize: 0,
  }), []);

  return (
    <Flex color={disabled ? disabledColor : color} ref={ref} {...rest}>
      <ReactSVG
        src={src}
        beforeInjection={(handleBeforeInjection)}
        style={reactSvgStyle}
      />
    </Flex>
  );
});
