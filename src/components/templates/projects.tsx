import React from "react";

import { Box, Flex, Text } from "@components/atoms";
import { SectionProject } from "@components/molecules";
import { useScrollFadeIn } from "@hooks";
import { CONTENT_PADDING, SECTION_WIDTH } from "@themes/main";

export type ProjectsProps = {};

export const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const { ref: scrollTitleRef, style: scrollTitleStyle } = useScrollFadeIn("up", 1, 0);

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        py: 4,
        ml: [0, null, "100px"],
        mt: [8, 25],
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
          {"PROJECTS"}
        </Text>

        <SectionProject
          image={"images/jobup.png"}
          title={"job-up (직업을 잡어)"}
          subtitle={"취업준비생을 위한 일정관리와 정보기록 및 공유를 위한 취업관리 웹사이트 📝 ✏️"}
          page={"/projects/jobup"}
        />
        <SectionProject
          image={"images/protected-dog.png"}
          title={"보호할개 (유기견 보호 웹사이트)"}
          subtitle={"반려견의 입양·분양, 스토리펀딩 , 관련정보 및 상품 판매를 \n 회원들에게 제공함으로써 유기견 없는 사회를 실현하고자 하는 사이트 🐶 ❤️"}
          page={"/projects/protected"}
        />
        <SectionProject
          image={"images/shop.png"}
          title={"Hyemi Shop (쇼핑몰)"}
          subtitle={"사용자에게 쇼핑몰 제품을 구매, 장바구니, 후기, Q&A를 제공하고 \n 관리자에게 재고ㆍ배송관리 등 쇼핑몰의 전반적인 기능을 제공하는 사이트 🎁"}
          page={"/projects/shop"}
        />
      </Box>
    </Flex>
  );
};
