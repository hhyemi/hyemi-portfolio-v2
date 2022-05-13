import React, { forwardRef } from "react";

import styled from "@emotion/styled";
import { Flex as ThemeUIFlex, FlexProps as ThemeUIFlexProps } from "theme-ui";

export type FlexProps = ThemeUIFlexProps & {
  invisibleScroll?: boolean;
};

const StyledFlex = styled(ThemeUIFlex)<FlexProps>`
  ${props => props.invisibleScroll && (`
    -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display: none;
    }
  `)}
`;

export const Flex: React.FunctionComponent<FlexProps> = forwardRef<HTMLDivElement, FlexProps>(({
  invisibleScroll = false,
  ...rest
}, ref) => {
  return (
    <StyledFlex ref={ref} invisibleScroll={invisibleScroll} {...rest}/>
  );
});
