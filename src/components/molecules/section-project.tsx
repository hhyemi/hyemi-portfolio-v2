import React, { useCallback } from "react";

import {
  Box, Button, Flex, FlexProps, Image, Text,
} from "@components/atoms";
import { useRouter } from "next/dist/client/router";

export type SectionProjectProps = FlexProps & {
  image: string;
  title: string;
  subtitle: string;
  page: string;
};

export const SectionProject: React.FunctionComponent<SectionProjectProps> = ({
  image, title, subtitle, page, ...props
}) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(page);
  }, [router, page]);

  return (
    <Flex
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: ["column", null, "row"],
      }}
      {...props}
    >
      <Image src={image} sx={{ width: ["360px", null, "460px"], mb: [4, null, 0]}}/>
      <Flex sx={{
        ml: [0, null, 5], alignSelf: "center", flexDirection: "column", alignItems: ["center", null, "flex-start"],
      }}>
        <Text variant={["h5", "h4", "h3", "h2"]} sx={{ fontWeight: "bold", mb: 1 }}>{title}</Text>
        <Text variant={["s2", "s1", "s1"]}>
          {subtitle}
        </Text>
        <Button
          variant={"grey"}
          appearance={"outlined"}
          onClick={handleClick}
          sx={{ mt: 3 }}
        >
          {"DETAILS"}
        </Button>
      </Flex>
    </Flex>
  );
};
