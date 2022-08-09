import React, { useEffect } from "react";
import ReactTyped from "react-typed";

import {
  Box, BoxProps, Flex, Text,
} from "@components/atoms";
import {
  CONTENT_PADDING, MD_AND_UP_CONTENT_TOP, SM_CONTENT_TOP,
} from "@themes/main";
import { gsap } from "gsap";

export type HomeProps = {};

const ImageBox = (props: BoxProps & {url: string}) => <Box
  className={"block"}
  sx={{
    position: "absolute",
    width: "100%",
    height: "100%",
    background: `url(${props.url}) no-repeat`,
    backgroundSize: "cover",
  }}/>;

export const Home: React.FunctionComponent<HomeProps> = () => {
  useEffect(() => {
    gsap.timeline().staggerFrom(
      ".block",
      2,
      {
        y: 900,
        ease: "Expo.easeInOut",
        delay: 1,
      },
      0.4
    );
    gsap.timeline().staggerTo(".container2", 2, {
      scale: 2,
      y: "100%",
      ease: "Expo.easeInOut",
      delay: 5.5,
    });
  }, []);

  useEffect(() => {
    gsap.timeline().staggerFrom(
      ".hello-text",
      1.6,
      {
        opacity: 0,
        y: -100,
        ease: "Expo.easeInOut",
        delay: 6,
      },
      0.08
    );
  }, []);

  return (
    <Flex
      id={"home"}
      sx={{
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        p: [`${CONTENT_PADDING}px`],
        overflow: "hidden",
      }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          alignSelf: "center",
          marginTop: [`-${SM_CONTENT_TOP}px`, `-${MD_AND_UP_CONTENT_TOP}px`],
          textAlign: "center",
        }}>
        <Box
          className={"container2"}
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "300px",
          }}>
          <ImageBox url={"/images/main-1.jpg"}/>
          <ImageBox url={"/images/main-2.jpg"}/>
          <ImageBox url={"/images/main-3.jpg"}/>
          <ImageBox url={"/images/main-4.jpg"}/>
          <ImageBox url={"/images/main-5.jpg"}/>
          <ImageBox url={"/images/main-6.jpg"}/>
          <ImageBox url={"/images/main-7.jpg"}/>
        </Box>
        <Text
          className={"hello-text"}
          sx={{
            fontSize: ["24px", "42px", "56px", "72px"], fontFamily: "title", letterSpacing: "0.1em", mt: -8,
          }}>
          <ReactTyped
            strings={["HELLO :)", "I'M HYEMI"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
          <Text
            variant={["l1", "p1", "s1"]}
            sx={{ fontFamily: "title", letterSpacing: "0.1em" }}>
            {"FRONT-END DEVELOPER"}
          </Text>

        </Text>
      </Box>
    </Flex>
  );
};
