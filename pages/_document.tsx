import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          width: "100%",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          backgroundColor: "#111",
          color: "#fff"
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
