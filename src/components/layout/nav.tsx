"use client";

import useScroll from "@/lib/hooks/use-scroll";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function NavLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  console.log(pathname, href, isActive);
  return (
    <Link href={href} className={`link ${isActive ? "active" : ""}`}>
      {/* TODO figure this shit out */}
      <p
        className={`${
          isActive ? "font-thick text-accent-color" : ""
        } text-lg mr-5`}
      >
        {title}
      </p>
    </Link>
  );
}

export default function Nav() {
  const scrolled = useScroll(50);
  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.svg"
              alt="Michael logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p className="ml-3 text-accent-color">Michael Cohen</p>
          </Link>
          <div className="flex justify-between">
            <NavLink href="/" title="home" />
            <NavLink href="/about" title="about" />
            <NavLink href="/work" title="work" />
            <NavLink href="/skills" title="skills" />
            <NavLink href="/projects" title="projects" />
            <NavLink href="/gallery" title="gallery" />
            <NavLink href="/contact" title="contact" />
          </div>
        </div>
      </div>
    </>
  );
}
