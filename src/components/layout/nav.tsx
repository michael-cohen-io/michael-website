"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import useScroll from "@/lib/hooks/use-scroll";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Flex, IconButton, Tooltip } from "@radix-ui/themes";

import ThemeButton from "../button/theme-button";
import Heading from "../typography/heading";
import { useMobileMenuContext } from "./mobile-nav";

function NavLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Button variant="ghost" radius="full">
      <Link href={href} className={`link ${isActive ? "active" : ""}`}>
        <Heading size="3" align="center" color={isActive ? "pink" : "gray"}>
          {title}
        </Heading>
      </Link>
    </Button>
  );
}

export default function Nav() {
  const scrolled = useScroll(50);
  const mobileMenu = useMobileMenuContext();

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        {/* Desktop Menu */}
        <Flex
          height="max-content"
          width="100%"
          display={{ initial: "none", md: "flex" }}
          mx="9"
          px="6"
          py="4"
          justify="between"
          align="center"
        >
          <Link
            href="/"
            className="flex items-center font-light text-3xl select-none"
          >
            <Heading color="pink" size="7">
              {"<MC>"}
            </Heading>
          </Link>

          <Flex
            display={{ initial: "none", md: "flex" }}
            gap="4"
            align="center"
          >
            <NavLink href="/" title="home" />
            <NavLink href="/about" title="about" />
            <NavLink href="/work" title="work" />
            <NavLink href="/skills" title="skills" />
            <NavLink href="/gallery" title="gallery" />
            <NavLink href="/contact" title="contact" />
            <ThemeButton />
          </Flex>
        </Flex>
        {/* Mobile Menu */}
        <Flex
          height="max-content"
          width="100%"
          display={{ initial: "flex", md: "none" }}
          px="4"
          py="4"
          align="center"
          justify="between"
        >
          <Link href="/" className="flex items-center text-3xl select-none">
            <Heading color="pink" size="7" weight="regular">
              {"<MC>"}
            </Heading>
          </Link>
          <Flex display={{ md: "none" }} align="center" gap="4" pr="4">
            <ThemeButton />
            <Tooltip content="Navigation">
              <IconButton
                size="3"
                variant="ghost"
                radius="large"
                data-state={mobileMenu.open ? "open" : "closed"}
                onClick={() => mobileMenu.setOpen((open) => !open)}
              >
                <HamburgerMenuIcon width="24" height="24" />
              </IconButton>
            </Tooltip>
          </Flex>
        </Flex>
      </div>
    </>
  );
}
