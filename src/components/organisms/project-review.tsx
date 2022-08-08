import React from "react";

import { Box, FlexProps } from "@components/atoms";
import { ContentText, Title } from "@components/templates";
import { CONTENT_MARGIN_BOTTOM } from "@themes/main";

export type ProjectReviewProps = FlexProps & {
  reviewItems: string[];
  retrospectItems: string[];
};

export const ProjectReview: React.FunctionComponent<ProjectReviewProps> = ({
  reviewItems,
  retrospectItems,
}) => {
  return (
    <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
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
    </Box>
  );
};
