import React from "react";

import { Flex } from "@components/atoms/flex";
import { Text } from "@components/atoms/text";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex>
      <Text>{"HOME"}</Text>
    </Flex>
  );
};

export default Home;
