import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./(components)/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
