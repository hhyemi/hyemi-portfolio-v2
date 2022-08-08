import React from "react";

import {
  Box, Flex, Image, Text, TextProps,
} from "@components/atoms";
import { useScrollFadeIn } from "@hooks";
import { CONTENT_PADDING, SECTION_WIDTH } from "@themes/main";

export type AboutProps = {};

const AboutText = (props: TextProps) => <Text
  variant={["p1", "s2", null, "s1"]}
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
    { title: "학력", value: "홍익대학교(세종캠퍼스) 컴퓨터정보통신공학과" },
    { title: "교육", value: "비트캠프 (2019.02.27 ~ 2019.08.27)" },
    { title: "자격증", value: "정보처리기사" },
  ];

  const { ref: scrollTitleRef, style: scrollTitleStyle } = useScrollFadeIn("up", 1, 0);
  const { ref: scrollContentRef, style: scrollContentStyle } = useScrollFadeIn("up", 1.5, 0.3);

  return (
    <Flex
      id={"about"}
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
          variant={["h3", "h2", "h1"]}
          sx={{
            pb: 4,
            fontFamily: "title",
            letterSpacing: "0.1em",
            ...scrollTitleStyle,
          }}>
          {"ABOUT ME"}
        </Text>

        <Box ref={scrollContentRef} sx={{ ...scrollContentStyle }}>
          <Flex sx={{ flexDirection: ["column", null, "row"]}}>
            <Image
              src={"/images/hyemi.jpeg"}
              sx={{
                alignSelf: ["center", null, "flex-start"],
                width: ["40%", "30%"],
                minWidth: ["40%", "30%"],
                height: "auto",
                mr: [3, 5, null, 7],
                mb: [3, 5, 0],
              }}/>
            <Box>
              <Text variant={["p1", "s2", null, "s1"]} sx={{ width: "auto", lineHeight: 1.8, mb: 2 }}>
                {"안녕하세요 ☕️ 🐈 \n"}
                {"Java Spring과 javaScript로 풀스택으로 일한 경험과 \n React를 사용하는 프론트엔드로 근무한 경험이 있는 "}
                {<b>{"3년차 개발자"}</b>}
                {"입니다.\n UI / UX 에 높은 가치를 두고 "}
                {<b>{"디자인시스템"}</b>}
                {"에 관심이 많습니다.\n"}
                {"개발팀뿐만 아니라 다른 팀의 동료들과 "}
                {<b>{"커뮤니케이션"}</b>}
                {"에 자신이 있습니다.\n"}
                {"새로운 기술을 배우기 좋아하며 고민해가며 "}
                {<b>{"열정적으로 탐구"}</b>}
                {"하는 것을 좋아합니다.\n"}
                {<b>{"빠른 습득력과 실천력"}</b>}
                {"으로 최고의 결과물을 얻기 위해 노력합니다.\n"}
              </Text>
              {aboutMeItems.map((el) => {
                return (
                  <Flex key={el.value}>
                    <AboutText appearance={"gray"} sx={{ width: "112px" }}>
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
