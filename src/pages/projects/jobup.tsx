import React from "react";

import { SectionSkills } from "@components/molecules/section-skills";
import { ProjectIntroduce } from "@components/organisms/project-introduce";
import { ProjectReview } from "@components/organisms/project-review";
import { ProjectScreens } from "@components/organisms/project-screens";
import { LayoutDetail } from "@components/templates/layout-detail";
import { prefix } from "@config/config";
import type { NextPage } from "next";

const screenItems = [
  { title: "✨ Main", src: `${prefix}/images/jobup-home.png` },
  { title: "✨ Calendar", src: `${prefix}/images/jobup-calendar.png` },
  { title: "✨ TodoList", src: `${prefix}/images/jobup-todo.png` },
  { title: "✨ Memo", src: `${prefix}/images/jobup-memo.png` },
  { title: "✨ StopWatch", src: `${prefix}/images/jobup-stopwatch.png` },
];

const frontItems = [
  "react, next, redux, redux-saga",
  "styled-components, reactstrap, chart.js, tui-calendar",
];

const backItems = [
  "node, express, sequelize, nodemon, mysql, axios",
  "cookie-parser, passport, dotenv, ejs nodemailer",
];

const reviewItems = [
  "▪️ 첫 번째 회사를 퇴사하고 프론트엔드 개발자로 전향하기 위해 React를 혼자 독학으로 공부한 후 만든 첫 프로젝트이다. ",
  "▪️ React 뿐만아니라 es6도 처음으로 시도한 프로젝트였고(이전회사는 jquery위주였다) javascript 기본부터 차근차근 공부했다.",
  "▪️ SSR, CSR의 개념을 이 프로젝트를 하면서 알아가게 되었고 SSR을 지원하지 않는 라이브러리(tui-calendar)를 사용하여 \n   어려움을 겪으면서 dynamic을 이용하여 해결을 하였다. ",
  "▪️ node로 서버를 구축하면서 cross-origin HTTP 요청들을 제한당해 당황했지만 미들웨어 cors를 이용하여  해결하는 방법도 알아갔다.",
  "▪️ 컴포넌트에 개념을 이용하면서 재사용이 훨씬 쉬워졌고 hooks을 이용하여 코드양을 줄이며 성능을 향상할 수 있었다.",
  "▪️ redux를 이용하여 상태관리에 대해 편리했지만, 실수로 데이터가 변경될 수 있어 조심스러웠지만 immer라는 라이브러리 덕에 쉽게 작성하였다.",
  "▪️ 이전 회사는 퍼블리셔가 있어서 css가 부족한점이 많았는데 이번 프로젝트로 인해 css실력이 많이 향상되고 디자인 시스템에 관심이 생겼다.",
  "▪️ 처음 아는 개념과 기술이 많아 힘들었지만 많은 것을 배울 수 있었던 경험이었다.",
];

const retrospectItems = [
  "▪️ typescript대신 prop-types를 이용했었다.",
  "▪️ custom hook이 익숙치 않아 많이 사용하지 않은점이 아쉽다.",
  "▪️ component를 나누는게 어려웠어서 코드가 길어진 파일이 많았다.",
  "▪️ 백엔들를 구축하기 위해서 javscript기반인 node를 사용하였지만 깊게 공부하지 않아 간단하게만 구현했다.",
  "▪️ ci-cd를 구현하지 못한 점, 배포까지 했으면 좋았을거 같다.",
  "▪️ 라이브러리에 편안함도 있지만 공부 차원에서 라이브러리 사용을 덜 하고 직접 구현했으면 실력향상에 도움이 됐을 거 같다.",
  "▪️ 다른 프로젝트와 구분되는 특별한 기능이 없다.",
];

const functionItems = [
  "▪️ 달력형태로 일정을 기록할 수 있는 기능",
  "▪️ 드랍앤 드래그를 이용한 Todo-List 기능",
  "▪️ 메모를 저장할 수 있는 기능 ",
  "▪️ 스탑워치를 통한 공부시간 기록하는 기능",
  "▪️ 정보공유를 위한 커뮤니티 기능",
];

const Jobup: NextPage = () => {
  return (
    <LayoutDetail headerImage={`${prefix}/images/jobup-main.avif`}>

      <ProjectIntroduce
        title={"job-up"}
        subtitle={"(직업을 잡아)"}
        period={"2021.04.12 ~ 2021.05.21"}
        developer={"1명 (개인프로젝트)"}
        iconItems={[
          { src: `${prefix}/images/github.svg`, url: "https://github.com/hhyemi/job-up" },
          { src: `${prefix}/images/youtube.svg`, url: "https://www.youtube.com/watch?v=UpsirKm8t5c" },
        ]}
        projectIntroduce={"취업준비생을 위한 일정관리와 정보기록 및 \n 취업정보를 공유할 수 있는 커뮤니티 까지 포함한 취업관리 웹사이트입니다. 📝 ✏️"}
        functionItems={functionItems}
      />

      <SectionSkills frontItems={frontItems} backItems={backItems}/>

      <ProjectScreens screenItems={screenItems}/>

      <ProjectReview reviewItems={reviewItems} retrospectItems={retrospectItems}/>

    </LayoutDetail>
  );
};

export default Jobup;
