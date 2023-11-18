"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex max-w-screen-xl items-start justify-between w-full">
        <div className="z-10 w-full max-w-lg px-1 xl:px-0">
          <p className="font-light">
            Greetings! I&apos;m a software developer based out of Brooklyn, NY.
            I currently work as the Engineering Manager for the Creator team at
            OpenSea.
          </p>
          <br />
          <p className="font-light">
            Our team is dedicated to furnishing top-tier tools tailored for
            creators, all available conveniently and safely within OpenSea's
            Creator Studio. We aim to be the most trusted and versatile tool for
            any crypto-curious creators who are looking to enter the world of
            web3 without needing to know its highly technical details.
          </p>
          <br />
          <p className="font-light">
            Outside of my current role, I am a lifelong learner with an interest
            in building interesting and useful things. I'm a huge music & movie
            fan, a regular at any and all NYC shows, and a novice snowboarder.
          </p>
          <br />
          <p className="font-light">
            are you more oldschool? read on at{" "}
            <Link
              href="/MichaelCohenResume.pdf"
              className="text-accent-color hover:underline"
            >
              {" "}
              my_resume_final_final_copy_NEW.pdf
            </Link>
          </p>
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
