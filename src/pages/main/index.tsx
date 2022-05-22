import React from "react";

import { Box } from "@components/atoms/box";
import { Flex } from "@components/atoms/flex";
import { Text } from "@components/atoms/text";
import { MD_AND_UP_TOP_NAV_HEIGHT, SM_TOP_NAV_HEIGHT } from "@components/organisms/navbar";
import { SIDEBAR_WIDTH } from "@components/organisms/sidabar";
import { LayoutMain } from "@components/templates/layout-main";
import type { NextPage } from "next";

const Main: NextPage = () => {
  return (
    <LayoutMain>
      <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ mt: [-SM_TOP_NAV_HEIGHT, -MD_AND_UP_TOP_NAV_HEIGHT], ml: [0, null, -SIDEBAR_WIDTH]}}>
          <Text appearance={"black"} sx={{ fontSize: "80px", whiteSpace: "pre-line" }}>
            {"Hello, \n I'm Hyemi"}
          </Text>
          <Text variant={"h1"} appearance={"black"} sx={{ whiteSpace: "pre-line" }}>
            {"Front-End Developer"}
          </Text>
        </Box>
      </Flex>
    </LayoutMain>
  );
};

export default Main;
