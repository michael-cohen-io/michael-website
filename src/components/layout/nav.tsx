"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import useScroll from "@/lib/hooks/use-scroll";
import { isDev } from "@/lib/utils";
import { Button, Flex } from "@radix-ui/themes";

import Heading from "../typography/heading";

function NavLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Button variant="ghost" radius="medium">
      <Link href={href} className={`link ${isActive ? "active" : ""}`}>
        <Heading size="3" align="center" color={isActive ? "blue" : "gray"}>
          {title}
        </Heading>
      </Link>
    </Button>
  );
}

export default function Nav() {
  const scrolled = useScroll(50);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl w-[85vw]"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <Flex
          height="max-content"
          width="100%"
          mx="9"
          px="6"
          py="4"
          justify="between"
        >
          <Link href="/" className="flex items-center font-light text-3xl">
            <Heading color="blue" size="7">
              {"<MC>"}
            </Heading>
          </Link>
          <Flex gap="4">
            <NavLink href="/" title="home" />
            <NavLink href="/about" title="about" />
            <NavLink href="/work" title="work" />
            <NavLink href="/skills" title="skills" />
            <NavLink href="/projects" title="projects" />
            <NavLink href="/gallery" title="gallery" />
            <NavLink href="/contact" title="contact" />
            {isDev() && (
              <Button
                variant="surface"
                onClick={() => setTheme(theme !== "light" ? "light" : "dark")}
              >
                {theme}
              </Button>
            )}
          </Flex>
        </Flex>
      </div>
    </>
  );
}
