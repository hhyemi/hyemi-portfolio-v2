import React from "react";

import { Flex, FlexProps } from "@components/atoms/flex";
import { Icon } from "@components/atoms/icon";

export type IconButtonProps = FlexProps & {
  src: string;
  size: number[] | number;
};

export const IconButton: React.FunctionComponent<IconButtonProps> = ({
  src,
  size,
  ...props
}) => {
  return (
    <Flex {...props}>
      <Flex sx={{
        p: 2,
        cursor: "pointer",
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: "bg-hover",
        },
        "&:active": {
          backgroundColor: "bg-pressed",
        },
      }}>
        <Icon src={src} size={size}/>
      </Flex>
    </Flex>
  );
};
