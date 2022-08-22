import React from "react";

import { Box } from "@components/atoms/box";
import { Flex, FlexProps } from "@components/atoms/flex";
import { Image } from "@components/atoms/image";
import { Text } from "@components/atoms/text";
import { IconButton } from "@components/molecules/icon-button";
import { prefix } from "@config/config";
import { keyframes } from "@emotion/react";
import { CONTENT_PADDING, SECTION_WIDTH } from "@themes/main";

export type FooterProps = {};

const boxFade = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-400px * 13));
  }
`;

const ImageFlex = (props: FlexProps) => <Flex
  sx={{
    height: "250px",
    width: "400px",
    alignItems: "center",
  }}
  {...props}
/>;

const imageItems = [
  `${prefix}/images/footer-1.jpg`,
  `${prefix}/images/footer-2.jpg`,
  `${prefix}/images/footer-3.jpg`,
  `${prefix}/images/footer-4.jpg`,
  `${prefix}/images/footer-5.jpg`,
  `${prefix}/images/footer-6.jpg`,
  `${prefix}/images/footer-7.jpg`,
  `${prefix}/images/footer-8.jpg`,
  `${prefix}/images/footer-9.jpg`,
  `${prefix}/images/footer-10.jpg`,
  `${prefix}/images/footer-11.jpg`,
  `${prefix}/images/footer-12.jpg`,
  `${prefix}/images/footer-13.jpg`,
  `${prefix}/images/footer-14.jpg`,
  `${prefix}/images/footer-15.jpg`,
  `${prefix}/images/footer-16.jpg`,
  `${prefix}/images/footer-17.jpg`,
  `${prefix}/images/footer-18.jpg`,
];

export const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <Flex sx={{ height: "100vh", alignItems: "center" }}>
      <Box>
        <Flex
          sx={{
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
              variant={["h4", null, "h3"]}
              sx={{
                pb: 4,
                fontFamily: "title",
                letterSpacing: "0.1em",
              }}>
              {"CONTACT"}
            </Text>

            <Box>
              <Flex sx={{ mb: [0, 24]}}>
                <IconButton
                  src={`${prefix}/images/email.svg`}
                  size={[30, 40]}
                  onClick={() => window.open("mailto:dlgpal9508@gmail.com")}
                />
                <IconButton
                  src={`${prefix}/images/github.svg`}
                  size={[30, 40]}
                  onClick={() => window.open("https://github.com/hhyemi")}
                />
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Box sx={{
          height: "300px",
          margin: "auto",
          position: "relative",
          width: "100vw",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}>
          <Flex
            sx={{
              width: "calc(400px * 18)",
              animation: `${boxFade} 50s linear infinite`,
            }}>
            {imageItems.map((item) => {
              return (
                <ImageFlex key={item}>
                  <Image src={item}/>
                </ImageFlex>
              );
            })}
          </Flex>
        </Box>

        <Box sx={{
          padding: "2rem 0",
          bottom: 0,
          textAlign: "center",
        }}>
          <Text variant={["l1", "p2", "p1"]}>
            {"© COPYRIGHT 2022. DEVELOPER PORTFOLIO - BY HYEMI"}
          </Text>
        </Box>

      </Box>
    </Flex>
  );
};
