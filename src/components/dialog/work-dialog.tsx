"use client";

import React from "react";

import { WorkWithCompany } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Flex, Text } from "@radix-ui/themes";

import Heading from "../typography/heading";

const TextWithLineBreaks = ({ text }: { text: string }) => {
  const lines = text.split("\\n");

  return (
    <>
      {lines.map((line, index) => (
        <>
          <Text as="p" className="text-sm" key={index} size="1" weight="light">
            {line}
          </Text>
          <br />
        </>
      ))}
    </>
  );
};

export default function WorkDialog({
  workItem,
}: {
  workItem: WorkWithCompany;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div>
          <h2 className="vertical-timeline-element-title">
            {workItem.company.name} | {workItem.role}
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            {workItem.team}
          </h3>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay">
          <Dialog.Content className="DialogContent rounded-6 bg-slate-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[80vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg pt-4 px-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0">
              <Flex direction="column">
                <Heading size="4" as="h1">
                  {workItem.company.name}
                </Heading>
                <Flex className="flex mb-4 items-center justify-between w-full">
                  <Heading size="3" as="h2">
                    {workItem.role}
                  </Heading>
                  <Heading size="2" as="h2">
                    {formatDate(workItem.startDate)} -{" "}
                    {formatDate(workItem.endDate)}
                  </Heading>
                </Flex>
              </Flex>
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 leading-normal">
              <TextWithLineBreaks text={workItem.description} />
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
