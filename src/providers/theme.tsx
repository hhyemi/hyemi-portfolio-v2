import React from "react";

import theme from "@themes/main";
import { ThemeProvider as ThemeUIThemeProvider } from "theme-ui";

const ThemeProvider: React.FunctionComponent = (props) => {
  return (
    <ThemeUIThemeProvider theme={theme}>
      {props.children}
    </ThemeUIThemeProvider>
  );
};

export default ThemeProvider;
