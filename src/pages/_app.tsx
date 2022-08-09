import React, { Fragment } from "react";

import { prefix } from "@config/config";
import { PortfolioProvider } from "@providers";
import ResponsiveProvider from "@providers/responsive";
import ThemeProvider from "@providers/theme";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>{"HYEMI"}</title>
      </Head>
      <PortfolioProvider value={{ prefix }}>
        <ThemeProvider>
          <ResponsiveProvider>
            <Component {...pageProps}/>
          </ResponsiveProvider>
        </ThemeProvider>
      </PortfolioProvider>
    </Fragment>
  );
};

export default App;
