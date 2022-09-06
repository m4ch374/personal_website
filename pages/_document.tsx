import Document, {Html, Head, Main, NextScript} from "next/document";

class Doc extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="http://fonts.cdnfonts.com/css/umunu" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
