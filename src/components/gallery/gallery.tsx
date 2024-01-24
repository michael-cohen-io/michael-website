"use client";

import React from "react";

import useMediaQuery from "@/lib/hooks/use-media-query";
import { Grid, ScrollArea } from "@radix-ui/themes";

export default function Gallery({ children }: { children?: React.ReactNode }) {
  const { isMobile } = useMediaQuery();
  return (
    <ScrollArea
      scrollbars="vertical"
      style={{ height: `${isMobile ? "75vh" : "70vh"}` }}
    >
      <Grid columns={{ initial: "2", md: "4" }} >
        {children}
      </Grid>
    </ScrollArea>
  );
}
