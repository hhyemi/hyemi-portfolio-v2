import React, { useCallback, useRef } from "react";

import {
  Box, Button, Flex, FlexProps, Image, Text,
} from "@components/atoms";
import { Cursor } from "@components/molecules";
import { useScrollFadeIn } from "@hooks";
import { CONTENT_PADDING, SECTION_WIDTH } from "@themes/main";
import { useRouter } from "next/dist/client/router";

export type SectionProjectProps = FlexProps & {
  menuTitle: string;
  image: string;
  title: string;
  subtitle: string;
  page: string;
};

export const SectionProject: React.FunctionComponent<SectionProjectProps> = ({
  menuTitle, image, title, subtitle, page,
}) => {
  const router = useRouter();
  const element = useRef<HTMLDivElement>(null);

  const { ref: scrollTitleRef, style: scrollTitleStyle } = useScrollFadeIn("up", 1, 0);
  const { ref: scrollContentRef, style: scrollContentStyle } = useScrollFadeIn("up", 1.5, 0.3);

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
        py: 4,
        ml: [0, null, "100px"],
        p: `${CONTENT_PADDING}px`,
      }}
    >
      <Box sx={{ width: SECTION_WIDTH }}>
        <Box>
          <Text
            ref={scrollTitleRef}
            variant={["h3", "h2", "h1"]}
            sx={{
              pb: 10,
              fontFamily: "title",
              letterSpacing: "0.1em",
              ...scrollTitleStyle,
            }}>
            {menuTitle}
          </Text>
          <Flex
            ref={scrollContentRef}
            sx={{ ...scrollContentStyle }}>
            <Flex
              ref={element}
              sx={{
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
                flexDirection: ["column", null, "row"],
              }}>
              <Image src={image} sx={{ width: ["360px", null, "460px"], mb: [4, null, 0]}}/>
              <Flex sx={{
                ml: [0, null, 5], alignSelf: "center", flexDirection: "column", alignItems: ["center", null, "flex-start"],
              }}>
                <Text variant={["h5", "h4", "h3", "h2"]} sx={{ fontWeight: "bold", mb: 1 }}>{title}</Text>
                <Text variant={["s2", "s1", "s1"]}>
                  {subtitle}
                </Text>
                <Button
                  variant={"white"}
                  appearance={"outlined"}
                  onClick={handleClick}
                  sx={{ mt: 3 }}
                >
                  {"DETAILS"}
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Cursor elements={[element]} hasBackgroundImage={true}/>
      </Box>
    </Flex>
  );
};
