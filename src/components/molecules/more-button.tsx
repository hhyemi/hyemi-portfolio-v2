import React from "react";

import { Box } from "@components/atoms/box";
import { Flex } from "@components/atoms/flex";
import { Icon } from "@components/atoms/icon";
import { StyledLink } from "@components/atoms/styled-link";
import { keyframes } from "@emotion/react";

export type MoreButtonProps = {};

const pippo = keyframes`
  0% {top: 88%}
  100% {top: 92%}
`;

export const MoreButton: React.FunctionComponent<MoreButtonProps> = () => {
  return (
    <Box sx={{
      position: "absolute",
      bottom: 0,
      animation: `${pippo} 2s 1s infinite linear alternate`,
    }}>
      <StyledLink href={"#about"}>
        {"CONTINUE"}
      </StyledLink>
      <Flex sx={{ justifyContent: "center", mt: 1 }}>
        <StyledLink href={"#about"}>
          <Icon src={"/images/arrow-down.svg"} size={[20, 32]}/>
        </StyledLink>
      </Flex>
    </Box>
  );
};
