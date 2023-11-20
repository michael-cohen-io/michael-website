"use client";

import { SkillWithSection } from "@/lib/prisma";
import * as RTabs from "@radix-ui/react-tabs";
import { Box, Card, Flex, Grid, Inset, Strong, Text } from "@radix-ui/themes";

import IconByName from "../icons/icons";

export type TabDictionary = {
  [key: string]: SkillWithSection[];
};

export type TabIdToName = {
  [key: string]: string;
};

function TabContent({
  tabValue,
  tabItems,
}: {
  tabValue: string;
  tabItems: SkillWithSection[];
}) {
  return (
    <RTabs.Content value={tabValue}>
      <Grid columns="3" gap="3">
        {tabItems.map((item) => (
          <Card
            key={item.id}
            size="1"
            className="w-52 hover:shadow-3 cursor-pointer hover:text-accent-color"
            variant="classic"
          >
            <Flex align="center" justify="center" direction="column">
              <Inset clip="padding-box" side="top" pb="current" pt="current">
                <IconByName
                  iconName={item.logo}
                  color={item.iconColor}
                  size="50"
                />
              </Inset>
              <Text as="p" size="1" align="center">
                {item.name}
              </Text>
            </Flex>
          </Card>
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
      className="flex w-[85vw] shadow-3 shadow-blackA2 min-h-[60vh]"
      defaultValue={"0"}
      orientation="vertical"
    >
      <RTabs.List className="shrink-0 flex border-r border-slate6">
        <Flex direction="column">
          {Object.keys(tabIdToName).map((tabId) => (
            <RTabs.Trigger
              key={tabId}
              value={tabId}
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-accent-color hover:underline hover:underline-offset-4 hover:focus:shadow-black data-[state=active]:text-accent-color data-[state=active]:font-bold outline-none cursor-default data-[state=active]:shadow-4 data-[state=active]:relative"
            >
              {tabIdToName[tabId]}
            </RTabs.Trigger>
          ))}
        </Flex>
      </RTabs.List>

      <Box px="4" pt="3" pb="2">
        {Object.keys(tabDictionary).map((tabId) => (
          <TabContent
            key={tabId}
            tabValue={tabId}
            tabItems={tabDictionary[tabId]}
          />
        ))}
      </Box>
    </RTabs.Root>
  );
}
