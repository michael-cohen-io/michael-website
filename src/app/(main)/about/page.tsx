"use client";

import Image from "next/image";
import { useState } from "react";
import Fade from "react-reveal/Fade";

import { InvertedButton, StandardButton } from "@/components/button/button";

export default function About() {
  const [textRevealed, setTextRevealed] = useState(false);
  return (
    <>
      <div className="flex max-w-screen-xl items-start justify-between w-full">
        <Fade
          top
          duration={1000}
          delay={500}
          distance="30px"
          onReveal={() => setTextRevealed(true)}
        >
          <div className="z-10 w-full max-w-lg px-1 xl:px-0 font-light text-sm">
            <p>
              Greetings! I&apos;m a software developer based out of Brooklyn,
              NY. I currently work as the Engineering Manager for the Creator
              team at OpenSea.
            </p>
            <br />
            <p>
              Our team is dedicated to furnishing top-tier tools tailored for
              creators, all available conveniently and safely within
              OpenSea&apos;s Creator Studio. We aim to be the most trusted and
              versatile tool for any crypto-curious creators who are looking to
              enter the world of web3 without needing to know its highly
              technical details.
            </p>
            <br />
            <p>
              Outside of my current role, I am a lifelong learner with an
              interest in building interesting and useful things. I&apos;m a
              huge music & movie fan, a regular at any and all NYC shows, and a
              novice snowboarder.
            </p>
            <br />
            <StandardButton href="/work">
              read about my work experience
            </StandardButton>
            <p className="mt-4">
              are you more oldschool? read on at
              <InvertedButton href="/MichaelCohenResume.pdf" className="mt-2">
                my_resume_final_final_copy_NEW.pdf
              </InvertedButton>
            </p>
          </div>
        </Fade>
        <Fade
          bottom
          duration={1000}
          delay={1000}
          distance="30px"
          when={textRevealed}
        >
          <Image
            src="/profile.jpg"
            alt="Michael Profile image"
            width="400"
            height="400"
            className="grayscale mr-2 rounded-6 hover:grayscale-0 drop-shadow-2xl"
          />
        </Fade>
      </div>
    </>
  );
}
