import React, { Fragment } from "react";

import {
  Box, BoxProps, Card, Flex, FlexProps, Text, TextProps,
} from "@components/atoms";
import { IconButton } from "@components/molecules";

const Title = (props: TextProps) => <Text
  appearance={"gray"}
  variant={["h5", "h4"]}
  sx={{ mb: 2, fontWeight: "bold" }}
  {...props}
/>;

const ContentBox = (props: BoxProps) => <Box
  sx={{ mb: 25 }}
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

const CardFlex = (props: FlexProps) => <Flex
  sx={{
    flexDirection: ["column", null, "row", null],
    mt: 2,
  }}
  {...props}
/>;

const ContentText = (props: TextProps) => <Text
  variant={["s2", "s1"]}
  sx={{ lineHeight: 2 }}
  {...props}
/>;

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

        <Card sx={{
          pt: 3, pb: 5, px: 3, mb: 6,
        }}>
          <CardFlex>
            <CardTitle>{"개발기간"}</CardTitle>
            <ContentText>{period}</ContentText>
          </CardFlex>
          <CardFlex>
            <CardTitle>{"개발인원"}</CardTitle>
            <ContentText>{developer}</ContentText>
          </CardFlex>
        </Card>

        <Flex sx={{ justifyContent: "center" }}>
          {iconItems.map((item) => {
            return (
              <IconButton key={item.src} src={item.src} size={[50, 60, 70]} onClick={() => window.open(item.url)}/>
            );
          })}
        </Flex>
      </Box>
      <ContentBox>
        <Title>
          {"프로젝트소개"}
        </Title>
        <Flex sx={{ justifyContent: "center", mt: 3 }}>
          <Box>
            <Text variant={["s1", null, "h5"]} sx={{ justifyContent: "flex-start", lineHeight: 2.2 }}>
              {projectIntroduce}
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
            <Text variant={["s1", null, "h5"]} sx={{ justifyContent: "flex-start", lineHeight: 2.2, alignSelf: "center" }}>
              {functionItems.map(item => `${item}\n`)}
            </Text>
          </Box>
        </Flex>
      </ContentBox>
    </Fragment>
  );
};
