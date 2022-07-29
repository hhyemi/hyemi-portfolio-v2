import React, { Fragment } from "react";

import {
  Box, BoxProps, Card, Flex, FlexProps, Image, Text, TextProps,
} from "@components/atoms";
import { IconButton } from "@components/molecules";
import { SIDEBAR_WIDTH } from "@components/organisms";
import { LayoutMain } from "@components/templates";
import type { NextPage } from "next";

const Title = (props: TextProps) => <Text
  appearance={"gray"}
  variant={["h5", "h4"]}
  sx={{ mb: 2, fontWeight: "bold" }}
  {...props}
/>;

const CardTitle = (props: TextProps) => <Text
  variant={["s2", "s1"]}
  appearance={"gray"}
  sx={{
    width: "100px",
    minWidth: "100px",
    mt: "5px",
  }}
  {...props}
/>;

const ContentBox = (props: BoxProps) => <Box
  sx={{ mb: 25 }}
  {...props}
/>;

const ContentText = (props: TextProps) => <Text
  variant={["s2", "s1"]}
  sx={{ lineHeight: 2 }}
  {...props}
/>;

const CareerFlex = (props: FlexProps) => <Flex
  sx={{
    flexDirection: ["column", null, "row", null],
    mt: 2,
  }}
  {...props}
/>;

const screenItems = [
  { title: "✨ Main", src: "/images/jobup-home.png" },
  { title: "✨ Calendar", src: "/images/jobup-calendar.png" },
  { title: "✨ TodoList", src: "/images/jobup-todo.png" },
  { title: "✨ Memo", src: "/images/jobup-memo.png" },
  { title: "✨ StopWatch", src: "/images/jobup-stopwatch.png" },
];

