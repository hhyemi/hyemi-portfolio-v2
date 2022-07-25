import React from "react";

import {
  Box, Card, CardProps, Divider,
  Flex, FlexProps, Image, StyledLink, Text, TextProps,
} from "@components/atoms";
import { useScrollFadeIn } from "@hooks";
import { CONTENT_PADDING, SECTION_WIDTH } from "@themes/main";

const CareerTitle = (props: TextProps) => <Text
  variant={"s2"}
  appearance={"gray"}
  sx={{
    width: "100px",
    minWidth: "100px",
    mt: "5px",
  }}
  {...props}
/>;

const CareerBoldValue = (props: TextProps) => <Text
  variant={"s2"}
  sx={{
    lineHeight: 2,
    mt: "4px",
    fontWeight: "bold",
  }}
  {...props}
/>;

const CareerValue = (props: TextProps) => <Text
  variant={"s2"}
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

const CareerCard = (props: CardProps) => <Card
  sx={{
    pt: 3, pb: 5, px: 3, mb: 7,
  }}
  {...props}
/>;

export type CareerProps = {};

export const Career: React.FunctionComponent<CareerProps> = () => {
  const { ref: scrollTitleRef, style: scrollTitleStyle } = useScrollFadeIn("up", 1, 0);

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        py: 4,
        ml: [0, null, "100px"],
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
          {"CAREER"}
        </Text>

        <CareerCard>
          <Box>
            <Flex sx={{ alignItems: "flex-start", mb: 1 }}>
              <Image src={"images/qmit.png"} sx={{ width: ["80px", "120px"]}}/>
              <Text variant={["s1", "h5", "h4"]} sx={{ ml: 1, fontWeight: "bold" }}>{"큐엠아이티 (QMIT) : 팀원(프론트엔드개발자)"}</Text>
            </Flex>
            <Box>
              <Box>
                <Text>
                  {"선수와 지도자를 위한 B2C 플랫폼 서비스로, 데이터를 통해 스포츠 선수의 부상을 예방하고, 컨디셔닝을 향상시키는 데이터 플랫폼"}
                </Text>
                <Divider sx={{ mt: 2 }}/>
                <CareerFlex>
                  <CareerTitle>{"근무기간"}</CareerTitle>
                  <CareerValue>{"2021.06.14 ~ 2022.06.30 (1년)"}</CareerValue>
                </CareerFlex>
                <CareerFlex>
                  <CareerTitle>{"사용기술"}</CareerTitle>
                  <Box>
                    <CareerValue>{"JavaScript, TypeScript, React.js, Next.js"}</CareerValue>
                    <CareerValue>{"Apollo (GraphQL), MobX-State-Tree (MobX), Theme UI (Emotion)"}</CareerValue>
                  </Box>
                </CareerFlex>
                <CareerFlex>
                  <CareerTitle>{"회사사이트"}</CareerTitle>
                  <Box>
                    <CareerValue appearance={"primary"}>
                      <StyledLink href={"https://plco.pro/"}>
                        {"https://plco.pro/"}
                      </StyledLink>
                    </CareerValue>
                    <CareerValue>
                      {"개발화면 위 링크에서 참고"}
                    </CareerValue>
                  </Box>
                </CareerFlex>
                <CareerFlex>
                  <CareerTitle>{"웹사이트"}</CareerTitle>
                  <Box>
                    <CareerValue appearance={"primary"}>
                      <StyledLink href={"https://coach.plco.pro/"}>
                        {"https://coach.plco.pro/"}
                      </StyledLink>
                    </CareerValue>
                  </Box>
                </CareerFlex>
                <CareerFlex>
                  <CareerTitle>{"담당업무"}</CareerTitle>
                  <Box>
                    <CareerBoldValue>{"ㆍ payment system 구축"}</CareerBoldValue>
                    <CareerValue>{"   - I'm port를 통한 PG사 결제"}</CareerValue>
                    <CareerValue>{"   - 재결제, 플랜변경, 재시도, 환불, 해지 구현"}</CareerValue>
                    <CareerValue>{"   - 결제내역, 인보이스내역 및 변경"}</CareerValue>
                    <CareerBoldValue>{"ㆍ chart system 구축"}</CareerBoldValue>
                    <CareerValue>{"   - victory chart library를 이용하여 반복되는 쿼리키와 차트속성(예: 차트종류, 너비, 높이, 패딩 등)이 담긴 컴포넌트의 재사용 구축"}</CareerValue>
                    <CareerValue>{"   - 90개 이상의 chart 구현"}</CareerValue>
                    <CareerValue>{"   - 6단계 프로세스"}</CareerValue>
                    <Image src={"images/chart.png"} sx={{ width: ["400px", "500px"], my: 1 }}/>
                    <CareerBoldValue>{"ㆍ design system 구축"}</CareerBoldValue>
                    <CareerValue>{"   - component design 논의 및 구축"}</CareerValue>
                    <CareerValue>{"   - storybook"}</CareerValue>
                    <CareerBoldValue>{"ㆍ team 관리 페이지"}</CareerBoldValue>
                    <CareerValue>{"   - 팀 목록, 팀추가, 팀수정, 팀삭제"}</CareerValue>
                    <CareerValue>{"   - 팀 이동하여 팀 정보 표현"}</CareerValue>
                    <CareerBoldValue>{"ㆍ 대시보드 페이지"}</CareerBoldValue>
                    <CareerValue>{"   - chart system을 이용한 차트표현"}</CareerValue>
                    <CareerValue>{"   - 최근7일간, 최근28일간 데이터 표현"}</CareerValue>
                    <CareerBoldValue>{"ㆍ 반응형 작업"}</CareerBoldValue>
                    <CareerValue>{"   - 웹, 태블릿, 핸드폰 사이즈(xl, lg, md, sm) 반응형 작업"}</CareerValue>
                    <CareerBoldValue>{"ㆍ 기존 개발 유지보수"}</CareerBoldValue>
                  </Box>
                </CareerFlex>
              </Box>
            </Box>
          </Box>
        </CareerCard>

        <CareerCard>
          <Box>
            <Flex sx={{ alignItems: "flex-start" }}>
              <Image src={"images/geotwo.png"} sx={{ width: ["80px", "120px"]}}/>
              <Text variant={["s1", "h5", "h4"]} sx={{ mt: "4px", fontWeight: "bold" }}>{"지오투정보기술 (GeoTwo) : 사원 (풀스택)"}</Text>
            </Flex>
            <Box>
              <Box>
                <Text>
                  {"공간정보시스템(Geographic Information System, GIS) 전문 기업"}
                </Text>
                <Divider sx={{ mt: 2 }}/>
                <CareerFlex>
                  <CareerTitle>{"근무기간"}</CareerTitle>
                  <CareerValue>{"2019.10.07 ~ 2021.02.19 (1년 4개월)"}</CareerValue>
                </CareerFlex>
                <CareerFlex>
                  <CareerTitle>{"사용기술"}</CareerTitle>
                  <Box>
                    <CareerValue>{"Java, Spring, 전자정부프레임워크(eGovFrame), Mybatis"}</CareerValue>
                    <CareerValue>{"JavaScript, jQuery, Html, Css, Oracle or PostgreSQL, Apache Tomcat, Maven, Jenkins"}</CareerValue>
                    <CareerValue>{"Openlayers(오픈 소스 웹 브라우저에서 지도데이터를 표시하기위한 자바스크립트 라이브러리), 다음지도api, vworld api"}</CareerValue>
                  </Box>
                </CareerFlex>
                <CareerFlex>
                  <CareerTitle>{"담당업무"}</CareerTitle>
                  <Box>
                    <Box>
                      <CareerValue sx={{ fontWeight: "bold" }}>{"1. 파주시 공간정보 고도화시스템"}</CareerValue>
                      <CareerValue appearance={"hint"}>{"노후화된 공간정보시스템을 개선하여 웹 기반 공간정보 통합관리체계, 다양한 업무에 공간정보 활용을 위한 사용자 맞춤형 공간정보체계 구축"}</CareerValue>
                      <CareerValue sx={{ mt: 1 }}>{"•   기간 : "}</CareerValue>
                      <CareerValue>{"2020.06 ~ 2021.02"}</CareerValue>
                      <CareerValue sx={{ mt: 1 }}>{"•  담당업무 : "}</CareerValue>
                      <CareerValue>{"ㆍ 지도분할, 지도컨트롤"}</CareerValue>
                      <CareerValue>{"ㆍ 지도에 있는 레이어 이름, 필지, 공간 검색"}</CareerValue>
                      <CareerValue>{"ㆍ 거리 내 반경으로 특정 건물에 대한 정보제공"}</CareerValue>
                      <CareerValue>{"ㆍ 드론영상, 드론사진, 조감도레이어 관리"}</CareerValue>
                      <CareerValue>{"ㆍ 지도 위에 도시기준점 발급"}</CareerValue>
                      <CareerValue>{"ㆍ 간이설계 통계현황 관리(지도상의 위치에서)"}</CareerValue>
                      <CareerValue>{"ㆍ 개발행위허가관리 및 통계 페이지, 도로,상수,하수 통계현황 페이지"}</CareerValue>
                      <CareerValue>{"ㆍ 레이어 관리 (fancytree라이브러리 사용), 레이어 스타일 관리 (도형, 색, 라벨)"}</CareerValue>
                      <Divider sx={{ m: 2 }}/>
                    </Box>
                    <Box>
                      <CareerValue sx={{ fontWeight: "bold" }}>{"2. 논산시 공간정보 고도화시스템"}</CareerValue>
                      <CareerValue appearance={"hint"}>{"노후화된 공간정보시스템을 개선하여 웹 기반 공간정보 통합관리체계, 다양한 업무에 공간정보 활용을 위한 사용자 맞춤형 공간정보체계 구축"}</CareerValue>
                      <CareerValue sx={{ mt: 1 }}>{"•   기간 : "}</CareerValue>
                      <CareerValue>{"2019.11 ~ 2020.05"}</CareerValue>
                      <CareerValue sx={{ mt: 1 }}>{"•  담당업무 : "}</CareerValue>
                      <CareerValue>{"ㆍ 지하시설물 표준과 현행시스템 데이터 비교, 전환"}</CareerValue>
                      <CareerValue>{"ㆍ 도로, 상수, 하수 대장 데이터 관리 및 유지보수 페이지"}</CareerValue>
                      <CareerValue>{"ㆍ 도로, 상수, 하수 대장 데이터 검색 및 필터링"}</CareerValue>
                      <CareerValue>{"ㆍ 도로, 상수, 하수 레이어 통계 현황 관리 페이지"}</CareerValue>
                      <CareerValue>{"ㆍ 관리자 페이지 데이터 코드관리"}</CareerValue>
                      <CareerValue>{"ㆍ 관리자 페이지 항공영상 관리"}</CareerValue>
                      <Divider sx={{ m: 2 }}/>
                    </Box>
                    <Box>
                      <CareerValue sx={{ fontWeight: "bold" }}>{"3. ShpEtl"}</CareerValue>
                      <CareerValue appearance={"hint"}>{"Shp파일을 DBMS에 로딩하여 공간테이블로 활용하거나 공간테이블을 Shp파일로 생성하여 \n 백업 또는 타 시스템에 활용하기 위한 기능을 제공하는 웹 사이트"}</CareerValue>
                      <CareerValue sx={{ mt: 1 }}>{"•   기간 : "}</CareerValue>
                      <CareerValue>{"2019.10 ~ 2019.11"}</CareerValue>
                      <CareerValue sx={{ mt: 1 }}>{"•  담당업무 : "}</CareerValue>
                      <CareerValue>{"ㆍ DBMS의 공간 테이블에서 Shp 파일 생성"}</CareerValue>
                      <CareerValue>{"ㆍ 설정에 따라 하나 이상의 공간테이블을 Shp파일로 저장"}</CareerValue>
                      <CareerValue>{"ㆍ 여러 Table에서 각각의 Shp파일 저장가능"}</CareerValue>
                      <CareerValue>{"ㆍ 변환을 작업한 작업현황 목록제공"}</CareerValue>
                    </Box>
                  </Box>
                </CareerFlex>
              </Box>
            </Box>
          </Box>
        </CareerCard>

      </Box>
    </Flex>
  );
};
