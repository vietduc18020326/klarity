import { CustomLayout } from "@/layouts";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "./variables.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klarity Live",
  description:
    "Real-time performance insights and streamlined reporting for sustainable buildings",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.className} mdl-js`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="antialiased">
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
