import React, { Fragment } from "react";

import ResponsiveProvider from "@providers/responsive";
import ThemeProvider from "@providers/theme";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>{"HYEMI"}</title>
        <link rel={"shortcut icon"} href={"images/favicon.png"}/>
      </Head>
      <ThemeProvider>
        <ResponsiveProvider>
          <Component {...pageProps}/>
        </ResponsiveProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
