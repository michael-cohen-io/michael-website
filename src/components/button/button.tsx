import Link from "next/link";
import React from "react";

import { Button } from "@radix-ui/themes";

interface ButtonProps {
  buttonStyle: "standard" | "inverted";
  children: React.ReactNode;
  className?: string;
  props?: any;
}

export function AButton({
  buttonStyle,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Button
      variant="surface"
      radius="full"
      className={`cta-btn ${
        buttonStyle == "standard" ? "cta-btn--standard" : "cta-btn--inverted"
      } ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export function LinkButton({
  href,
  children,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href}>
      <AButton className={className} {...props}>
        {children}
      </AButton>
    </Link>
  );
}

export const StandardButton = (props: any) => (
  <LinkButton {...props} buttonStyle="standard" />
);

export const InvertedButton = (props: any) => (
  <LinkButton {...props} buttonStyle="inverted" />
);
