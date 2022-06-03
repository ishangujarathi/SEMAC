import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>SEMAC</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon-64.png" rel="icon" type="image/png" sizes="64x64" />
        <link href="/favicon-128.png" rel="icon" type="image/png" sizes="128x128" />
        <link rel="apple-touch-icon" href="somedir/apple-touch-icon-iphone-60x60.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-ipad-76x76.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-iphone-retina-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-ipad-retina-152x152.png"
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
