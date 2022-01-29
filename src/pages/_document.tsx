import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en-PK">
        <Head>
          <link
            rel="preload"
            as="image"
            href="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          />
          <link
            rel="preload"
            as="image"
            href="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
