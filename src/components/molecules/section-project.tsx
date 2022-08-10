import React, { useCallback, useRef } from "react";

import { Box } from "@components/atoms/box";
import { Button } from "@components/atoms/button";
import { Flex, FlexProps } from "@components/atoms/flex";
import { Image } from "@components/atoms/image";
import { Text } from "@components/atoms/text";
import { Cursor } from "@components/molecules/cursor";
import { useScrollFadeIn } from "@hooks";
import { CONTENT_PADDING, SECTION_WIDTH } from "@themes/main";
import { useRouter } from "next/dist/client/router";

export type SectionProjectProps = FlexProps & {
  index: number;
  menuTitle: string;
  image: string;
  title: string;
  subtitle: string;
  page: string;
};

export const SectionProject: React.FunctionComponent<SectionProjectProps> = ({
  index, menuTitle, image, title, subtitle, page,
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
      id={index === 0 ? "projects" : undefined}
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

        <Text
          ref={scrollTitleRef}
          variant={["h3", "h2", "h1"]}
          sx={{
            fontFamily: "title",
            letterSpacing: "0.1em",
            color: "pastel-pink",
            fontSize: "100px",
            ...scrollTitleStyle,
          }}>
          {`0${index + 1}`}
        </Text>
        <Text
          className={"project-text"}
          variant={["h3", "h2", "h1"]}
          sx={{
            fontFamily: "title",
            letterSpacing: "0.1em",
            position: "relative",
            top: "-78px",
          }}>
          {menuTitle}
        </Text>

        <Flex
          ref={scrollContentRef}
          sx={{ ...scrollContentStyle }}>
          <Flex
            ref={element}
            onClick={handleClick}
            sx={{
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
              cursor: "pointer",
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
                sx={{ mt: 3 }}
              >
                {"DETAILS"}
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Cursor elements={[element]} hasBackgroundImage={true}/>
      </Box>
    </Flex>
  );
};
