import React from "react";

import { Global } from "@emotion/react";
import globalStyle from "@styles/global";
import resetStyle from "@styles/reset";
import Document, {
  Head, Html, Main, NextScript,
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Global styles={() => `${resetStyle}${globalStyle}`}/>
        <Head>
          {/* metatada */}
          <link rel={"shortcut icon"} href={"/favicon.png"}/>
          <meta name={"viewport"} content={"width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"}/>
          {/* fonts */}
          <link rel={"preconnect"} href={"https://fonts.gstatic.com"}/>
          <link href={"https://fonts.googleapis.com/css2?family=Hahmlet:wght@500&display=swap"} rel={"stylesheet"}/>
          <link href={"https://fonts.googleapis.com/css2?family=Montserrat:wght@600"} rel={"stylesheet"}/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
