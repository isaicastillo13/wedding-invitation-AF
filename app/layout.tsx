import type { Metadata } from "next";
import { Pinyon_Script, Baskervville, Baskervville_SC } from "next/font/google";
import "./globals.css";


const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const marcellus = Baskervville({
  subsets: ["latin"],
  weight: ["400","700"],
  variable: "--font-serif",
});

const marcellusSC = Baskervville_SC({
  subsets: ["latin"],
  weight: ["400","700"],
  variable: "--font-serif-sc",
});

export const metadata: Metadata = {
  title: "Boda Yasmin & George",
  description: "Nuestro amor nos lleva al altar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pinyon.variable} ${marcellus.variable} ${marcellusSC.variable}  h-full antialiased`}
    >
      <body className="flex flex-col min-h-full">{children}</body>
    </html>
  );
}
