import React, { forwardRef } from "react";

import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from "theme-ui";

export type StyledLinkProps = ThemeUILinkProps & {};

export const StyledLink: React.FunctionComponent<StyledLinkProps> = forwardRef((props, ref) => <ThemeUILink ref={ref} {...props}/>);
