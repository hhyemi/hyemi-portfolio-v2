import React from "react";

import {
  Box, Flex, Image, ImageProps, StyledLink, Text, TextProps,
} from "@components/atoms";
import { CardList, SectionSkills } from "@components/molecules";
import { LayoutDetail } from "@components/templates";
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
  "Javascript, jQuery, Html, Css",
  "Openlayers library, 다음지도 api, vworld api",
];

const backItems = [
  "Java, Spring, 전자정부프레임워크(eGovFrame), Mybatis",
  "Oracle or PostgreSQL, Apache Tomcat, Maven, Jenkins",
];

const cardItems = [
  {
    title: "근무기간",
    value: "2019.10.07 ~ 2021.02.19 (1년 4개월)",
  },
  {
    title: "담당",
    value: "사원(풀스택개발자)",
  },
  {
    title: "회사사이트",
    value: (
      <ContentText appearance={"primary"}>
        <StyledLink href={"http://geotwo.com/main.do"}>
          {"http://geotwo.com/main.do"}
        </StyledLink>
      </ContentText>
    ),
  },
];

const Geotwo: NextPage = () => {
  return (
    <LayoutDetail headerImage={`${prefix}/images/geotwo-main.avif`}>

      <Box sx={{ my: 6, mb: 15 }}>
        <Flex sx={{ mb: 1 }}>
          <Image src={`${prefix}/images/geotwo.png`} sx={{ width: ["90px", "100px", "140px"]}}/>
          <Text sx={{
            fontSize: ["28px", "32px", "40px", "48px"],
            fontWeight: "bold",
          }}>
            {"(주)지오투정보기술"}
          </Text>
        </Flex>
        <ContentText sx={{ justifyContent: "flex-start", lineHeight: 2.2, mb: 3 }}>
          {"공간정보시스템(Geographic Information System, GIS) 전문 기업"}
        </ContentText>

        <CardList items={cardItems}/>
      </Box>

      <SectionSkills frontItems={frontItems} backItems={backItems}/>

      <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
        <Title>
          {"담당업무"}
        </Title>
        <Flex>
          <Box>
            <TaskTitle>{"▎1. 파주시 공간정보 고도화시스템"}</TaskTitle>
            <ContentText> {"노후화된 공간정보시스템을 개선하여 웹 기반 공간정보 통합관리체계, 다양한 업무에 공간정보 활용을 위한 사용자 맞춤형 공간정보체계 구축"}</ContentText>
            <Box sx={{ pl: 2 }}>
              <ContentImage src={`${prefix}/images/geotwo-uis.png`}/>
              <ContentText>{"▪️ 기간 : \n 2020.06 ~ 2021.02"}</ContentText>
              <ContentText sx={{ mt: 2 }}>
                {"▪️ 담당업무 : \n"}
                {"ㆍ 지도분할, 지도컨트롤\n"}
                {"ㆍ 지도에 있는 레이어 이름, 필지, 공간 검색\n"}
                {"ㆍ 거리 내 반경으로 특정 건물에 대한 정보제공\n"}
                {"ㆍ 드론영상, 드론사진, 조감도레이어 관리\n"}
                {"ㆍ 지도 위에 도시기준점 발급\n"}
                {"ㆍ 간이설계 통계현황 관리(지도상의 위치에서)\n"}
                {"ㆍ 개발행위허가관리 및 통계 페이지, 도로,상수,하수 통계현황 페이지\n"}
                {"ㆍ 레이어 관리, 레이어 스타일 관리 (도형, 색, 라벨)"}
              </ContentText>
            </Box>

            <TaskTitle>{"▎2. 논산시 공간정보 고도화시스템"}</TaskTitle>
            <ContentText> {"노후화된 공간정보시스템을 개선하여 웹 기반 공간정보 통합관리체계, 다양한 업무에 공간정보 활용을 위한 사용자 맞춤형 공간정보체계 구축"}</ContentText>
            <Box sx={{ pl: 2 }}>
              <ContentText>{"▪️ 기간 : \n 2019.11 ~ 2020.05"}</ContentText>
              <ContentText sx={{ mt: 2 }}>
                {"▪️ 담당업무 : \n"}
                {"ㆍ 지하시설물 표준과 현행시스템 데이터 비교, 전환\n"}
                {"ㆍ 도로, 상수, 하수 대장 데이터 관리 및 유지보수 페이지\n"}
                {"ㆍ 도로, 상수, 하수 대장 데이터 검색 및 필터링\n"}
                {"ㆍ 도로, 상수, 하수 레이어 통계 현황 관리 페이지\n"}
                {"ㆍ 관리자 페이지 데이터 코드관리\n"}
                {"ㆍ 관리자 페이지 항공영상 관리"}
              </ContentText>
            </Box>

            <TaskTitle>{"▎3. ShpEtl"}</TaskTitle>
            <ContentText> {"Shp파일을 DBMS에 로딩하여 공간테이블로 활용하거나 공간테이블을 Shp파일로 생성하여 \n"}
              {"백업 또는 타 시스템에 활용하기 위한 기능을 제공하는 웹 사이트"}</ContentText>
            <ContentImage src={`${prefix}/images/geotwo-shpetl.png`}/>
            <ContentText>{"▪️ 기간 : \n 2019.10 ~ 2019.11"}</ContentText>
            <ContentText sx={{ mt: 2 }}>
              {"▪️ 담당업무 : \n"}
              {"ㆍ DBMS의 공간 테이블에서 Shp 파일 생성 \n"}
              {"ㆍ 설정에 따라 하나 이상의 공간테이블을 Shp파일로 저장 \n"}
              {"ㆍ 여러 Table에서 각각의 Shp파일 저장가능 \n"}
              {"ㆍ 변환을 작업한 작업현황 목록제공"}
            </ContentText>
            <ContentText sx={{ mt: 2 }}>
              {"▪️ 결과 : \n"}
              {"ㆍ 개발직군이 아닌 다른팀들이 데이터를 뽑기에도 쉽게 시각적으로 기능을 제공하였다.\n"}
              {"ㆍ cmd로 실행시키던 시스템을 웹으로 기능을 제공하여 사용자에게 편리함을 주었고 작업현황을 제공하여 작업을 재실행하기가 수월해졌다.\n"}
            </ContentText>
          </Box>
        </Flex>
      </Box>

    </LayoutDetail>
  );
};

export default Geotwo;
