"use client";

import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import { useState } from "react";

export default function Home() {
  const [homeDisplayed, setHomeDisplayed] = useState(false);
  return (
    <div className="flex flex-col gap-16 py-16">
      <Hero setHomeDisplayed={setHomeDisplayed} />
      <About startReveal={homeDisplayed} />
    </div>
  );
}
