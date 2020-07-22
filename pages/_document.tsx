/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  public static async getInitialProps(ctx): Promise<any> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
