import React, { Fragment } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import ResponsiveProvider from "providers/responsive";
import ThemeProvider from "providers/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>{"HYEMI"}</title>
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
