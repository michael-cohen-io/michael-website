"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import React from "react";

import { MobileMenu, MobileMenuProvider } from "@/components/layout/mobile-nav";
import Heading from "@/components/typography/heading";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, Flex, IconButton, Link } from "@radix-ui/themes";

function NavLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Flex asChild display="flex" align="center" width="100%">
      <Button asChild variant={isActive ? "soft" : "ghost"} radius="full">
        <Link
          href={href}
          className={`rounded-6 link ${isActive ? "active" : ""}`}
        >
          <Heading
            size="3"
            align="center"
            color={isActive ? "blue" : "gray"}
            weight="medium"
          >
            {title}
          </Heading>
        </Link>
      </Button>
    </Flex>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  // TODO: doesnt do anything rn
  const { theme, setTheme } = useTheme();
  return (
    <ThemeProvider attribute="class">
      <MobileMenuProvider>
        <MobileMenu>
          <Flex direction="column">
            <Flex
              height="100%"
              width="100%"
              display={{ sm: "flex", md: "none" }}
              px="4"
              py="4"
              justify="between"
              align="center"
            >
              <Link href="/" className="flex items-center text-3xl">
                <Heading color="blue" size="7" weight="regular">
                  {"<MC>"}
                </Heading>
              </Link>
              <Flex display={{ md: "none" }} align="center" gap="4" pr="4">
                <IconButton
                  radius="full"
                  variant="soft"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setTheme(theme !== "light" ? "light" : "dark")}
                >
                  {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </IconButton>
                <IconButton
                  size="3"
                  variant="ghost"
                  radius="large"
                  // data-state={mobileMenu.open ? "open" : "closed"}
                  // onClick={() => mobileMenu.setOpen((open) => !open)}
                >
                  <HamburgerMenuIcon width="24" height="24" />
                </IconButton>
              </Flex>
            </Flex>
            <Flex
              align="start"
              direction="column"
              justify="between"
              gap="4"
              height="100%"
              width="100%"
              px="4"
            >
              <NavLink href="/" title="home" />
              <NavLink href="/about" title="about" />
              <NavLink href="/work" title="work" />
              <NavLink href="/skills" title="skills" />
              <NavLink href="/gallery" title="gallery" />
              <NavLink href="/contact" title="contact" />
              {/* <IconButton
                radius="full"
                variant="soft"
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setTheme(theme !== "light" ? "light" : "dark")}
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
              </IconButton> */}
            </Flex>
          </Flex>
        </MobileMenu>
        {children}
      </MobileMenuProvider>
    </ThemeProvider>
  );
}
