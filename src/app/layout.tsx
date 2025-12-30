import type { Metadata } from "next";
import { Work_Sans, M_PLUS_1_Code } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const mPlus1Code = M_PLUS_1_Code({
  variable: "--font-m-plus-1-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IIIT Dharwad | M.Tech in Data Science & Artificial Intelligence",
  description: "Join the Industry-Aligned M.Tech Program in DSAI at IIIT Dharwad. 100% Online with PhD eligibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${mPlus1Code.variable} antialiased font-work-sans`}
      >
        {children}
      </body>
    </html>
  );
}
