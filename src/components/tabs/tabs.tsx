"use client";

import { useState } from "react";

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
          className="max-w-52 hover:shadow-3 cursor-pointer hover:text-accent-color"
          variant="classic"
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          <Flex align="center" justify="center" direction="column">
            <Inset clip="padding-box" side="top" pb="current" pt="current">
              <IconByName
                iconName={item.logo}
                color={hovered ? item.iconColor : ""}
                size="50"
              />
            </Inset>
            <Text as="p" size="1" align="center">
              {item.name}
            </Text>
          </Flex>
        </Card>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Flex gap="4">
          <Box>
            <Heading size="3" as="h3">
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
      <Grid columns="4" gap="4">
        {tabItems.map((item) => (
          <SkillCard key={item.id} {...item} />
        ))}
      </Grid>
    </RTabs.Content>
  );
}

export default function Tabs({
  tabIdToName,
  tabDictionary,
}: {
  tabIdToName: TabIdToName;
  tabDictionary: TabDictionary;
}) {
  return (
    <RTabs.Root
      className="flex min-w-[80vw] shadow-3 shadow-blackA2 min-h-[60vh]"
      defaultValue={"0"}
      orientation="vertical"
    >
      <RTabs.List className="shrink-0 flex border-r border-slate6">
        <Flex direction="column">
          {Object.keys(tabIdToName).map((tabId) => (
            <RTabs.Trigger
              key={tabId}
              value={tabId}
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-accent-color hover:focus:shadow-black data-[state=active]:text-accent-color data-[state=active]:font-bold outline-none cursor-default data-[state=active]:shadow-4 data-[state=active]:relative"
            >
              {tabIdToName[tabId]}
            </RTabs.Trigger>
          ))}
        </Flex>
      </RTabs.List>

      <Flex px="8" pt="8" pb="2" justify="center">
        {Object.keys(tabDictionary).map((tabId) => (
          <TabContent
            key={tabId}
            tabValue={tabId}
            tabItems={tabDictionary[tabId]}
          />
        ))}
      </Flex>
    </RTabs.Root>
  );
}
