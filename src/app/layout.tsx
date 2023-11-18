import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Nav from "@/components/layout/nav";
import cx from "classnames";
import Footer from "@/components/layout/footer";

const robotoThin = Roboto_Mono({ weight: "100", subsets: ["latin"] });
const robotoNormal = Roboto_Mono({ weight: "300", subsets: ["latin"] });

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
      <body className={cx(robotoNormal.className, robotoThin.className)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
        <main>{children}</main>
        {"<Analytics />"}
        <Footer />
      </body>
    </html>
  );
}