const Jobup: NextPage = () => {
  return (
    <LayoutMain>
      <Box>

        <Flex sx={{
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
        }}>
          <Box sx={{
            position: "relative",
            height: ["auto", null, "calc(100vh - 400px)"],
            overflow: "hidden",

          }}>
            <Image src={"/images/jobup-main.avif"} sx={{ width: "100vw" }}/>
          </Box>
        </Flex>

        <Flex
          sx={{
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <Box sx={{ ml: [0, null, SIDEBAR_WIDTH], p: [3, 6]}}>

            <Box sx={{ my: 6, mb: 15 }}>
              <Flex sx={{ mb: 3 }}>
                <Text sx={{
                  fontSize: ["32px", "40px", "48px", "60px"],
                  fontWeight: "bold",
                }}>
                  {"job-up"}
                </Text>
                <Text appearance={"hint"} variant={["s2", "s1"]} sx={{ ml: 1, alignSelf: "end" }}>
                  {"(직업을 잡아)"}
                </Text>
              </Flex>

              <Card sx={{
                pt: 3, pb: 5, px: 3, mb: 6,
              }}>
                <CareerFlex>
                  <CardTitle>{"개발기간"}</CardTitle>
                  <ContentText>{"2021.04.12 ~ 2021.05.21"}</ContentText>
                </CareerFlex>
                <CareerFlex>
                  <CardTitle>{"개발인원"}</CardTitle>
                  <ContentText>{"1명 (개인프로젝트)"}</ContentText>
                </CareerFlex>
              </Card>

              <Flex sx={{ justifyContent: "center" }}>
                <IconButton src={"/images/github.svg"} size={[50, 60, 70]}/>
                <IconButton src={"/images/youtube.svg"} size={[50, 60, 70]}/>
              </Flex>
            </Box>

            <ContentBox>
              <Title>
                {"프로젝트소개"}
              </Title>
              <Flex sx={{ justifyContent: "center", mt: 3 }}>
                <Box>
                  <Text variant={["s1", null, "h5"]} sx={{ justifyContent: "flex-start", lineHeight: 2.2, textAlign: "center" }}>
                    {"취업준비생을 위한 일정관리와 정보기록 및 \n 취업정보를 공유할 수 있는 커뮤니티 까지 포함한 취업관리 웹사이트입니다. 📝 ✏️"}
                  </Text>
                </Box>
              </Flex>
            </ContentBox>

            <ContentBox>
              <Title>
                {"기능소개"}
              </Title>
              <Flex sx={{ justifyContent: "center", mt: 3 }}>
                <Box>
                  <Text variant={["s1", null, "h5"]} sx={{ justifyContent: "flex-start", lineHeight: 2.2 }}>
                    {"▪️ 달력형태로 일정을 기록할 수 있는 기능\n"}
                    {"▪️ 드랍앤 드래그를 이용한 Todo-List 기능\n"}
                    {"▪️ 메모를 저장할 수 있는 기능 \n"}
                    {"▪️ 스탑워치를 통한 공부시간 기록하는 기능\n"}
                    {"▪️ 정보공유를 위한 커뮤니티 기능\n"}
                  </Text>
                </Box>
              </Flex>
            </ContentBox>

            <ContentBox>
              <Title>
                {"기술소개"}
              </Title>
              <Flex sx={{ justifyContent: "center", mt: 7 }}>
                <Box>
                  <Text sx={{ justifyContent: "flex-start" }}>
                    <Text>{"Frontend "}</Text>
                    <Text variant={["s1", "h4", "h3", "h2"]} sx={{ fontWeight: "bold", fontStyle: "italic" }}>
                      {"react, next, redux, redux-saga \n"}
                      {"styled-components, reactstrap, chart.js, tui-calendar"}
                    </Text>
                    <Text sx={{ mt: 6 }}>{"Backend "}</Text>
                    <Text variant={["s1", "h4", "h3", "h2"]} sx={{ fontWeight: "bold", fontStyle: "italic" }}>
                      {"node, express, sequelize, nodemon, mysql, axios \n"}
                      {"cookie-parser, passport, dotenv, ejs nodemailer"}
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </ContentBox>

            <ContentBox>
              <Title>
                {"화면소개"}
              </Title>
              <Box sx={{ mb: 10, textAlign: "center" }}>
                {screenItems.map((item) => {
                  return (
                    <Fragment key={item.title}>
                      <Text variant={["s1", "h4"]} sx={{ mt: 7, mb: 3, fontWeight: "bold" }}>{item.title}</Text>
                      <Image src={item.src} sx={{ width: ["400px", "600px", "1000px"]}}/>
                    </Fragment>
                  );
                })}
              </Box>
            </ContentBox>

            <ContentBox>
              <Box sx={{ mb: 10 }}>
                <Title>
                  {"후기"}
                </Title>
                <Box sx={{ mb: 10 }}>
                  <ContentText sx={{ mt: 7, mb: 3, lineHeight: 1.8 }}>
                    {"ㆍ 첫 번째 회사를 퇴사하고 프론트엔드 개발자로 전향하기 위해 React를 혼자 독학으로 공부한 후 만든 첫 프로젝트이다. \n"}
                    {"ㆍ React 뿐만아니라 es6도 처음으로 시도한 프로젝트였고(이전회사는 jquery위주였다) javascript 기본부터 차근차근 공부했다.\n"}
                    {"ㆍ SSR, CSR의 개념을 이 프로젝트를 하면서 알아가게 되었고 SSR을 지원하지 않는 라이브러리(tui-calendar)를 사용하여 \n   어려움을 겪으면서 dynamic을 이용하여 해결을 하였다. \n "}
                    {"ㆍ node로 서버를 구축하면서 cross-origin HTTP 요청들을 제한당해 당황했지만 미들웨어 cors를 이용하여  해결하는 방법도 알아갔다.\n"}
                    {"ㆍ 컴포넌트에 개념을 이용하면서 재사용이 훨씬 쉬워졌고 hooks을 이용하여 코드양을 줄이며 성능을 향상할 수 있었다.\n "}
                    {"ㆍ redux를 이용하여 상태관리에 대해 편리했지만, 실수로 데이터가 변경될 수 있어 조심스러웠지만 immer라는 라이브러리 덕에 쉽게 작성하였다.\n "}
                    {"ㆍ 이전 회사는 퍼블리셔가 있어서 css가 부족한점이 많았는데 이번 프로젝트로 인해 css실력이 많이 향상되고 디자인 시스템에 관심이 생겼다.\n "}
                    {"ㆍ 처음 아는 개념과 기술이 많아 힘들었지만 많은 것을 배울 수 있었던 경험이었다.\n "}
                  </ContentText>
                </Box>
              </Box>

              <Title>
                {"아쉬운점"}
              </Title>
              <Box sx={{ mb: 10 }}>
                <ContentText sx={{ mt: 7, mb: 3, lineHeight: 1.8 }}>
                  {"ㆍ typescript대신 prop-types를 이용했었다.\n "}
                  {"ㆍ custom hook이 익숙치 않아 많이 사용하지 않은점이 아쉽다.\n "}
                  {"ㆍ component를 나누는게 어려웠어서 코드가 길어진 파일이 많았다.\n "}
                  {"ㆍ 백엔들를 구축하기 위해서 javscript기반인 node를 사용하였지만 깊게 공부하지 않아 간단하게만 구현했다.\n "}
                  {"ㆍ ci-cd를 구현하지 못한 점, 배포까지 했으면 좋았을거 같다.\n "}
                  {"ㆍ 라이브러리에 편안함도 있지만 공부 차원에서 라이브러리 사용을 덜 하고 직접 구현했으면 실력향상에 도움이 됐을 거 같다.\n "}
                  {"ㆍ 다른 프로젝트와 구분되는 특별한 기능이 없다.\n "}
                </ContentText>
              </Box>
            </ContentBox>

          </Box>
        </Flex>

      </Box>
    </LayoutMain>
  );
};

export default Jobup;
