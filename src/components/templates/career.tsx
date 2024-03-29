import React, { Fragment } from "react";

import { SectionCareer } from "@components/molecules/section-career";
import { prefix } from "@config/config";

export type CareerProps = {};

const careerItems = [
  {
    menuTitle: "CAREER",
    image: `${prefix}/images/qmit.png`,
    title: "큐엠아이티 (QMIT) : 팀원(프론트엔드개발자)",
    subtitle:
      "팀 소속 컨디션, 부상데이터를 확인하고 관리할 수 있는 B2B 서비스와 선수 개인이 사용할 수 있는 컨디션, 부상 모니터링 B2C서비스",
    period: "2021.06.14 ~ 2022.06.30 (1년 17일)",
    skills: [
      "JavaScript, TypeScript, React.js, Next.js",
      "Apollo (GraphQL), MobX-State-Tree (MobX), Theme UI (Emotion)",
    ],
    page: "/career/qmit",
  },
  {
    menuTitle: "CAREER",
    image: `${prefix}/images/geotwo.png`,
    title: "지오투정보기술 (GeoTwo) : 사원 (풀스택)",
    subtitle: "공간정보시스템(Geographic Information System, GIS) 전문 기업",
    period: "2019.10.07 ~ 2021.02.19 (1년 4개월)",
    skills: [
      "Java, Spring, 전자정부프레임워크(eGovFrame), Mybatis",
      "JavaScript, jQuery, Html, Css, Oracle or PostgreSQL, Apache Tomcat, Maven, Jenkins",
      "Openlayers(오픈 소스 웹 브라우저에서 지도데이터를 표시하기위한 자바스크립트 라이브러리), 다음지도api, vworld api",
    ],
    page: "/career/geotwo",
  },
];

export const Career: React.FunctionComponent<CareerProps> = () => {
  return (
    <Fragment>
      {careerItems.map((item, index) => {
        return (
          <SectionCareer
            key={item.title}
            index={index}
            menuTitle={item.menuTitle}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            period={item.period}
            skills={item.skills}
            page={item.page}
          />
        );
      })}
    </Fragment>
  );
};
