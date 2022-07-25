import React from "react";

import {
  Box, Card, Flex, Text, TextProps,
} from "@components/atoms";
import { useScrollFadeIn } from "@hooks";
import { SECTION_WIDTH } from "@themes/main";

const SkillTitle = (props: TextProps) => <Text
  variant={["s1", "h5"]}
  appearance={"hint"}
  sx={{ flex: 1 }}
  {...props}
/>;

const SkillText = (props: TextProps) => <Text
  variant={["s1", "h5"]}
  sx={{ lineHeight: 2 }}
  {...props}
/>;

export type SkillProps = {};

export const Skill: React.FunctionComponent<SkillProps> = () => {
  const { ref: scrollTitleRef, style: scrollTitleStyle } = useScrollFadeIn("up", 1, 0);
  const { ref: scrollContnetRef, style: scrollContnetStyle } = useScrollFadeIn("right", 1.5, 0.3);

  return (
    <Flex
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        py: 4,
        ml: [0, null, "100px"],
      }}
    >
      <Box sx={{ width: SECTION_WIDTH }}>
        <Text
          ref={scrollTitleRef}
          variant={["h3", "h2", "h1"]}
          sx={{
            pb: 4,
            fontFamily: "title",
            letterSpacing: "0.1em",
            ...scrollTitleStyle,
          }}>
          {"SKILLS"}
        </Text>
        <Card ref={scrollContnetRef} sx={{
          p: 4, pb: 5,
          ...scrollContnetStyle,
        }}>
          <Flex sx={{ flexDirection: ["column", null, "row"], justifyContent: "space-between" }}>
            <SkillTitle>{"FRONT-END"}</SkillTitle>
            <Box sx={{ flex: 2 }}>
              <SkillText>
                {"•   JavaScript, TypeScript, Html"}
              </SkillText>
              <SkillText>
                {"•   React.js, Next.js"}
              </SkillText>
              <SkillText>
                {"•   MobX, Redux, Redux-saga, Apollo"}
              </SkillText>
              <SkillText>
                {"•   Css, Styled-component, Theme ui"}
              </SkillText>
            </Box>
          </Flex>
          <Flex sx={{ flexDirection: ["column", null, "row"], justifyContent: "space-between", mt: 3 }}>
            <SkillTitle>{"BACK-END"}</SkillTitle>
            <Box sx={{ flex: 2 }}>
              <SkillText>
                {"•   Java, Spring"}
              </SkillText>
              <SkillText>
                {"•   Restful API, Axios"}
              </SkillText>
              <SkillText>
                {"•   Node, NPM, Express"}
              </SkillText>
              <SkillText>
                {"•   Oracle, MySQL, PostgreSQL"}
              </SkillText>
            </Box>
          </Flex>
        </Card>
      </Box>
    </Flex>
  );
};
