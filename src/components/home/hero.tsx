"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "../layout/page-header";
import { useState } from "react";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";

export default function Hero() {
  const [typeCounter, setTypeCounter] = useState(0);

  const onTypingDone = () => {
    setTypeCounter(typeCounter + 1);
  };

  return (
    <>
      <PageHeader title="Hero" hidden />
      <div className="mt-8 flex max-w-screen-xl items-start justify-between w-full">
        <div className="z-10 w-full max-w-xl px-1 xl:px-0">
          <Typist
            cursor={{ hideWhenDone: true, show: false }}
            key={1}
            onTypingDone={onTypingDone}
            avgTypingDelay={35}
          >
            <h1 className="text-left font-light text-6xl text-slate-500">
              hello, world.
            </h1>
            <Typist.Delay ms={500} />
          </Typist>
          {typeCounter > 0 && (
            <Typist
              cursor={{ hideWhenDone: true, show: false }}
              key={2}
              onTypingDone={onTypingDone}
              avgTypingDelay={35}
            >
              <h2 className="text-left font-thin text-4xl">
                My name is{" "}
                <Link href="/about" className="font-bold text-accent-color">
                  Michael Cohen
                </Link>
                .
              </h2>
              <Typist.Delay ms={500} />
            </Typist>
          )}
          {typeCounter > 1 && (
            <Typist
              cursor={{ hideWhenDone: true, show: false }}
              key={2}
              onTypingDone={onTypingDone}
              avgTypingDelay={35}
            >
              <h2 className="text-left font-thin text-4xl">
                I&apos;m a software engineer.
              </h2>
              <Typist.Delay ms={500} />
            </Typist>
          )}
        </div>
        <Fade
          right={true}
          bottom={false}
          duration={1500}
          distance="30px"
          when={typeCounter > 3}
        >
          <Image
            src="/profile.jpg"
            alt="Michael Profile image"
            width="400"
            height="400"
            className="grayscale mr-2 rounded-3xl hover:grayscale-0 drop-shadow-2xl"
          />
        </Fade>
      </div>
    </>
  );
}
