import React, { useCallback, useRef } from "react";

import { Box } from "@components/atoms/box";
import { Button } from "@components/atoms/button";
import { Card, CardProps } from "@components/atoms/card";
import { Divider } from "@components/atoms/divider";
import { Flex, FlexProps } from "@components/atoms/flex";
import { Image } from "@components/atoms/image";
import { Text, TextProps } from "@components/atoms/text";
import { Cursor } from "@components/molecules/cursor";
import { useScrollFadeIn } from "@hooks";
import { CONTENT_PADDING, SECTION_WIDTH } from "@themes/main";
import { useRouter } from "next/dist/client/router";

export type SectionCareerProps = FlexProps & {
  index: number;
  menuTitle: string;
  image: string;
  title: string;
  subtitle: string;
  period: string;
  skills: string[];
  page: string;
};

const CareerTitle = (props: TextProps) => <Text
  variant={"s2"}
  appearance={"gray"}
  sx={{
    width: "100px",
    minWidth: "100px",
    mt: "5px",
  }}
  {...props}
/>;

const CareerValue = (props: TextProps) => <Text
  variant={"s2"}
  sx={{ lineHeight: 2 }}
  {...props}
/>;

const CareerFlex = (props: FlexProps) => <Flex
  sx={{
    flexDirection: ["column", null, "row", null],
    mt: 2,
  }}
  {...props}
/>;

const CareerCard = (props: CardProps) => <Card
  sx={{
    pt: 3, pb: 5, px: 3, mb: 7,
  }}
  {...props}
/>;

export const SectionCareer: React.FunctionComponent<SectionCareerProps> = ({
  index,
  menuTitle,
  image,
  title,
  subtitle,
  period,
  skills,
  page,
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
      id={index === 0 ? "career" : undefined}
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
            color: "pastel-blue",
            fontSize: "100px",
            ...scrollTitleStyle,
          }}>
          {`0${index + 1}`}
        </Text>
        <Text
          variant={["h3", "h2", "h1"]}
          sx={{
            fontFamily: "title",
            letterSpacing: "0.1em",
            position: "relative",
            top: "-78px",
          }}>
          {menuTitle}
        </Text>

        <Box ref={scrollContentRef} sx={{ ...scrollContentStyle }}>
          <CareerCard onClick={handleClick} sx={{ cursor: "pointer" }}>
            <Box ref={element}>
              <Flex sx={{ alignItems: "flex-start", mb: 1 }}>
                <Image src={image} sx={{ width: ["80px", "120px"]}}/>
                <Text variant={["s1", "h5", "h4"]} sx={{ ml: 1, fontWeight: "bold" }}>{title}</Text>
              </Flex>
              <Box>
                <Box>
                  <Text>
                    {subtitle}
                  </Text>
                  <Divider sx={{ mt: 2 }}/>
                  <CareerFlex>
                    <CareerTitle>{"근무기간"}</CareerTitle>
                    <CareerValue>{period}</CareerValue>
                  </CareerFlex>
                  <CareerFlex>
                    <CareerTitle>{"사용기술"}</CareerTitle>
                    <Box>
                      {skills.map((skill: string) => {
                        return (
                          <CareerValue key={skill}>{skill}</CareerValue>
                        );
                      })}
                    </Box>
                  </CareerFlex>
                </Box>
              </Box>
              <Flex sx={{ justifyContent: "center" }}>
                <Button
                  variant={"white"}
                  appearance={"outlined"}
                  onClick={handleClick}
                  sx={{ mt: 3 }}
                >
                  {"DETAILS"}
                </Button>
              </Flex>
            </Box>
          </CareerCard>
        </Box>

        <Cursor elements={[element]} hasBackgroundImage={true}/>
      </Box>

    </Flex>
  );
};
