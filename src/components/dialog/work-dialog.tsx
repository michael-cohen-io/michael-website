"use client";

import React from "react";

import { WorkWithCompany } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";

const TextWithLineBreaks = ({
  text,
  textStyle,
}: {
  text: string;
  textStyle: string;
}) => {
  const lines = text.split("\\n");

  return (
    <>
      {lines.map((line, index) => (
        <>
          <p key={index} className={`${textStyle} whitespace-pre-line`}>
            {line}
          </p>
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
          <Dialog.Content className="DialogContent bg-slate-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[80vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg pt-4 px-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0">
              <div className="flex flex-col">
                <h2 className="font-light text-xl">{workItem.company.name}</h2>
                <div className="flex mb-4 items-center justify-between w-full">
                  <h4 className="font-light text-md">{workItem.role}</h4>
                  <h5 className="font-light text-sm">
                    {formatDate(workItem.startDate)} -{" "}
                    {formatDate(workItem.endDate)}
                  </h5>
                </div>
              </div>
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              <TextWithLineBreaks
                text={workItem.description}
                textStyle="font-extralight text-sm"
              />
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
