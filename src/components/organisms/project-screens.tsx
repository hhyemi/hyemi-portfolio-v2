import React, { Fragment } from "react";

import {
  Box, BoxProps, FlexProps, Image, Text, TextProps,
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

export type ProjectScreensProps = FlexProps & {
  screenItems: {title: string;src: string}[];
};

export const ProjectScreens: React.FunctionComponent<ProjectScreensProps> = ({
  screenItems,
}) => {
  return (
    <ContentBox>
      <Title>
        {"화면소개"}
      </Title>
      <Box sx={{ mb: 10, textAlign: "center" }}>
        {screenItems.map((item) => {
          return (
            <Fragment key={item.title}>
              <Text variant={["s1", "h4"]} sx={{ mt: 7, mb: 3, fontWeight: "bold" }}>{item.title}</Text>
              <Image src={item.src} sx={{ width: ["400px", "600px", "1000px"]}}/>
            </Fragment>
          );
        })}
      </Box>
    </ContentBox>
  );
};
