"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Typist from "react-typist";

import { isDev } from "@/lib/utils";
import { Code, Flex, Grid } from "@radix-ui/themes";

import PageHeader from "../layout/page-header";
import Heading from "../typography/heading";

function TypingHero() {
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
            <Code weight="bold" variant="soft" size="9">
              hello, world.
            </Code>
            <Typist.Delay ms={500} />
          </Typist>
          {typeCounter > 0 && (
            <Typist
              cursor={{ hideWhenDone: true, show: false }}
              key={2}
              onTypingDone={onTypingDone}
              avgTypingDelay={35}
            >
              <Heading className="text-left font-thin text-4xl">
                My name is{" "}
                <Link href="/about" className="font-bold text-accent-color">
                  Michael Cohen
                </Link>
                .
              </Heading>
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
              <Heading className="text-left font-thin text-4xl">
                I&apos;m a software engineer.
              </Heading>
              <Typist.Delay ms={500} />
            </Typist>
          )}
        </div>
        <Fade
          right={true}
          bottom={false}
          duration={1500}
          distance="30px"
          when={typeCounter > 2}
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

function StaticHero() {
  return (
    <>
      <PageHeader title="Hero" />
      <Grid columns="2" width="100%" justify="between" mt="6">
        <Flex direction="column" justify="start" width="max-content">
          <Code weight="bold" variant="soft" size="9">
            hello, world.
          </Code>
          <Heading className="text-left font-thin text-4xl ml-4">
            My name is{" "}
            <Link href="/about" className="font-bold text-accent-color">
              Michael Cohen
            </Link>
            .
          </Heading>
          <Heading className="text-left font-thin text-4xl ml-4">
            I&apos;m a software engineer.
          </Heading>
          <Typist.Delay ms={500} />
        </Flex>
        <Flex justify="end">
          <Fade right={true} bottom={false} duration={1500} distance="30px">
            <Image
              src="/profile.jpg"
              alt="Michael Profile image"
              width="400"
              height="400"
              className="grayscale mr-2 rounded-6 hover:grayscale-0 drop-shadow-2xl align-bottom"
            />
          </Fade>
        </Flex>
      </Grid>
    </>
  );
}

export default function Hero() {
  return isDev() ? <StaticHero /> : <TypingHero />;
}
