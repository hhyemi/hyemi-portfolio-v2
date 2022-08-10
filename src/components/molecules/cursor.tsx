import React, {
  RefObject, useCallback, useEffect, useMemo, useState,
} from "react";

import { Box } from "@components/atoms/box";
import { FlexProps } from "@components/atoms/flex";
import { prefix } from "@config/config";

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

  const scale = useMemo(() => hasBackgroundImage ? 2.5 : 2, [hasBackgroundImage]);

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
  }, []);

  const handleLinkHoverEvents = useCallback(() => {
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
        zIndex: 99,
        mixBlendMode: hasBackgroundImage ? "inherit" : "difference",
        transform: linkHovered ? `translate(-50%, -50%) scale(${scale})` : "translate(-50%, -50%)",
        backgroundColor: linkHovered ? "#ffffff" : "black",
        backgroundImage: hasBackgroundImage ? `url('${prefix}images/plus.png')` : undefined,
        backgroundSize: "100%",
      }}
    />
  );
};
