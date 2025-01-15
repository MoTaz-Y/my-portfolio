import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./Provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Motaz Yasser",
  description: "Modern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
