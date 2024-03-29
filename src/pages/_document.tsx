import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        
      </Head>
      <body
        style={{
          backgroundColor: "#080f28",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
