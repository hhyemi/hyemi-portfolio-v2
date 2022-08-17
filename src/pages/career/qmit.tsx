import React from "react";

import { Box } from "@components/atoms/box";
import { Flex } from "@components/atoms/flex";
import { Image, ImageProps } from "@components/atoms/image";
import { StyledLink } from "@components/atoms/styled-link";
import { Text, TextProps } from "@components/atoms/text";
import { CardList } from "@components/molecules/card-list";
import { SectionSkills } from "@components/molecules/section-skills";
import { LayoutDetail } from "@components/templates/layout-detail";
import { prefix } from "@config/config";
import { CONTENT_MARGIN_BOTTOM } from "@themes/main";
import type { NextPage } from "next";

const Title = (props: TextProps) => <Text
  appearance={"gray"}
  variant={["s1", "h5"]}
  sx={{ mb: 2, fontWeight: "bold" }}
  {...props}
/>;

const TaskTitle = (props: TextProps) => <Text
  variant={["s1", "h5"]}
  sx={{ mt: 5, mb: 2, fontWeight: "bold" }}
  {...props}
/>;

const ContentText = (props: TextProps) => <Text
  variant={["p1", "s2", null, "s1"]}
  sx={{ lineHeight: 2 }}
  {...props}
/>;

const ContentImage = (props: ImageProps) => <Image
  sx={{ my: 3, width: ["300px", "400px", "500px", "800px"]}}
  {...props}
/>;

const frontItems = [
  "JavaScript, TypeScript, React.js, Next.js",
  "Apollo (GraphQL), MobX-State-Tree (MobX), Theme UI (Emotion)",
];

const cardItems = [
  {
    title: "근무기간",
    value: "2021.06.14 ~ 2022.06.30 (1년 17일)",
  },
  {
    title: "담당",
    value: "팀원(프론트엔드개발자)",
  },
  {
    title: "회사사이트",
    value: (
      <ContentText appearance={"primary"}>
        <StyledLink href={"https://plco.pro/"}>
          {"https://plco.pro/"}
        </StyledLink>
      </ContentText>
    ),
  },
  {
    title: "production",
    value: (
      <ContentText appearance={"primary"}>
        <StyledLink href={"https://coach.plco.pro/"}>
          {"https://coach.plco.pro/"}
        </StyledLink>
      </ContentText>
    ),
  },
];

