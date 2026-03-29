import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Italiana } from "next/font/google";
import HeaderMenu from "./components/HeaderMenu";
import MuiAppProvider from "./MuiAppProvider";
import "./globals.css";

const italiana = Italiana({ weight: "400", subsets: ["latin"], display: "swap" });

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: true,
  loading: () => <footer style={{ minHeight: 200, background: "#1C1A18" }} aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: "Felicia & Sebastian 2026",
  description: "A wedding website for Felicia and Sebastian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={italiana.className}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Antic+Didone&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <MuiAppProvider>
          <HeaderMenu />
          {children}
          <Footer />
        </MuiAppProvider>
      </body>
    </html>
  );
}