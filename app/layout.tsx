import "./globals.css";
import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={workSans.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
