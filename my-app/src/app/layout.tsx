import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
