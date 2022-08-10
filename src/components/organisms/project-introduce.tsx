import React, { Fragment } from "react";

import { Box } from "@components/atoms/box";
import { Flex, FlexProps } from "@components/atoms/flex";
import { Text } from "@components/atoms/text";
import { CardList } from "@components/molecules/card-list";
import { IconButton } from "@components/molecules/icon-button";
import { ContentText, Title } from "@components/templates/projects";
import { CONTENT_MARGIN_BOTTOM } from "@themes/main";

export type ProjectIntroduceProps = FlexProps & {
  title: string;
  subtitle: string;
  period: string;
  developer: string;
  iconItems: {src: string;url: string}[];
  projectIntroduce: string;
  functionItems: string[];
};

export const ProjectIntroduce: React.FunctionComponent<ProjectIntroduceProps> = ({
  title,
  subtitle,
  period,
  developer,
  iconItems,
  projectIntroduce,
  functionItems,
}) => {
  return (
    <Fragment>
      <Box sx={{ my: 6, mb: 15 }}>
        <Flex sx={{ mb: 3 }}>
          <Text sx={{
            fontSize: ["32px", "40px", "48px", "60px"],
            fontWeight: "bold",
            lineHeight: 1,
          }}>
            {title}
          </Text>
          <Text appearance={"hint"} variant={["s2", "s1"]} sx={{ ml: 1, alignSelf: "end" }}>
            {subtitle}
          </Text>
        </Flex>

        <CardList items={[
          { title: "개발기간", value: period },
          { title: "개발인원", value: developer },
        ]}/>

        <Flex sx={{ justifyContent: "center" }}>
          {iconItems.map((item) => {
            return (
              <IconButton key={item.src} src={item.src} size={[50, 60, 70]} onClick={() => window.open(item.url)} sx={{ mr: 2 }}/>
            );
          })}
        </Flex>
      </Box>
      <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
        <Title>
          {"프로젝트소개"}
        </Title>
        <Flex sx={{ justifyContent: "center", mt: 3 }}>
          <Box>
            <ContentText sx={{ justifyContent: "flex-start", lineHeight: 2.2 }}>
              {projectIntroduce}
            </ContentText>
          </Box>
        </Flex>
      </Box>

      <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
        <Title>
          {"기능소개"}
        </Title>
        <Flex sx={{ justifyContent: "center", mt: 3 }}>
          <Box>
            <ContentText sx={{ justifyContent: "flex-start", lineHeight: 2.2, alignSelf: "center" }}>
              {functionItems.map(item => `${item}\n`)}
            </ContentText>
          </Box>
        </Flex>
      </Box>
    </Fragment>
  );
};
