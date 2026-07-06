import type { Metadata } from "next";
import { Goldman, Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import BetaNotice from "@/components/layout/BetaNotice";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HMPTI UKSW",
  description:
    "Website Himpunan Mahasiswa Program Studi Teknik Informatika UKSW.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${workSans.variable} ${goldman.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BetaNotice />
        {children}
      </body>
    </html>
  );
}
