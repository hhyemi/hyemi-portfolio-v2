import React from "react";

import { Box, Flex, Text } from "@components/atoms";
import { useScrollFadeIn } from "@hooks";
import {
  MD_AND_UP_CONTENT_PADDING, MD_AND_UP_CONTENT_TOP, SM_CONTENT_PADDING, SM_CONTENT_TOP,
} from "@themes/main";

export type HomeProps = {};

export const Home: React.FunctionComponent<HomeProps> = () => {
  const { ref: scrollRef, style: scrollStyle } = useScrollFadeIn("up", 1, 0);

  return (
    <Flex sx={{
      justifyContent: "center",
      height: "100vh",
      p: [`${SM_CONTENT_PADDING}px`, `${MD_AND_UP_CONTENT_PADDING}px`],
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
