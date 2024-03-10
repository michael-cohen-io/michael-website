"use client";

import Link from "next/link";
import Fade from "react-reveal/Fade";

import { InvertedButton, StandardButton } from "@/components/button/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Flex, Strong, Text } from "@radix-ui/themes";

export default function About({ startReveal}: { startReveal: boolean }) {
  return (
    <>
      <Flex
        align={{ initial: "center", md: "start" }}
        justify="between"
        className="max-w-screen-xl w-full"
      >
        <Fade
          top
          duration={1000}
          delay={500}
          distance="30px"
          when={startReveal}
        >
          <Flex
            direction="column"
            className="w-full px-1 xl:px-0 font-light text-sm"
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
                and a product builder,
              </Flex>
            </Text>
            <br />
            <Text size="2">
              I currently work as a Founding Engineer at {" "}
              <Text color="purple">
                <Strong>
                  <Link href="https://withclad.com/" className="hover:underline">
                    Clad
                  </Link>
                </Strong>
              </Text>
              . Our team is building a way for network operators and contractors to work better together, saving time and money when building out communications networks.
            </Text>
            <br />
            <Text size="2">
              Outside of my current role, I am a lifelong learner with an
              interest in building interesting, useful, and beautiful things. I&apos;m a
              huge music fan, an okay cook, a novice snowboarder, and
              sometimes I pretend to know how to dress.
            </Text>
            <br />
            <Flex
              direction={{ initial: "column", md: "row" }}
              align={{ md: "start" }}
            >
              <StandardButton href="/work">
                read about my work experience
              </StandardButton>
            </Flex>
            <Text size="2" className="mt-4">
              are you more oldschool? read on at
              <Flex
                direction={{ initial: "column", md: "row" }}
                align={{ md: "start" }}
              >
                <InvertedButton href="/MichaelCohenResume.pdf" className="mt-2">
                  my_resume_final_final_copy_NEW.pdf
                </InvertedButton>
              </Flex>
            </Text>
          </Flex>
        </Fade>
      </Flex>
    </>
  );
}
