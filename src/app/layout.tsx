import type { Metadata } from "next";
import { Raleway, Poppins, Tinos } from "next/font/google";
import "./globals.css";
// layout.tsx (or _app.js)
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
        <header className="container mx-auto px-2.5 my-12">
          <NavBar />
        </header>
        {children}
        <footer className="bg-[#311f09]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
