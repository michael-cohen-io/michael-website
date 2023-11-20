"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import useScroll from "@/lib/hooks/use-scroll";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, Flex, IconButton } from "@radix-ui/themes";

import Heading from "../typography/heading";

function NavLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Button variant="ghost" radius="full">
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
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
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
          align="center"
        >
          <Link href="/" className="flex items-center font-light text-3xl">
            <Heading color="blue" size="7">
              {"<MC>"}
            </Heading>
          </Link>
          <Flex gap="4" align="center">
            <NavLink href="/" title="home" />
            <NavLink href="/about" title="about" />
            <NavLink href="/work" title="work" />
            <NavLink href="/skills" title="skills" />
            <NavLink href="/projects" title="projects" />
            <NavLink href="/gallery" title="gallery" />
            <NavLink href="/contact" title="contact" />
            <IconButton
              radius="full"
              variant="soft"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setTheme(theme !== "light" ? "light" : "dark")}
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </Flex>
        </Flex>
      </div>
    </>
  );
}
