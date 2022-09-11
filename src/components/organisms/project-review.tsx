import React, { ReactChild } from "react";

import { Box } from "@components/atoms/box";
import { FlexProps } from "@components/atoms/flex";
import { ContentText, Title } from "@components/templates/projects";
import { CONTENT_MARGIN_BOTTOM } from "@themes/main";

export type ProjectReviewProps = FlexProps & {
  reviewItems: ReactChild;
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
          <ContentText sx={{ mt: 7, mb: 3, lineHeight: 2.3 }}>
            {reviewItems}
            {/* {reviewItems.map(item => `${item}\n`)} */}
          </ContentText>
        </Box>
      </Box>

      <Title>
        {"아쉬운점 🥲"}
      </Title>
      <Box sx={{ mb: 10 }}>
        <ContentText sx={{ mt: 7, mb: 3, lineHeight: 2.5 }}>
          {retrospectItems.map(item => `${item}\n`)}
        </ContentText>
      </Box>
    </Box>
  );
};
