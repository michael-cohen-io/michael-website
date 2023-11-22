"use client";

import { useState } from "react";

import useMediaQuery from "@/lib/hooks/use-media-query";
import { SkillWithSection } from "@/lib/prisma";
import * as RTabs from "@radix-ui/react-tabs";
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  HoverCard,
  Inset,
  ScrollArea,
  Text,
} from "@radix-ui/themes";

import IconByName from "../icons/icons";

export type TabDictionary = {
  [key: string]: SkillWithSection[];
};

export type TabIdToName = {
  [key: string]: string;
};

function SkillCard(item: SkillWithSection) {
  const [hovered, setHovered] = useState(false);
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Card
          size="1"
          className="hover:shadow-3 cursor-pointer GalleryCard"
          variant="classic"
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          style={{
            maxWidth: "24vw",
            minWidth: "12vw",
          }}
        >
          <Flex align="center" justify="center" direction="column">
            <Inset clip="padding-box" side="top" pb="current" pt="current">
              <IconByName
                iconName={item.logo}
                color={hovered ? item.iconColor : ""}
                size="50"
              />
            </Inset>
            <Text
              as="p"
              size="1"
              align="center"
              style={{
                color: hovered ? item.iconColor : "",
              }}
            >
              {item.name}
            </Text>
          </Flex>
        </Card>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Flex gap="4">
          <Box>
            <Heading
              size="3"
              as="h3"
              style={{
                color: hovered ? item.iconColor : "",
              }}
            >
              {item.name}
            </Heading>
            <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
              {item.description}
            </Text>
          </Box>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}

function TabContent({
  tabValue,
  tabItems,
}: {
  tabValue: string;
  tabItems: SkillWithSection[];
}) {
  return (
    <RTabs.Content value={tabValue}>
      <Grid
        columns={{ initial: "2", md: "4" }}
        gap={{ initial: "2", md: "4" }}
        justify="between"
      >
        {tabItems.map((item) => (
          <SkillCard key={item.id} {...item} />
        ))}
      </Grid>
    </RTabs.Content>
  );
}

function DefaultTabTrigger({
  tabId,
  tabName,
}: {
  tabId: string;
  tabName: string;
}) {
  return (
    <RTabs.Trigger key={tabId} value={tabId} asChild>
      <Flex
        px={{ initial: "0", md: "4" }}
        className="bg-white h-[45px] flex-1 flex items-center justify-center leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-accent-color hover:focus:shadow-black data-[state=active]:text-accent-color data-[state=active]:font-bold outline-none cursor-pointer data-[state=active]:shadow-4 data-[state=active]:relative"
      >
        <Text size={{ initial: "1", md: "3" }}>{tabName.toLowerCase()}</Text>
      </Flex>
    </RTabs.Trigger>
  );
}

function MobileTabTrigger({
  tabId,
  tabName,
}: {
  tabId: string;
  tabName: string;
}) {
  return (
    <RTabs.Trigger key={tabId} value={tabId} asChild>
      <Flex
        direction="column"
        mx={{ initial: "0", md: "4" }}
        mb={{ initial: "2", md: "0" }}
        className="bg-white h-[10vh] justify-center select-none first:rounded-tl-md last:rounded-tr-md hover:text-accent-color data-[state=active]:border-r-8  data-[state=active]:text-accent-color data-[state=active]:font-bold outline-none data-[state=active]:relative"
      >
        <Text size={{ initial: "1", md: "3" }}>{tabName.toLowerCase()}</Text>
      </Flex>
    </RTabs.Trigger>
  );
}

export default function Tabs({
  tabIdToName,
  tabDictionary,
}: {
  tabIdToName: TabIdToName;
  tabDictionary: TabDictionary;
}) {
  const { isMobile } = useMediaQuery();
  return (
    <RTabs.Root
      className="flex min-w-[80vw] md:shadow-3 shadow-blackA2 min-h-[75vh] md:min-h-[70vh]"
      defaultValue={"0"}
      orientation="vertical"
    >
      <RTabs.List className="md:shrink-0 flex border-r border-slate6">
        <Flex
          direction="column"
          width="100%"
          className="min-w-[30vw] md:min-w-0"
        >
          {Object.keys(tabIdToName).map((tabId) =>
            isMobile ? (
              <MobileTabTrigger
                key={tabId}
                tabId={tabId}
                tabName={tabIdToName[tabId]}
              />
            ) : (
              <DefaultTabTrigger
                key={tabId}
                tabId={tabId}
                tabName={tabIdToName[tabId]}
              />
            ),
          )}
        </Flex>
      </RTabs.List>
      <ScrollArea
        scrollbars="vertical"
        style={{ height: `${isMobile ? "75vh" : "70vh"}` }}
      >
        <Flex
          px={{ md: "8" }}
          pl={{ initial: "4", md: "0" }}
          pt={{ md: "8" }}
          pb="2"
          justify="center"
        >
          {Object.keys(tabDictionary).map((tabId) => (
            <TabContent
              key={tabId}
              tabValue={tabId}
              tabItems={tabDictionary[tabId]}
            />
          ))}
        </Flex>
      </ScrollArea>
    </RTabs.Root>
  );
}
