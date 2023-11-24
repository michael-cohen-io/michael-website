"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Fade from "react-reveal/Fade";

import { InvertedButton, StandardButton } from "@/components/button/button";
import useMediaQuery from "@/lib/hooks/use-media-query";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Flex, Grid, Strong, Text } from "@radix-ui/themes";

export default function About() {
  const [textRevealed, setTextRevealed] = useState(false);
  const { isMobile } = useMediaQuery();
  return (
    <>
      <Flex
        align={{ initial: "center", md: "start" }}
        justify="between"
        direction={{ initial: "column-reverse", md: "row-reverse" }}
        className="max-w-screen-xl w-full"
      >
        <Fade
          top
          duration={1000}
          delay={500}
          distance="30px"
          onReveal={() => setTextRevealed(true)}
        >
          <Flex
            direction="column"
            className="z-10 w-full max-w-lg px-1 xl:px-0 font-light text-sm"
          >
            <Text size="4">
              Shalom! I&apos;m a{" "}
              <Strong>
                <Link
                  className="text-accent-color hover:underline"
                  href="/work"
                >
                  software developer
                </Link>
              </Strong>{" "}
              based out of Brooklyn, NY.
            </Text>
            <br />
            <Text size="2">
              I am a:
              <Flex gap="2">
                <ArrowRightIcon />
                full-stack engineer,
              </Flex>
              <Flex gap="2">
                <ArrowRightIcon />a web3 developer,
              </Flex>
              <Flex gap="2">
                <ArrowRightIcon />
                an engineering leader,
              </Flex>
              <Flex gap="2">
                <ArrowRightIcon />I{" "}
                <Strong>
                  <Link
                    className="text-accent-color hover:underline"
                    href="/contact"
                  >
                    freelance & consult
                  </Link>
                </Strong>
                ,
              </Flex>
              <Flex gap="2">
                <ArrowRightIcon />
                sometimes I design things,
              </Flex>
              <Flex gap="2">
                <ArrowRightIcon />
                and I&apos;m available for hire.
              </Flex>
            </Text>
            <br />
            <Text size="2">
              I currently work as the Engineering Manager for the Creator team
              at{" "}
              <Text color="blue">
                <Strong>
                  <Link href="https://opensea.io/" className="hover:underline">
                    OpenSea
                  </Link>
                </Strong>
              </Text>
              . Our team is dedicated to furnishing top-tier tools tailored for
              creators, all available conveniently and safely within
              OpenSea&apos;s Creator Studio. We aim to be the most trusted and
              versatile tool for any crypto-curious creators who are looking to
              enter the world of web3 without needing to know its highly
              technical details.
            </Text>
            <br />
            <Text size="2">
              Outside of my current role, I am a lifelong learner with an
              interest in building interesting and useful things. I&apos;m a
              huge music fan, an amateur cook, a novice snowboarder, and
              sometimes I pretend to be fashionable.
            </Text>
            <br />
            <Flex
              direction={{ initial: "column", md: "row" }}
              align={{ initial: "center", md: "start" }}
            >
              <StandardButton href="/work">
                read about my work experience
              </StandardButton>
            </Flex>
            <Text size="2" className="mt-4">
              are you more oldschool? read on at
              <Flex
                direction={{ initial: "column", md: "row" }}
                align={{ initial: "center", md: "start" }}
              >
                <InvertedButton href="/MichaelCohenResume.pdf" className="mt-2">
                  my_resume_final_final_copy_NEW.pdf
                </InvertedButton>
              </Flex>
            </Text>
          </Flex>
        </Fade>
        <Fade
          bottom
          duration={1000}
          delay={1000}
          distance="30px"
          when={textRevealed}
        >
          {isMobile ? (
            <Flex
              style={{ overflow: "hidden" }}
              direction="column"
              justify="center"
              mb="4"
            >
              <Image
                src="/contact.jpeg"
                alt="Michael Profile image"
                style={{
                  height: "100%",
                  maxHeight: "300px",
                  maxWidth: "300px",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
                width={300}
                height={300}
                className="mr-2 rounded-6"
              />
            </Flex>
          ) : (
            <Flex style={{ overflow: "hidden" }}>
              <Image
                src="/contact.jpeg"
                alt="Michael Profile image"
                style={{
                  height: "100%",
                  maxHeight: "400px",
                  maxWidth: "400px",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
                width={400}
                height={400}
                className="mr-2 rounded-6"
              />
            </Flex>
          )}
        </Fade>
      </Flex>
    </>
  );
}
