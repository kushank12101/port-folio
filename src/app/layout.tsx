import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ankushchopadekar.com"),
  title: "Ankush Chopadekar — FP&A Consultant",
  description:
    "FP&A consultant with 10 years across financial planning, budgeting, forecasting, P&L management, and business partnering with CFO-level stakeholders in multi-market organisations.",
  keywords: [
    "FP&A",
    "Financial Planning and Analysis",
    "Budgeting",
    "Forecasting",
    "P&L Management",
    "Ankush Chopadekar",
  ],
  authors: [{ name: "Ankush Chopadekar" }],
  openGraph: {
    title: "Ankush Chopadekar — FP&A Consultant",
    description:
      "Financial Planning & Analysis · Budgeting & Forecasting · Business Partnering. 10 years partnering with CFO-level stakeholders across multi-market organisations.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankush Chopadekar — FP&A Consultant",
    description:
      "Financial Planning & Analysis · Budgeting & Forecasting · Business Partnering.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
