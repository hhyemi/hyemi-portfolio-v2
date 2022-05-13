import React, { forwardRef } from "react";

import { Image as ThemeUIImage, ImageProps as ThemeUIImageProps } from "theme-ui";

export type ImageProps = ThemeUIImageProps & {};

export const Image: React.FunctionComponent<ImageProps> = forwardRef((props, ref) => <ThemeUIImage ref={ref} {...props}/>);
