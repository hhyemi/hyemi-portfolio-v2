import React from "react";

import {
  Box, BoxProps, Flex, FlexProps, Text, TextProps,
} from "@components/atoms";

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

export type ProjectSkillsProps = FlexProps & {
  frontItems: string[];
  backItems: string[];
};

export const ProjectSkills: React.FunctionComponent<ProjectSkillsProps> = ({
  frontItems,
  backItems,
}) => {
  return (
    <ContentBox>
      <Title>
        {"기술소개"}
      </Title>
      <Flex sx={{ justifyContent: "center", mt: 7 }}>
        <Box>
          <Text sx={{ justifyContent: "flex-start" }}>
            <Text>{"Frontend "}</Text>
            <Text variant={["s1", "h4", "h3", "h2"]} sx={{ fontWeight: "bold", fontStyle: "italic" }}>
              {frontItems.map(item => `${item}\n`)}
            </Text>
            <Text sx={{ mt: 6 }}>{"Backend "}</Text>
            <Text variant={["s1", "h4", "h3", "h2"]} sx={{ fontWeight: "bold", fontStyle: "italic" }}>
              {backItems.map(item => `${item}\n`)}
            </Text>
          </Text>
        </Box>
      </Flex>
    </ContentBox>
  );
};
