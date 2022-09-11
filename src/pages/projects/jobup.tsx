import React, { ReactChild } from "react";

import { SectionSkills } from "@components/molecules/section-skills";
import { ProjectIntroduce } from "@components/organisms/project-introduce";
import { ProjectReview } from "@components/organisms/project-review";
import { ProjectScreens } from "@components/organisms/project-screens";
import { LayoutDetail } from "@components/templates/layout-detail";
import { ContentText } from "@components/templates/projects";
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

const reviewItems: ReactChild = <>
  <ContentText>
    {"📍 첫 번째 회사를 퇴사하고 프론트엔드 개발자로 전향하기 위해 "}{<b>{"React를 혼자 독학으로 공부한 후 만든 첫 프로젝트"}</b>}{"이다."}
  </ContentText>
  <br/>

  <ContentText>
    {`📍 React를 고른이유는 
    1. `}{<b>{"javascript 기반"}</b>}{`이고 html,css,js만 알고 있으면 간단히 배울 수 있기 때문이다
    2. `}{<b>{"컴포넌트 단위로 개발"}</b>}{`하여 재사용성이 좋고 유지보수가 편해 보였다.
    3. `}{<b>{"가상 DOM"}</b>}{`을 조작하여 빠르고 효율적으로 진행하는 부분이 마음에 들었다.
    4. 가장 `}{<b>{"거대한 커뮤니티"}</b>}{"를 가지고 있어서 고른 이유도 있다."}
  </ContentText>
  <br/>

  <ContentText>
    {"📍 React 뿐만아니라 "}{<b>{"es6"}</b>}{"도 처음으로 시도한 프로젝트였고(이전회사는 jquery위주였다) javascript 기본부터 차근차근 공부했다."}
  </ContentText>
  <br/>

  <ContentText sx={{ mb: 1 }}>
    {"📍 "}{<b>{"상태관리로는 Redux"}</b>}{`를 선택하였고 이유는
    1.  독학이기 때문에 `}{<b>{"레퍼런스가 많은 것"}</b>}{`을 선택하였다.
    2.  `}{<b>{"Redux DevTool"}</b>}{"가 디버깅하기에 깔끔하고 "}{<b>{"에러 추적"}</b>}{`이 쉬워 보였다.
    3.  Redux가 MobX보다 `}{<b>{"명확하고 안정성 있다고 판단"}</b>}{"하였다."}
  </ContentText>
  <ContentText sx={{ mb: 1 }}>
    {"써보면서 Redux 단점은 규모가 커지게 된다면 중복되는 "}{<b>{"코드들이 많아지고 복잡"}</b>}{`해질 것 같았다. 
    또 `}{<b>{"불변성의 데이터를 다루는 것이 번거로움"}</b>}{"이 있다. 현재 프로젝트에는 immer라는 라이브러리로 극복하였다."}
  </ContentText>
  <ContentText>
    {"Redux의 middleware인 "}{<b>{"Redux-saga"}</b>}{"도 사용하여 스토어 상태 변경 중간에 비동기 로직을 끼워서 api요청에 따른 상태 변경도 수행하였다."}
  </ContentText>
  <br/>

  <ContentText>
    {<b>{"📍 reactstrap"}</b>}{"을 이용해 간단한 컴포넌트들을 이용하였고 그 외에 디자인해야 하는 컴포넌트들은 "}{<b>{"styled-components"}</b>}{`를 사용하였다. 
    이전 회사는 퍼블리셔가 있어서 css가 부족한 점이 많았는데 이번 프로젝트로 인해 css실력이 많이 향상되고 디자인 시스템에 관심이 생겼다.`}
  </ContentText>
  <br/>

  <ContentText>
    {<b>{"📍 SSR, CSR"}</b>}{"의 개념을 이 프로젝트를 하면서 알아가게 되었고 next가 SSR를 지원하여 사용하였지만 SSR을 지원하지 않는 라이브러리(tui-calendar)를 사용하며 작동이 되지않는 어려움을 겪었고 dynamic을 이용하여 해결을 하였다."}
  </ContentText>
  <br/>

  <ContentText>
    {<b>{"📍 axios"}</b>}{`를 이용하여 서버와 데이터 통신하였다.  node로 서버를 구축하고 프론트와 다른 포트로 개발하다 보니 cross-origin HTTP 요청들을 제한당해 당황했지만, 
    미들웨어 cors를 이용하여 해결하는 방법도 알아가며 개념을 잡을 수 있었다.`}
  </ContentText>
  <br/>

  <ContentText>
    {"📍 컴포넌트에 개념을 이용하면서 재사용이 훨씬 쉬워졌고 "}{<b>{"hooks"}</b>}{"을 이용하여 코드양을 줄이며 성능을 향상할 수 있었다."}
  </ContentText>
  <br/>

  <ContentText>{"📍 처음 아는 개념과 기술이 많아 힘들었지만 많은 것을 배울 수 있었던 경험이었다."}</ContentText>
</>
;

const retrospectItems = [
  "▪️ typescript 대신 컴포넌트 props의 type 들을 prop-types를 이용해 정의하였는데 사용하면서도 나도 모르게 다른 타입이 넘어와서 에러가 나는 경우들이 있어 type이 중요하다는 것을 많이 느꼈고 타입을 정의하면 가독성에도 도움이 되는 것 같다.",
  "▪️ custom hook이 익숙지 않아 많이 사용하지 않고 코드들을 재사용한 부분들이 아쉽다.",
  "▪️ react의 장점인 component를 세세하게 나누고 재사용해야 하는데 나누는게 어려워서 코드가 길어진 파일이 많았다.",
  "▪️ 백엔들를 구축하기 위해서 javscript기반인 node를 사용하였지만 깊게 공부하지 않아 간단하게만 구현했다.",
  "▪️ ci-cd를 구현하지 못한 점, 배포까지 했으면 좋았을거 같다.",
  "▪️ tui-calendar, react-dnd 등 라이브러리를 사용하였는데 편안함도 있지만 공부 차원에서 라이브러리 사용을 덜 하고 직접 구현했으면 실력향상에 도움이 됐을 거 같다.",
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
    <LayoutDetail headerImage={`${prefix}/images/jobup-main.jpg`}>

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
