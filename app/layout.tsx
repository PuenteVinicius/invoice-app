import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://twenty-icons.com/github.com/128"
      ></link>
      <body style={{ margin: 0, background: "#F1F5F8" }}>{children}</body>
    </html>
  );
}
