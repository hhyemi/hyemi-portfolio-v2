import React from "react";

import { SectionSkills } from "@components/molecules";
import { ProjectIntroduce, ProjectReview, ProjectScreens } from "@components/organisms";
import { LayoutDetail } from "@components/templates";
import { prefix } from "@config/config";
import type { NextPage } from "next";

const screenItems = [
  { title: "✨ 메인 & 채팅", src: `${prefix}/images/protected-chat.png` },
  { title: "✨ 투표게시판", src: `${prefix}/images/protected-vote.png` },
  { title: "✨ 후원게시판", src: `${prefix}/images/protected-give.png` },
  { title: "✨ 동물병원게시판", src: `${prefix}/images/protected-hospital.png` },
];

const frontItems = [
  "JavaScript, JSP, jQuery, Ajax",
  "HTML5, CSS3, BootStrap, Sweetalert, CKEditor4",
];

const backItems = [
  "java, Spring, Apache Tomcat",
  "Oracle, JDBC, Oracle DB Scheduler, MyBatis",
  "Node.js, NPM, Socket.io, Express",
];

const reviewItems = [
  "▪️ Java의 MVC(Model, View, Controller)패턴을 사용하였다. Model단에서는 데이터베이스와 관련된 로직을, ",
  "  View단에서는 사용자에게 보여주는 화면을, Controller단에는 Model과 View를 연결해주기 위한 매개체로 구현하였다.",
  "▪️ 각 구성요소를 독립시켜 따로 집중할 수 있어 개발의 효율성도 높이고 유지보수와 확장하기가 쉬웠다.",
  "▪️ 하지만 설계나 하나의 기능을 할 때 규묘자체가 복잡해 개발비용이 많이드는 문제가 있었다.",
  "▪️ 많은 API(javax, kakao map, sns, i'm port 등등)를 이용하여 api사용하는 법을 많이 알게되었다.",
  "▪️ Mybatis를 이용하여 sql 공부가 많이 된 것 같다.",
  "▪️ 요구사항정의서, useCase정의서, Application Modeling, 화면정의서, ERD, 테이블 정의서 등",
  "  많은 문서를 작성하여 프로젝트를 진행하여 시작하기 전에 프로젝트 분석이 쉬웠다.",
  "▪️ 학원에 들어가서 팀원들이랑 같이 진행한 프로젝트이고 팀장으로 참여하여 소통하는 법을 많이 배웠다.",
];

const retrospectItems = [
  "▪️ 반응형을 구현하지 못한 점",
  "▪️ 프로젝트를 진행하면서 설계했던 부분을 다 하지 못한 점",
  "▪️ Junit 등 test코드가 부족한 점",
  "▪️ 불필요한 주석을 사용하고 지우지 않은 코드들이 많다",
  "▪️ 본인의 기능이 바빠 다른팀원을 신경 쓰지 못해 서로 소통의 부재를 겪어 팀원의 기능을 완성하지 못한 점",
];

const functionItems = [
  "▪️ 투표게시판 (Story Funding service) \n  : 다른 회원들의 투표를 통해 정해진 투표수 달성 시 후원게시판으로 게시글이 자동으로 이동",
  "▪️ 후원게시판 (Story Funding service) \n  : 목표 투표수를 달성한 후원글이 올라오며 후원금을 결제하여 후원할 수 있다.",
  "▪️ 동물병원 정보검색, 후기게시판",
  "▪️ 회원 간의 채팅 기능",
];

const ProtectedDog: NextPage = () => {
  return (
    <LayoutDetail headerImage={`${prefix}/images/protected-main.png`}>

      <ProjectIntroduce
        title={"보호할개"}
        subtitle={"(유기견 보호 웹사이트)"}
        period={"2019.06 ~ 2019.08"}
        developer={"5명"}
        iconItems={[
          { src: `${prefix}/images/github.svg`, url: "https://github.com/hhyemi/protectedogWeb" },
          { src: `${prefix}/images/youtube.svg`, url: "https://www.youtube.com/watch?v=Kxh2ttsuJ24" },
        ]}
        projectIntroduce={"반려견의 입양·분양, 스토리펀딩 , 관련정보 및 상품 판매를 회원들에게 제공함으로써 \n 유기견 없는 사회를 실현하고자 하는 시스템 🐶 ❤️"}
        functionItems={functionItems}
      />

      <SectionSkills frontItems={frontItems} backItems={backItems}/>

      <ProjectScreens screenItems={screenItems}/>

      <ProjectReview reviewItems={reviewItems} retrospectItems={retrospectItems}/>

    </LayoutDetail>
  );
};

export default ProtectedDog;
