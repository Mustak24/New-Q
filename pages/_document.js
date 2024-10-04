import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="icon" type="image/x-icon" href="/favicon.webp" />
      <script src="https://cdn.tailwindcss.com"></script>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
