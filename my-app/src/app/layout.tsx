import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Antic_Didone, Italiana } from "next/font/google";
import HeaderMenu from "./components/HeaderMenu";
import MuiAppProvider from "./MuiAppProvider";
import "./globals.css";

const italiana = Italiana({ weight: "400", subsets: ["latin"], display: "swap" });
const anticDidone = Antic_Didone({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: true,
  loading: () => <footer style={{ minHeight: 200, background: "#1C1A18" }} aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: "Felicia & Sebastian 2026",
  description: "A wedding website for Felicia and Sebastian",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={italiana.className}>
      <body className={anticDidone.className} suppressHydrationWarning>
        <MuiAppProvider>
          <HeaderMenu />
          {children}
          <Footer />
        </MuiAppProvider>
      </body>
    </html>
  );
}