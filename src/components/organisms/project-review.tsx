import React from "react";

import {
  Box, BoxProps, FlexProps, Text, TextProps,
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

const ContentText = (props: TextProps) => <Text
  variant={["s2", "s1"]}
  sx={{ lineHeight: 2 }}
  {...props}
/>;

export type ProjectReviewProps = FlexProps & {
  reviewItems: string[];
  retrospectItems: string[];
};

export const ProjectReview: React.FunctionComponent<ProjectReviewProps> = ({
  reviewItems,
  retrospectItems,
}) => {
  return (

    <ContentBox>
      <Box sx={{ mb: 10 }}>
        <Title>
          {"후기"}
        </Title>
        <Box sx={{ mb: 10 }}>
          <ContentText sx={{ mt: 7, mb: 3, lineHeight: 1.8 }}>
            {reviewItems.map(item => `${item}\n`)}
          </ContentText>
        </Box>
      </Box>

      <Title>
        {"아쉬운점"}
      </Title>
      <Box sx={{ mb: 10 }}>
        <ContentText sx={{ mt: 7, mb: 3, lineHeight: 1.8 }}>
          {retrospectItems.map(item => `${item}\n`)}
        </ContentText>
      </Box>
    </ContentBox>
  );
};
