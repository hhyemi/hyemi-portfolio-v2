import React from "react";

import { ThemeProvider as ThemeUIThemeProvider } from "theme-ui";
import theme from "themes/main";

const ThemeProvider: React.FunctionComponent = (props) => {
  return (
    <ThemeUIThemeProvider theme={theme}>
      {props.children}
    </ThemeUIThemeProvider>
  );
};

export default ThemeProvider;
