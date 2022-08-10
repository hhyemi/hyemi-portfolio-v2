import React from "react";

import { Box } from "@components/atoms/box";
import { Flex } from "@components/atoms/flex";
import { Text } from "@components/atoms/text";
import { List } from "@components/molecules/list";
import { useScrollFadeIn } from "@hooks";
import { CONTENT_PADDING, SECTION_WIDTH } from "@themes/main";

export type SkillsProps = {};

const frontItems = {
  title: "🛠 FRONT-END",
  items: [
    "•   JavaScript, TypeScript, Html",
    "•   React.js, Next.js",
    "•   MobX, Redux, Redux-saga, Apollo",
    "•   Css, Styled-component, Theme ui",
  ],
};

const backItems = {
  title: "⚙️ BACK-END",
  items: [
    "•   Java, Spring",
    "•   Restful API, Axios",
    "•   Node, NPM, Express",
    "•   Oracle, MySQL, PostgreSQL",
  ],
};

export const Skills: React.FunctionComponent<SkillsProps> = () => {
  const { ref: scrollTitleRef, style: scrollTitleStyle } = useScrollFadeIn("up", 1, 0);
  const { ref: scrollContentRef, style: scrollContentStyle } = useScrollFadeIn("up", 1.5, 0);

  return (
    <Flex
      id={"skills"}
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        py: 4,
        ml: [0, null, "100px"],
        p: `${CONTENT_PADDING}px`,
      }}
    >
      <Box sx={{ width: SECTION_WIDTH }}>
        <Text
          ref={scrollTitleRef}
          variant={["h5", "h2", "h1"]}
          sx={{
            pb: [2, 4],
            fontFamily: "title",
            letterSpacing: "0.1em",
            ...scrollTitleStyle,
          }}>
          {"SKILLS"}
        </Text>
        <Flex ref={scrollContentRef} sx={{
          flexDirection: ["column", null, "row"], justifyContent: "center", alignItems: "center", ...scrollContentStyle,
        }}>
          <List list={frontItems} sx={{ width: ["100%", null, "50%"]}}/>
          <List list={backItems} sx={{ width: ["100%", null, "50%"]}}/>
        </Flex>
      </Box>
    </Flex>
  );
};
