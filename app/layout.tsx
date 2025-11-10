import React from "react";
import { Poppins, Roboto } from "next/font/google";
const poppins = Poppins({ weight: "100", subsets: ["latin"] });
const roboto = Roboto({ weight: "100", subsets: ["latin"] });

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
      <body
        className={`${poppins.className} ${roboto.className}`}
        style={{ margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
