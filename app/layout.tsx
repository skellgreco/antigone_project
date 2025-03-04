import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Εργασία Αντιγόνη",
  description: "Ένα quiz/παιχνίδι βασικών γνώσεων που αφορούν το μάθημα Β' Λυκείου της Αντιγόνης.",
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
