"use client";

import React from "react";

import useMediaQuery from "@/lib/hooks/use-media-query";
import { Grid, ScrollArea } from "@radix-ui/themes";

export default function Gallery({ children }: { children?: React.ReactNode }) {
  const { isMobile } = useMediaQuery();
  return (
    <ScrollArea
      scrollbars="vertical"
      // TODO figure out mobile
      style={{ height: `${isMobile ? "75vh" : "70vh"}`, width: `${isMobile? "70vw": "85vw"}` }}
    >
      <Grid columns={{ initial: "2", md: "4" }} gapX="0" gapY="4" pl="2" pt="2" justify="between">
        {children}
      </Grid>
    </ScrollArea>
  );
}
