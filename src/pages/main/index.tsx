import React from "react";

import { Box } from "@components/atoms/box";
import { Flex } from "@components/atoms/flex";
import { Text } from "@components/atoms/text";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@components/organisms/navbar";
import { LayoutMain } from "@components/templates/layout-main";
import type { NextPage } from "next";

const SM_CONTENT_PADDING = 16;
const MD_AND_UP_CONTENT_PADDING = 32;

const SM_CONTENT_TOP = SM_TOP_NAV_HEIGHT + SM_CONTENT_PADDING;
const MD_AND_UP_CONTENT_TOP = MD_AND_UP_TOP_NAV_HEIGHT + MD_AND_UP_CONTENT_PADDING;

const Main: NextPage = () => {
  return (
    <LayoutMain>
      <Box sx={{ flexGrow: 1, flexBasis: 0, p: [`${SM_CONTENT_PADDING}px`, `${MD_AND_UP_CONTENT_PADDING}px`]}}>

        <Flex sx={{
          justifyContent: "center",
          height: [`calc(100vh - ${SM_CONTENT_TOP}px)`, `calc(100vh - ${MD_AND_UP_CONTENT_TOP}px)`],
        }}>
          <Box sx={{
            alignSelf: "center",
            marginTop: [`-${SM_CONTENT_TOP}px`, `-${MD_AND_UP_CONTENT_TOP}px`],
          }}>
            <Text appearance={"black"} sx={{ fontSize: "80px", whiteSpace: "pre-line" }}>
              {"Hello, \n I'm Hyemi"}
            </Text>
            <Text variant={"h1"} appearance={"black"} sx={{ whiteSpace: "pre-line" }}>
              {"Front-End Developer"}
            </Text>
          </Box>
        </Flex>

        <Box sx={{ height: "1000px", backgroundColor: "red" }}>
          <Text appearance={"black"} sx={{ fontSize: "80px", whiteSpace: "pre-line" }}>
            {"Hello, \n I'm Hyemi"}
          </Text>
          <Text variant={"h1"} appearance={"black"} sx={{ whiteSpace: "pre-line" }}>
            {"Front-End Developer"}
          </Text>
        </Box>

      </Box>
    </LayoutMain>
  );
};

export default Main;
