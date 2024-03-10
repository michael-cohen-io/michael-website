"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Typist from "react-typist";

import { isDev } from "@/lib/utils";
import { Code, Flex, Grid, Heading, Strong } from "@radix-ui/themes";

import PageHeader from "../layout/page-header";

const firstTextBlock = (
  <Code weight="bold" variant="soft" size={{ initial: "8", md: "9" }}>
    hello, world.
  </Code>
);
const secondTextBlock = (
  <Heading
    className="text-left font-thin mt-4"
    ml={{ initial: "2", md: "4" }}
    weight="light"
    size={{ initial: "4", md: "6" }}
  >
    My name is{" "}
    <Link href="/about" className="text-accent-color">
      <Strong className="hover:underline">Michael Cohen</Strong>
    </Link>
    .
  </Heading>
);
const thirdTextBlock = (
  <Heading
    className="text-left font-thin"
    ml={{ initial: "2", md: "4" }}
    weight="light"
    size={{ initial: "4", md: "6" }}
  >
    I&apos;m a software engineer.
  </Heading>
);

const firstTypingBlock = (onTypingDone: () => void) => (
  <>
    <Typist
      cursor={{ hideWhenDone: true, show: false }}
      key={1}
      onTypingDone={onTypingDone}
      avgTypingDelay={35}
    >
      {firstTextBlock}
      <Typist.Delay ms={500} />
    </Typist>
  </>
);

const secondTypingBlock = (typeCounter: number, onTypingDone: () => void) => (
  <>
    {typeCounter > 0 && (
      <Typist
        cursor={{ hideWhenDone: true, show: false }}
        key={2}
        onTypingDone={onTypingDone}
        avgTypingDelay={35}
      >
        {secondTextBlock}
        <Typist.Delay ms={500} />
      </Typist>
    )}
  </>
);

const thirdTypingBlock = (typeCounter: number, onTypingDone: () => void) => (
  <>
    {typeCounter > 1 && (
      <Typist
        cursor={{ hideWhenDone: true, show: false }}
        key={2}
        onTypingDone={onTypingDone}
        avgTypingDelay={35}
      >
        {thirdTextBlock}
        <Typist.Delay ms={500} />
      </Typist>
    )}
  </>
);

// eslint-disable-next-line no-unused-vars
export default function Hero({setHomeDisplayed}: { setHomeDisplayed: (_: boolean) => void }){
  const [typeCounter, setTypeCounter] = useState(0);

  const onTypingDone = () => {
    setTypeCounter(typeCounter + 1);
  };
  const showTyping = !isDev();

  return (
    <>
      <PageHeader title="Hero" hidden />
      <Grid
        columns="2"
        width="100%"
        justify="between"
        mt={{ initial: "8", xs: "0", md: "6" }}
        pt={{ initial: "4", xs: "0" }}
      >
        <Flex
          direction="column"
          justify="start"
          width="max-content"
          align="start"
          mt={{ initial: "9", xs: "0" }}
        >
          {showTyping ? firstTypingBlock(onTypingDone) : firstTextBlock}
          {showTyping
            ? secondTypingBlock(typeCounter, onTypingDone)
            : secondTextBlock}
          {showTyping
            ? thirdTypingBlock(typeCounter, onTypingDone)
            : thirdTextBlock}
        </Flex>
        <Flex justify="end" display={{ initial: "none", xs: "flex" }}>
          <Fade
            right={true}
            bottom={false}
            duration={1500}
            distance="30px"
            when={typeCounter > 2 || !showTyping}
            onReveal={() => setHomeDisplayed(true)}
          >
            <Image
              src="/profile.jpg"
              alt="Michael Profile image"
              sizes="30vw, (max-width: 768px) 400px"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={400}
              height={400}
              className="grayscale mr-2 rounded-6 hover:grayscale-0 drop-shadow-2xl align-bottom"
            />
          </Fade>
        </Flex>
      </Grid>
    </>
  );
}
