import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
