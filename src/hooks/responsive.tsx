import { useCallback } from "react";

import { useResponsiveContext } from "@providers";
import { ResponsiveStyleValue } from "theme-ui";

/**
 * Hook that parses responsive prop array into single prop based on active breakpoint
 */
export const useResponsive = () => {
  const {
    smOnly,
    mdOnly,
    lgOnly,
    xlOnly,
  } = useResponsiveContext();

  const getResponsiveProp = useCallback(<T extends unknown>(prop: ResponsiveStyleValue<T>): T | undefined => {
    if (Array.isArray(prop)) {
      const breakpointMap = [
        smOnly,
        mdOnly,
        lgOnly,
        xlOnly,
      ];

      // map prop value to each breakpoint in a mobile first approach
      const breakpointPropMap = breakpointMap.reduce((acc, cur, idx) => {
        const propValue = prop[idx];

        if (propValue != undefined) {
          acc.push(propValue);
        } else {
          acc.push(acc[idx - 1]);
        }

        return acc;
      }, [] as (T | undefined | null | false)[]);

      // find corresponding prop value for current breakpoint
      const foundIndex = breakpointMap.findIndex(item => item === true);
      return foundIndex !== -1
        ? breakpointPropMap[foundIndex] || undefined
        : undefined;
    } else {
      return prop || undefined;
    }
  }, [smOnly, mdOnly, lgOnly, xlOnly]);

  return getResponsiveProp;
};
