import React, { Fragment } from "react";

import { Box } from "@components/atoms/box";
import { FlexProps } from "@components/atoms/flex";
import { Image } from "@components/atoms/image";
import { Text } from "@components/atoms/text";
import { Title } from "@components/templates/projects";
import { CONTENT_MARGIN_BOTTOM } from "@themes/main";

export type ProjectScreensProps = FlexProps & {
  screenItems: {title: string;src: string}[];
};

export const ProjectScreens: React.FunctionComponent<ProjectScreensProps> = ({
  screenItems,
}) => {
  return (
    <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
      <Title>
        {"화면소개"}
      </Title>
      <Box sx={{ mb: 10, textAlign: "center" }}>
        {screenItems.map((item) => {
          return (
            <Fragment key={item.title}>
              <Text variant={["s1", "h5"]} sx={{ mt: 7, mb: 3, fontWeight: "bold" }}>{item.title}</Text>
              <Image src={item.src} sx={{ width: ["400px", "600px", "1000px"]}}/>
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
};
