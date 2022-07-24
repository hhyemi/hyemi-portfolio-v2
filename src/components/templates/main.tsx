import React from "react";

import { Box, Flex, Text } from "@components/atoms";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@components/organisms";
import { useScrollFadeIn } from "@hooks";

export type MainProps = {};

export const SM_CONTENT_PADDING = 16;
export const MD_AND_UP_CONTENT_PADDING = 32;

const SM_CONTENT_TOP = SM_TOP_NAV_HEIGHT + SM_CONTENT_PADDING;
const MD_AND_UP_CONTENT_TOP = MD_AND_UP_TOP_NAV_HEIGHT + MD_AND_UP_CONTENT_PADDING;

export const Main: React.FunctionComponent<MainProps> = () => {
  const { ref: scrollRef, style: scrollStyle } = useScrollFadeIn("up", 1, 0);

  return (
    <Flex sx={{
      justifyContent: "center",
      height: "100vh",
    }}>
      <Box
        ref={scrollRef}
        sx={{
          alignSelf: "center",
          marginTop: [`-${SM_CONTENT_TOP}px`, `-${MD_AND_UP_CONTENT_TOP}px`],
          ...scrollStyle,
        }}>
        <Text sx={{ fontSize: ["60px", "72px", "80px"], fontFamily: "title", letterSpacing: "0.1em" }}>
          {"HELLO, \n I'M HYEMI"}
        </Text>
        <Text variant={["h4", "h3", "h2"]} sx={{ fontFamily: "title", letterSpacing: "0.1em" }}>
          {"FRONT-END DEVELOPER"}
        </Text>
      </Box>
    </Flex>
  );
};
