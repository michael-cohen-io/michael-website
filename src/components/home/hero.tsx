"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="mx-5 flex max-w-screen-xl items-start justify-between w-full">
        <div className="z-10 w-full max-w-6xl px-1 xl:px-0">
          <h1 className="text-left ml-3 mt-8 font-light text-8xl">
            hello, world.
          </h1>
          <h2 className="text-left ml-3 font-thin text-4xl">
            My name is{" "}
            <Link href="/about" className="font-bold text-accent-color">
              Michael Cohen
            </Link>
            .
          </h2>
          <h2 className="text-left ml-3 font-thin text-4xl">
            I'm a software engineer.
          </h2>
        </div>
        <Image
          src="/profile.jpg"
          alt="Michael Profile image"
          width="400"
          height="400"
          className="grayscale mr-2 rounded-3xl hover:grayscale-0"
        />
      </div>
    </>
  );
}
