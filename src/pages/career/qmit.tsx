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

const Title = (props: TextProps) => (
  <Text
    appearance={"gray"}
    variant={["s1", "h5"]}
    sx={{ mb: 2, fontWeight: "bold" }}
    {...props}
  />
);

const TaskTitle = (props: TextProps) => (
  <Text
    variant={["s1", "h5"]}
    sx={{ mt: 5, mb: 2, fontWeight: "bold" }}
    {...props}
  />
);

const ContentText = (props: TextProps) => (
  <Text variant={["p1", "s2", null, "s1"]} sx={{ lineHeight: 2 }} {...props} />
);

const ContentImage = (props: ImageProps) => (
  <Image
    sx={{ my: 3, width: ["300px", "400px", "500px", "800px"] }}
    {...props}
  />
);

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
    <LayoutDetail headerImage={`${prefix}/images/qmit-main.jpg`}>
      <Box sx={{ my: 6, mb: 15 }}>
        <Flex sx={{ mb: 1 }}>
          <Image
            src={`${prefix}/images/qmit.png`}
            sx={{ width: ["100px", "140px", "200px"] }}
          />
          <Text
            sx={{
              fontSize: ["28px", "32px", "40px", "48px"],
              fontWeight: "bold",
            }}
          >
            {"(주)큐엠아이티"}
          </Text>
        </Flex>
        <ContentText
          sx={{ justifyContent: "flex-start", lineHeight: 2.2, mb: 3 }}
        >
          {
            "팀 소속 컨디션, 부상데이터를 확인하고 관리할 수 있는 B2B 서비스와 선수 개인이 사용할 수 있는 컨디션, 부상 모니터링 B2C서비스"
          }
        </ContentText>

        <CardList items={cardItems} />
      </Box>

      <SectionSkills frontItems={frontItems} />

      <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
        <Title>{"개발 방식"}</Title>
        <Flex sx={{ justifyContent: "center", mt: 3 }}>
          <Box>
            <ContentText sx={{ justifyContent: "flex-start", lineHeight: 2.2 }}>
              {
                "sprint를 시작하기 전에 디자인, 기획, 개발팀이 함께 작업에 대한 내용을 함께 논의하며 "
              }
              <b>{"spring backlog"}</b>
              {"를 기획한 경험이 있습니다.\n"}
              <b>{"Dev planning"}</b>
              {
                "을 진행하여 task의 story point측정과 분배를 함께 정하며 주도적으로 프로젝트를 담당하였습니다.\n"
              }
              <b>{"kanban board"}</b>
              {"를 이용하여 업무를 확인하며 진행하고 "}
              <b>{"코드리뷰"}</b>
              {"문화가 있었습니다.\n 매일 "}
              <b>{"daily meeting"}</b>
              {
                "을 통해 팀원들과 진행 사항을 공유하며 부족한 부분을 상의하며 진행하였습니다.\n"
              }
              {"마지막으로 sprint가 끝난 후 "}
              <b>{"회고미팅"}</b>
              {"을 통해 문제점을 개선해 나갔습니다.\n"}
            </ContentText>
          </Box>
        </Flex>
      </Box>

      <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
        <Title>{"담당업무"}</Title>
        <Flex>
          <Box>
            <TaskTitle>{"▎payment system 구축"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText sx={{ mb: 2 }}>
                {"• I'm port를 통한 PG사 결제 기능 구현"}
              </ContentText>
              <ContentText
                sx={{ mb: 2 }}
              >{`• 재결제, 플랜변경, 재시도, 환불, 해지 구현
                결제하는 부분이나 플랜을 선택하는 부분이 중복이 많아져 같은 코드가 많아지고 길어져서
                컴포넌트를 재사용하였고 custom hook을 만들어서 i'm port의 key 발급과 결제하는 부분을 재사용하였다.`}</ContentText>
              <ContentText sx={{ mb: 2 }}>
                {
                  "• 상태에 따라 보이는 화면과 기능이 달라서 결제상태를 store에 저장하여 state를 관리하였다."
                }
              </ContentText>
              <ContentText>{"• 결제내역, 인보이스내역 및 변경"}</ContentText>
            </Box>

            <TaskTitle>{"▎chart system 구축"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText sx={{ mt: 2 }}>{"▪️ Challenge : "}</ContentText>
              <ContentText>
                {
                  "• 페이지와 기능을 추가함에 따라 차트 수가 계속 빠르게 증가하였고 새 차트에 대해 동일한 단계를 반복하였다."
                }
              </ContentText>
              <ContentText>
                {
                  "• 반복되는 query key와 victory chart library를 이용한 차트속성(예: 차트종류, 너비, 높이, 패딩 등)이 담긴 코드의 중복이 심해졌다."
                }
              </ContentText>
              <ContentText>
                {
                  "• 더 높은 수준의 추상화가 필요하였고 재사용성을 위해 시스템 구축이 필요하였다."
                }
              </ContentText>

              <ContentText sx={{ mt: 3 }}>{"▪️ Solution : "}</ContentText>
              <ContentText>
                {"• 6단계 프로세스를 이용하여 시스템을 구축했다."}
              </ContentText>
              <Image
                src={`${prefix}/images/chart.png`}
                sx={{ width: ["400px", "500px"], my: 1 }}
              />

              <ContentText sx={{ mt: 3 }}>{"▪️ Result : "}</ContentText>
              <ContentText>{"• 90개 이상의 chart 구현하였다."}</ContentText>
              <ContentText>
                {
                  "• 시간과 노력 및 코드를 엄청나게 절약, 차트를 추가하거나 수정하는것이 빠르고 쉬워졌다."
                }
              </ContentText>
              <ContentText>
                {
                  "• bar, line, stack, polar 등 다양한 종류와 최근7일간, 최근28일간 데이터 표현이 가능했다."
                }
              </ContentText>
              <ContentImage src={`${prefix}/images/qmit-chart1.png`} />
              <br />
              <ContentImage src={`${prefix}/images/qmit-chart2.png`} />
            </Box>

            <TaskTitle>{"▎design system 구축"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText sx={{ mb: 2 }}>
                {`• atomic design patten 을 이용하여 component의 재사용성을 높게 개발을 하였다.
                하다 보니 Molecule와 Organism의 구분이 애매모호해져서 정리가 필요하기도 하였고 
                비슷한 component들이 생기기도 하고 재사용하고 싶어도 어떤 component가 있고 기능이 어떤 것인지 헷갈리기 시작했다.
                그래서 storybook을 도입하여 사용하기 시작하였다.
              `}
              </ContentText>
              <ContentText sx={{ mb: 2 }}>
                {`• storybook을 사용하여 디자이너와 디자인 QA이나 자연스럽게 component 단위로 생각하며 개발하게 되었지만
                재사용하지 않는 컴포넌트들은 만들어야 하는지 의문도 생겼었고 재사용이 필요하게 더 만들게 되었다
                하지만 소규모 프로젝트여서 그런지 소홀히 하게 되고 시간이 없어 밀린 숙제처럼 하게 되는 단점이 있었다.`}
              </ContentText>
              <ContentText sx={{ mb: 2 }}>
                {
                  "• 디자이너와 개발자가 함께 네이밍이나 웹과 앱의 디자인 동기화에 대해 논의 및 구축하였다."
                }
              </ContentText>
            </Box>

            <TaskTitle>{"▎team 관리 페이지"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText>
                {"• 팀 목록, 팀 추가, 팀 수정, 팀 삭제"}
              </ContentText>
              <ContentText>
                {"• 팀을 선택할 시 상세페이지로 이동하여 팀 정보 표현"}
              </ContentText>
              <ContentText>{`• 브라우저 뷰포트(Viewport)와 설정한 요소(Element)의 교차점을 관찰하며 지금 보이는 요소인지 아닌지를 비동기적으로 구분하는 
               IntersectionObserver을 사용하여 무한스크롤을 구현하였다. 재사용성을 위해 useIntersectionObserver인 custom hook을 만들어 사용하였다.`}</ContentText>
              <ContentImage src={`${prefix}/images/qmit-team.png`} />
            </Box>

            <TaskTitle>{"▎반응형 작업"}</TaskTitle>
            <Box sx={{ pl: 2 }}>
              <ContentText>
                {"• 웹, 태블릿, 핸드폰 사이즈(xl, lg, md, sm) 반응형 작업"}
              </ContentText>
              <ContentText>
                {
                  "• styled-system와 theme ui를 사용하여  컴포넌트 작업과 반응형 작업이 수월하였다."
                }
              </ContentText>
              <ContentImage src={`${prefix}/images/qmit-dashboard.png`} />
            </Box>

            <TaskTitle>{"▎기존 개발 유지보수"}</TaskTitle>
            <ContentText sx={{ pl: 2 }}>
              {
                "• QA를 통해 issue tracking에 올라온 task들을 우선순위(priority)에 따라 처리하였다."
              }
            </ContentText>
          </Box>
        </Flex>
      </Box>
    </LayoutDetail>
  );
};

export default Qmit;
