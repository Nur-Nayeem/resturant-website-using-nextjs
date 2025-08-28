import type { Metadata } from "next";
import { Raleway, Poppins, Tinos } from "next/font/google";
import "./globals.css";

export const ralewaySans = Raleway({
  subsets: ["latin"],

});
export const poppinsSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
