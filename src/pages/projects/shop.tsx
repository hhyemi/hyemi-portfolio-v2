import React from "react";

import { Box, Flex } from "@components/atoms";
import { SectionSkills } from "@components/molecules";
import {
  ImageHeader, ProjectIntroduce, ProjectReview, ProjectScreens, SIDEBAR_WIDTH,
} from "@components/organisms";
import { LayoutMain } from "@components/templates";
import type { NextPage } from "next";

const screenItems = [
  { title: "✨ 상품목록", src: "/images/shop-list.png" },
  { title: "✨ 상품상세보기", src: "/images/shop-detail.png" },
];

const frontItems = [
  "JavaScript, JSP, jQuery, HTML5, CSS3, Ajax",
  "HTML5, CSS3, BootStrap, Sweetalert, CKEditor4",
];

const backItems = [
  "java, Spring, Apache Tomcat",
  "Oracle, JDBC, Oracle DB Scheduler, MyBatis",
];

const reviewItems = [
  "▪️ Java의 MVC패턴을 이용한 첫 프로젝트이다.",
  "▪️ 연습용이라 간단하게만 구현을 하였지만 infinite scroll, sorting등 기술을 구현해봤다.",
  "▪️ Ajax를 이용하여 비동기 통신을 많이 배우게 되었다.",
  "▪️ 상품의 다중구매를 구현하는데 처음에 sql을 어떻게 할지 몰라서 고민했었고 \n   그 결과 상품의 id값과 설명을 단일로 보내지 않고 한 번에 동적으로 foreach문을 이용해 insert를 하였다.",
];

const retrospectItems = [
  "▪️ 프로젝트기간이 명확하지 않아 Q&A 기능을 완성하지 못한 점",
  "▪️ 디자인인 보다는 기능을 신경 써서 디자인이 미흡한 점",
  "▪️ 결제 라이브러리를 사용 안 하고 디비로만 결제를 처리한 점",
];

const functionItems = [
  "▪️ 관리자가 상품을 등록하고 수정 삭제하는 기능",
  "▪️ 상품을 배송, 도착, 취소 기능",
  "▪️ 상품을 구매(수량선택 가능)하고 내역을 볼 수 있는 기능",
  "▪️ 맘에 드는 상품 장바구니 기능",
  "▪️ 구매한 상품에 대한 후기 작성 기능",
  "▪️ 상품에 대한 Q&A 작성 기능",
];

const Shop: NextPage = () => {
  return (
    <LayoutMain>
      <Box>

        <ImageHeader src={"/images/shop-main.avif"}/>

        <Flex
          sx={{
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <Box sx={{ ml: [0, null, SIDEBAR_WIDTH], p: [3, 6]}}>

            <ProjectIntroduce
              title={"Hyemi Shop"}
              subtitle={"(쇼핑몰)"}
              period={"2019.05 ~ 2019.06"}
              developer={"1명 (개인프로젝트)"}
              iconItems={[
                { src: "/images/github.svg", url: "https://github.com/hhyemi/11Model2MVC" },
              ]}
              projectIntroduce={"사용자에게 쇼핑몰 제품을 구매, 장바구니, 후기, Q&A를 제공하고 \n  관리자페이지에서 재고관리 배송시스템 등 쇼핑몰의 전반적인 기능을 제공하는 시스템 🎁"}
              functionItems={functionItems}
            />

            <SectionSkills frontItems={frontItems} backItems={backItems}/>

            <ProjectScreens screenItems={screenItems}/>

            <ProjectReview reviewItems={reviewItems} retrospectItems={retrospectItems}/>

          </Box>
        </Flex>

      </Box>
    </LayoutMain>
  );
};

export default Shop;
