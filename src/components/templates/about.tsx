import React from "react";

import {
  Box, Flex, Image, Text, TextProps,
} from "@components/atoms";
import { useScrollFadeIn } from "@hooks";
import { MD_AND_UP_CONTENT_PADDING, SECTION_WIDTH, SM_CONTENT_PADDING } from "@themes/main";

export type AboutProps = {};

const AboutText = (props: TextProps) => <Text
  variant={["s2", "s1", "s2", "h5"]}
  sx={{
    width: "112px",
    lineHeight: 1.8,
  }}
  {...props}
/>;

export const About: React.FunctionComponent<AboutProps> = () => {
  const aboutMeItems = [
    { title: "이름", value: "이혜미" },
    { title: "생년월일", value: "1995/08/01" },
    { title: "주소", value: "경기도 성남시" },
    { title: "학력", value: "홍익대학교(세종캠퍼스) 컴퓨터정보통신공학과" },
    { title: "교육", value: "비트캠프 (2019.02.27 ~ 2019.08.27)" },
    { title: "자격증", value: "정보처리기사" },
  ];

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
        p: [`${SM_CONTENT_PADDING}px`, `${MD_AND_UP_CONTENT_PADDING}px`],
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
          {"ABOUT ME"}
        </Text>

        <Box ref={scrollContnetRef} sx={{ ...scrollContnetStyle }}>
          <Flex sx={{ flexDirection: ["column", null, "row"]}}>
            <Image
              src={"/images/profile.jpeg"}
              sx={{
                alignSelf: ["center", null, "flex-start"],
                width: ["40%", "30%"],
                minWidth: ["40%", "30%"],
                height: "auto",
                mr: [3, 5, null, 7],
                mb: [3, 5, 0],
              }}/>
            <Box>
              <Text variant={["s1", "h5"]} sx={{ width: "auto" }}>
                {"자기소개안녕하세요! 자기소개안녕하세요! 자기소개안녕하세요! "}
                {"자기소개안녕하세요! 자기소개안녕하세요! 자기소개안녕하세요!"}
                {"자기소개안녕하세요! 자기소개안녕하세요! 자기소개안녕하세요!"}
                {"자기소개안녕하세요! 자기소개안녕하세요! 자기소개안녕하세요!"}
                {"자기소개안녕하세요! 자기소개안녕하세요! 자기소개안녕하세요!"}
                {"자기소개안녕하세요! 자기소개안녕하세요! 자기소개안녕하세요!\n\n"}
              </Text>

              {aboutMeItems.map((el) => {
                return (
                  <Flex key={el.value}>
                    <AboutText appearance={"hint"} sx={{ width: "112px" }}>
                      {el.title}
                    </AboutText>
                    <AboutText sx={{ width: "auto" }}>
                      {el.value}
                    </AboutText>
                  </Flex>
                );
              })}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
