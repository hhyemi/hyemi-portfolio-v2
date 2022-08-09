import React, { Fragment } from "react";

import {
  Box, Flex, FlexProps, Image, Text,
} from "@components/atoms";
import { IconButton } from "@components/molecules";
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
  "/images/footer-1.jpg",
  "/images/footer-2.jpg",
  "/images/footer-3.jpg",
  "/images/footer-4.jpg",
  "/images/footer-5.jpg",
  "/images/footer-6.jpg",
  "/images/footer-7.jpg",
  "/images/footer-8.jpg",
  "/images/footer-9.jpg",
  "/images/footer-10.jpg",
  "/images/footer-11.jpg",
  "/images/footer-12.jpg",
  "/images/footer-13.jpg",
  "/images/footer-14.jpg",
  "/images/footer-15.jpg",
  "/images/footer-16.jpg",
  "/images/footer-17.jpg",
  "/images/footer-18.jpg",
];

export const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <>
      <Flex
        id={"about"}
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
            variant={["h4", null, "h3"]}
            sx={{
              pb: 4,
              fontFamily: "title",
              letterSpacing: "0.1em",
            }}>
            {"CONTACT"}
          </Text>

          <Box>
            <Flex sx={{ mb: 24 }}>
              <IconButton
                src={"/images/email.svg"}
                size={[30, 40]}
                onClick={() => window.open("mailto:dlgpal9508@gmail.com")}
              />
              <IconButton
                src={"/images/github.svg"}
                size={[30, 40]}
                onClick={() => window.open("https://github.com/hhyemi")}
              />
            </Flex>
          </Box>

          <Box sx={{
            height: "300px",
            margin: "auto",
            position: "relative",
            width: "100vw",
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
            left: "-400px",
          }}>
            <Flex
              sx={{
                width: "calc(400px * 18)",
                animation: `${boxFade} 30s linear infinite`,
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
            <Text>
              {"© COPYRIGHT 2022. DEVELOPER PORTFOLIO - BY HYEMI"}
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
