import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

const roboto = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
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
    <html lang="en">
      <body className={roboto.className}>
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
        <main>{children}</main>
        {"<Analytics />"}
        <Footer />
      </body>
    </html>
  );
}
