import Link from "next/link";
import React from "react";

interface ButtonProps {
  buttonStyle: "standard" | "inverted";
  children: React.ReactNode;
  className?: string;
  props?: any;
}

export function Button({
  buttonStyle,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <span
      className={`cta-btn ${
        buttonStyle == "standard" ? "cta-btn--standard" : "cta-btn--inverted"
      } ${className}`}
      {...props}
    >
      {children}
    </span>
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
      <Button className={className} {...props}>
        {children}
      </Button>
    </Link>
  );
}

export const StandardButton = (props: any) => (
  <LinkButton {...props} buttonStyle="standard" />
);

export const InvertedButton = (props: any) => (
  <LinkButton {...props} buttonStyle="inverted" />
);
