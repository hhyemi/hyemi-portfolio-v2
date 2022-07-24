import React from "react";

import {
  Box, Flex, Image, Text, TextProps,
} from "@components/atoms";
import { useScrollFadeIn } from "@hooks";

export type AboutProps = {};

const AboutText = (props: TextProps) => <Text
  variant={["p1", "s2", "p1", "s1"]}
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

  const { ref: scrollRef, style: scrollStyle } = useScrollFadeIn("up", 1, 0);

  return (
    <Flex
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        py: 4,
        ml: [0, null, "200px"],
      }}
    >

      <Box ref={scrollRef} sx={{ maxWidth: ["auto", "800px", "700px", "1000px"], ...scrollStyle }}>
        <Text variant={["h3", "h2", "h1"]} sx={{ pb: 4, fontFamily: "title", letterSpacing: "0.1em" }}>
          {"ABOUT ME"}
        </Text>
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
            <Text variant={["s2", "s1"]} sx={{ width: "auto" }}>
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
    </Flex>
  );
};