const Qmit: NextPage = () => {
  return (
    <LayoutDetail headerImage={`${prefix}/images/qmit-main.png`}>

      <Box sx={{ my: 6, mb: 15 }}>
        <Flex sx={{ mb: 1 }}>
          <Image src={`${prefix}/images/qmit.png`} sx={{ width: ["100px", "140px", "200px"]}}/>
          <Text sx={{
            fontSize: ["28px", "32px", "40px", "48px"],
            fontWeight: "bold",
          }}>
            {"(주)큐엠아이티"}
          </Text>
        </Flex>
        <ContentText sx={{ justifyContent: "flex-start", lineHeight: 2.2, mb: 3 }}>
          {"선수와 지도자를 위한 B2C 플랫폼 서비스로, 데이터를 통해 스포츠 선수의 부상을 예방하고, 컨디셔닝을 향상시키는 데이터 플랫폼"}
        </ContentText>

        <CardList items={cardItems}/>
      </Box>

      <SectionSkills frontItems={frontItems}/>

      <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
        <Title>
          {"개발 방식"}
        </Title>
        <Flex sx={{ justifyContent: "center", mt: 3 }}>
          <Box>
            <ContentText sx={{ justifyContent: "flex-start", lineHeight: 2.2 }}>
              {"sprint를 시작하기 전에 디자인, 기획, 개발팀이 함께 작업에 대한 내용을 함께 논의하며 "}
              <b>{"spring backlog"}</b>
              {"를 기획한 경험이 있습니다.\n"}
              <b>{"Dev planning"}</b>
              {"을 진행하여 task의 story point측정과 분배를 함께 정하며 주도적으로 프로젝트를 담당하였습니다.\n"}
              <b>{"kanban board"}</b>
              {"를 이용하여 업무를 확인하며 진행하고 "}
              <b>{"코드리뷰"}</b>
              {"문화가 있었습니다.\n 매일 "}
              <b>{"daily meeting"}</b>
              {"을 통해 팀원들과 진행 사항을 공유하며 부족한 부분을 상의하며 진행하였습니다.\n"}
              {"마지막으로 sprint가 끝난 후 "}
              <b>{"회고미팅"}</b>
              {"을 통해 문제점을 개선해 나갔습니다.\n"}
            </ContentText>
          </Box>
        </Flex>
      </Box>

      <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
        <Title>
          {"담당업무"}
        </Title>
        <Flex>
          <Box>
            <TaskTitle>{"▎payment system 구축"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText>{"• I'm port를 통한 PG사 결제기능 구현"}</ContentText>
              <ContentText>{"• 재결제, 플랜변경, 재시도, 환불, 해지 구현"}</ContentText>
              <ContentText>{"• 결제내역, 인보이스내역 및 변경"}</ContentText>
            </Box>

            <TaskTitle>{"▎chart system 구축"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText sx={{ mt: 2 }}>{"▪️ Challenge : "}</ContentText>
              <ContentText>{"• 페이지와 기능을 추가함에 따라 차트 수가 계속 빠르게 증가하였고 새 차트에 대해 동일한 단계를 반복하였다."}</ContentText>
              <ContentText>{"• 반복되는 query key와 victory chart library를 이용한 차트속성(예: 차트종류, 너비, 높이, 패딩 등)이 담긴 코드의 중복이 심해졌다."}</ContentText>
              <ContentText>{"• 더 높은 수준의 추상화가 필요하였고 재사용성을 위해 시스템 구축이 필요하였다."}</ContentText>

              <ContentText sx={{ mt: 3 }}>{"▪️ Solution : "}</ContentText>
              <ContentText>{"• 6단계 프로세스를 이용하여 시스템을 구축했다."}</ContentText>
              <Image src={`${prefix}/images/chart.png`} sx={{ width: ["400px", "500px"], my: 1 }}/>

              <ContentText sx={{ mt: 3 }}>{"▪️ Result : "}</ContentText>
              <ContentText>{"• 90개 이상의 chart 구현"}</ContentText>
              <ContentText>{"• 시간과 노력 및 코드를 엄청나게 절약, 차트를 추가하거나 수정하는것이 빠르고 쉬워짐"}</ContentText>
              <ContentText>{"• bar, line, stack, polar 등 다양한 종류와 최근7일간, 최근28일간 데이터 표현"}</ContentText>
              <ContentImage src={`${prefix}/images/qmit-chart1.png`}/><br/>
              <ContentImage src={`${prefix}/images/qmit-chart2.png`}/>
            </Box>

            <TaskTitle>{"▎design system 구축"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText>{"• component design 논의 및 구축"}</ContentText>
              <ContentText>{"• storybook"}</ContentText>
            </Box>

            <TaskTitle>{"▎team 관리 페이지"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText>{"• 팀 목록, 팀추가, 팀수정, 팀삭제"}</ContentText>
              <ContentText>{"• 팀 이동하여 팀 정보 표현"}</ContentText>
              <ContentImage src={`${prefix}/images/qmit-team.png`}/>
            </Box>

            <TaskTitle>{"▎반응형 작업"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText>{"• 웹, 태블릿, 핸드폰 사이즈(xl, lg, md, sm) 반응형 작업"}</ContentText>
              <ContentImage src={`${prefix}/images/qmit-dashboard.png`}/>
            </Box>

            <TaskTitle>{"▎기존 개발 유지보수"}</TaskTitle>
            <ContentText sx={{ pl: 2 }}>{"• issue tracking에 올라온 task들을 우선순위(priority)에 따라 처리 "}</ContentText>
          </Box>
        </Flex>
      </Box>

    </LayoutDetail>
  );
};

export default Qmit;
