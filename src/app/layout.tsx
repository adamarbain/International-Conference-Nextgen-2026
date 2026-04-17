import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextGen IT & Business Seminar 2026",
  description:
    "The International Conference on Global Sustainable Business Transformation with NextGen Information Technology — 14–15 July 2026, Universiti Malaya, Kuala Lumpur, Malaysia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
