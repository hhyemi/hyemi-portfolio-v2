import React, { Fragment } from "react";

import { Text, TextProps } from "@components/atoms";
import { SectionProject } from "@components/molecules";

export type ProjectsProps = {};

export const Title = (props: TextProps) => <Text
  appearance={"gray"}
  variant={["h5", "h3"]}
  sx={{ mb: 2, fontWeight: "bold" }}
  {...props}
/>;

export const ContentText = (props: TextProps) => <Text
  variant={["s1", null, "h5"]}
  sx={{ lineHeight: 2 }}
  {...props}
/>;

const projectItems = [
  {
    menuTitle: "PROJECTS-1",
    image: "images/jobup.png",
    title: "job-up (직업을 잡어)",
    subtitle: "취업준비생을 위한 일정관리와 정보기록 및 공유를 위한 취업관리 웹사이트 📝 ✏️",
    page: "/projects/jobup",
  },
  {
    menuTitle: "PROJECTS-2",
    image: "images/protected-dog.png",
    title: "보호할개 (유기견 보호 웹사이트)",
    subtitle: "반려견의 입양·분양, 스토리펀딩 , 관련정보 및 상품 판매를 \n 회원들에게 제공함으로써 유기견 없는 사회를 실현하고자 하는 사이트 🐶 ❤️",
    page: "/projects/protected-dog",
  },
  {
    menuTitle: "PROJECTS-3",
    image: "images/shop.png",
    title: "Hyemi Shop (쇼핑몰)",
    subtitle: "사용자에게 쇼핑몰 제품을 구매, 장바구니, 후기, Q&A를 제공하고 \n 관리자에게 재고ㆍ배송관리 등 쇼핑몰의 전반적인 기능을 제공하는 사이트 🎁",
    page: "/projects/shop",
  },
];

export const Projects: React.FunctionComponent<ProjectsProps> = () => {
  return (
    <Fragment>
      {projectItems.map((item, index) => {
        return (
          <SectionProject
            key={item.title}
            index={index}
            menuTitle={item.menuTitle}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            page={item.page}
          />
        );
      })}
    </Fragment>
  );
};
