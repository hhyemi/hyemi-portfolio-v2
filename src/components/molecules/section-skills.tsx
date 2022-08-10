import React, { Fragment } from "react";

import { Box } from "@components/atoms/box";
import { Flex, FlexProps } from "@components/atoms/flex";
import { Text, TextProps } from "@components/atoms/text";
import { CONTENT_MARGIN_BOTTOM } from "@themes/main";

const Title = (props: TextProps) => <Text
  appearance={"gray"}
  variant={["s1", "h5"]}
  sx={{ mb: 2, fontWeight: "bold" }}
  {...props}
/>;

export type SectionSkillsProps = FlexProps & {
  frontItems: string[];
  backItems?: string[];
};

export const SectionSkills: React.FunctionComponent<SectionSkillsProps> = ({
  frontItems,
  backItems,
}) => {
  return (
    <Box sx={{ mb: CONTENT_MARGIN_BOTTOM }}>
      <Title>
        {"기술소개"}
      </Title>
      <Flex sx={{ justifyContent: "center", mt: 7 }}>
        <Box>
          <Text sx={{ justifyContent: "flex-start" }}>
            <Text>{"Frontend "}</Text>
            <Text variant={["s1", "h5", "h4", "h3"]} sx={{ fontWeight: "bold", fontStyle: "italic", lineHeight: 1.8 }}>
              {frontItems.map(item => `${item}\n`)}
            </Text>
            {backItems &&
              <Fragment>
                <Text sx={{ mt: 6 }}>{"Backend "}</Text>
                <Text variant={["s1", "h5", "h4", "h3"]} sx={{ fontWeight: "bold", fontStyle: "italic", lineHeight: 1.8 }}>
                  {backItems?.map(item => `${item}\n`)}
                </Text>
              </Fragment>
            }
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
