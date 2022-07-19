import React, { forwardRef } from "react";

import { Box, BoxProps } from "@components/atoms";

export type CardProps = BoxProps & {};

export const Card: React.FunctionComponent<CardProps> = forwardRef((props, ref) => <Box ref={ref} variant={"card"} {...props}/>);
