import React from "react";

import { Box, Flex, Text } from "@components/atoms";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@components/organisms";

export type MainProps = {};

export const SM_CONTENT_PADDING = 16;
export const MD_AND_UP_CONTENT_PADDING = 32;

const SM_CONTENT_TOP = SM_TOP_NAV_HEIGHT + SM_CONTENT_PADDING;
const MD_AND_UP_CONTENT_TOP = MD_AND_UP_TOP_NAV_HEIGHT + MD_AND_UP_CONTENT_PADDING;

export const Main: React.FunctionComponent<MainProps> = () => {
  return (
    <Flex sx={{
      justifyContent: "center",
      height: "100vh",
    }}>
      <Box sx={{
        alignSelf: "center",
        marginTop: [`-${SM_CONTENT_TOP}px`, `-${MD_AND_UP_CONTENT_TOP}px`],
      }}>
        <Text appearance={"black"} sx={{ fontSize: ["60px", "72px", "80px"], whiteSpace: "pre-line" }}>
          {"HELLO, \n I'M HYEMI"}
        </Text>
        <Text variant={["h4", "h3", "h2"]} appearance={"black"} sx={{ whiteSpace: "pre-line" }}>
          {"FRONT-END DEVELOPER"}
        </Text>
      </Box>
    </Flex>
  );
};
