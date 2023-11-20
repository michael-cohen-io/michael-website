import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";

import { Roboto_Mono } from "next/font/google";
import React, { Suspense } from "react";

import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { Container, Theme } from "@radix-ui/themes";

import { Providers } from "./providers";

import type { Metadata } from "next";
const roboto = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "<MC>",
  description: "Created by Michael Cohen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body>
        <Providers>
          <Theme accentColor="blue" panelBackground="solid" scaling="100%">
            <Suspense
              fallback={
                <div className="fixed top-0 w-full flex justify-center">
                  <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
                    <p>Loading...</p>
                  </div>
                </div>
              }
            >
              <Nav />
            </Suspense>
            <main>
              <Container mt="9" className="min-h-screen">
                {children}
              </Container>
              <Footer />
            </main>
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
