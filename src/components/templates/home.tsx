import React from "react";
import Typed from "react-typed";

import {
  Box, Flex, Text,
} from "@components/atoms";
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
        <Text appearance={"alternative"} sx={{
          fontSize: ["24px", "42px", "56px", "72px"], fontFamily: "title", letterSpacing: "0.1em", mt: 8, ml: [3, 5, 20, 32],
        }}>
          <Typed
            strings={["HELLO 👾!", "I'M HYEMI"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
          <Text appearance={"alternative"} variant={["l1", "p1", "s1"]} sx={{ fontFamily: "title", letterSpacing: "0.1em" }}>
            {"FRONT-END DEVELOPER"}
          </Text>

        </Text>
      </Box>
    </Flex>
  );
};
