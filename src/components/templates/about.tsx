import React from "react";

import { Box } from "@components/atoms/box";
import { Flex } from "@components/atoms/flex";
import { Image } from "@components/atoms/image";
import { Text } from "@components/atoms/text";

export type AboutProps = {};

export const About: React.FunctionComponent<AboutProps> = () => {
  const aboutMeItems = [
    { title: "이름", value: "이혜미" },
    { title: "생년월일", value: "1995/08/01" },
    { title: "주소", value: "경기도 성남시" },
    { title: "학력", value: "홍익대학교(세종캠퍼스) 컴퓨터정보통신공학과" },
    { title: "교육", value: "비트캠프 (2019.02.27 ~ 2019.08.27)" },
    { title: "자격증", value: "정보처리기사" },
  ];

  return (
    <Flex
      id={"about"}
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        py: 4,
        ml: [0, null, "200px"],
      }}>
      <Box sx={{ maxWidth: ["auto", "800px", "700px", "1000px"]}}>
        <Text variant={["h3", "h2", "h1"]} appearance={"black"} sx={{ whiteSpace: "pre-line", pb: 4 }}>
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
            <Text variant={["s1", "h5"]} appearance={"black"} sx={{ width: "auto", whiteSpace: "pre-line" }}>
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
                  <Text variant={["s1", "h5"]} appearance={"hint"} sx={{
                    width: "112px", whiteSpace: "pre-line", lineHeight: 1.8,
                  }}>{el.title}</Text>
                  <Text variant={["s1", "h5"]} appearance={"black"} sx={{
                    width: "auto", whiteSpace: "pre-line", lineHeight: 1.8,
                  }}>{el.value}</Text>
                </Flex>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
