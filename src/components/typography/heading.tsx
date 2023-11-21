import React from "react";

import { Heading as RHeading } from "@radix-ui/themes";

// TODO deprecate
export default function Heading({ children, className, ...props }: any) {
  return (
    <RHeading weight="light" className={className} {...props}>
      {children}
    </RHeading>
  );
}
