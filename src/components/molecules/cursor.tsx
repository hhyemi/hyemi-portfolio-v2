import React, {
  RefObject, useCallback, useEffect, useState,
} from "react";

import { Box, FlexProps } from "@components/atoms";

export type CursorProps = FlexProps & {
  elements: RefObject<HTMLDivElement>[];
  hasBackgroundImage?: boolean;
};

export const Cursor: React.FunctionComponent<CursorProps> = ({
  elements,
  hasBackgroundImage = false,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [linkHovered, setLinkHovered] = useState(false);

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
  }, []);

  const handleLinkHoverEvents = useCallback(() => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    elements.map((el: RefObject<HTMLDivElement>) => {
      el?.current?.addEventListener("mouseover", () => setLinkHovered(true));
      el?.current?.addEventListener("mouseout", () => setLinkHovered(false));
      return null;
    });
  }, [elements]);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [addEventListeners, handleLinkHoverEvents, removeEventListeners]);

  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };

  if (typeof navigator !== "undefined" && isMobile()) return null;

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const scale = hasBackgroundImage ? 2.5 : 2;

  return (
    <Box
      style={{
        display: linkHovered ? "block" : "none",
        left: `${position.x}px`, top: `${position.y}px`,
        width: "40px",
        height: "40px",
        border: linkHovered ? "none" : "2px solid #000000",
        borderRadius: "100%",
        position: "fixed",
        pointerEvents: "none",
        transition: "all 150ms ease",
        transitionProperty: "background-color, opacity, transform, mix-blend-mode",
        zIndex: "9999",
        mixBlendMode: hasBackgroundImage ? "inherit" : "difference",
        transform: linkHovered ? `translate(-50%, -50%) scale(${scale})` : "translate(-50%, -50%)",
        backgroundColor: linkHovered ? "#ffffff" : "black",
        backgroundImage: hasBackgroundImage ? "url('images/add-plus.svg')" : undefined,
        backgroundSize: "100%",
      }}
    />
  );
};
