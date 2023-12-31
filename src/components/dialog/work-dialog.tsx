"use client";

import React from "react";

import { WorkWithCompany } from "@/lib/prisma";
import { formatDate, shortRole } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Flex, Heading, Separator, Strong } from "@radix-ui/themes";

export default function WorkDialog({
  workItem,
  workItemDescriptionComponent,
}: {
  workItem: WorkWithCompany;
  workItemDescriptionComponent: React.ReactNode;
}) {
  return (
    <>
      <Dialog.Trigger asChild>
        <div>
          <Heading
            className="vertical-timeline-element-title"
            size="4"
            weight="light"
          >
            <Strong>{workItem.company.name}</Strong> |{" "}
            {shortRole(workItem.role)}
          </Heading>
          <Heading
            className="vertical-timeline-element-subtitle"
            size="3"
            weight="light"
          >
            {workItem.team}
          </Heading>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay">
          <Dialog.Content className="DialogContent bg-mauve-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[80vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] focus:outline-none">
            <Dialog.Title
              style={{
                backgroundColor: workItem.iconColor || "",
              }}
              className={`pt-6 px-8`}
            >
              <Flex direction="column" style={{ color: "#fff" }}>
                <Heading size="4" as="h1">
                  {workItem.company.name}
                </Heading>
                <Flex className="flex mb-4 items-center justify-between w-full">
                  <Heading size="3" as="h2">
                    {workItem.team}
                  </Heading>
                  <Heading size="2" as="h2">
                    {formatDate(workItem.startDate)} -{" "}
                    {formatDate(workItem.endDate)}
                  </Heading>
                </Flex>
              </Flex>
            </Dialog.Title>
            <Separator my="1" size="4" />
            <Dialog.Description>
              <Heading
                size="2"
                as="h2"
                weight="medium"
                className="mt-[10px] mx-8"
              >
                {workItem.role}
              </Heading>
              <Flex
                direction="column"
                align="start"
                justify="start"
                className="mt-[10px] mx-8 mb-5 leading-normal"
              >
                {workItemDescriptionComponent}
              </Flex>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </>
  );
}
