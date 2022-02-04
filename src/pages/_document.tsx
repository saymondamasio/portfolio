import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Saymon Damásio" />
          <meta
            name="description"
            content="Meu nome é Saymon,sou desenvolvedor full-stack focado em frontend."
          />
          <meta
            name="keywords"
            content="sites, web, node, desenvolvimento, frontend, saymon, saymon damasio, programador, front-end, back-end, freelancer, freela, website, portfólio"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#00DF5E" />
          {/* <meta name="copyright" content="saymon 2022" /> */}
          <meta httpEquiv="content-language" content="pt-br" />
          <meta
            property="og:image"
            content={`${window.location.hostname}/images/preview.png`}
          />
          <meta
            property="og:title"
            content="Saymon Damásio - Full-stack developer"
          />
          <meta property="og:description" content="Full-stack developer" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
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
