"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "../layout/page-header";

export default function Hero() {
  return (
    <>
      <PageHeader title="Hero" hidden />
      <div className="mt-8 flex max-w-screen-xl items-start justify-between w-full">
        <div className="z-10 w-full max-w-xl px-1 xl:px-0">
          <h1 className="text-left font-light text-6xl text-slate-500">
            hello, world.
          </h1>
          <h2 className="text-left font-thin text-4xl">
            My name is{" "}
            <Link href="/about" className="font-bold text-accent-color">
              Michael Cohen
            </Link>
            .
          </h2>
          <h2 className="text-left font-thin text-4xl">
            I&apos;m a software engineer.
          </h2>
        </div>
        <Image
          src="/profile.jpg"
          alt="Michael Profile image"
          width="400"
          height="400"
          className="grayscale mr-2 rounded-3xl hover:grayscale-0 drop-shadow-2xl"
        />
      </div>
    </>
  );
}
