import React from "react";

import {
  Box, Flex, Icon, StyledLink,
} from "@components/atoms";
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
