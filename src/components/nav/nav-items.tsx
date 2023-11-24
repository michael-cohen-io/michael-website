import React from "react";

export default function NavItems({
  NavLinkComponent,
}: {
  NavLinkComponent: React.ComponentType<{ href: string; title: string }>;
}) {
  return (
    <>
      <NavLinkComponent href="/" title="home" />
      <NavLinkComponent href="/about" title="about" />
      <NavLinkComponent href="/work" title="work" />
      <NavLinkComponent href="/skills" title="skills" />
      <NavLinkComponent href="/gallery" title="gallery" />
      <NavLinkComponent href="/contact" title="contact" />
    </>
  );
}
