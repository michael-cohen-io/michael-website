"use client";

import { capitalize } from "@/lib/utils";
import { Flex } from "@radix-ui/themes";

import Heading from "../typography/heading";

export default function PageHeader({
  title,
  hidden = false,
}: {
  title?: string;
  hidden?: boolean;
}) {
  return title ? (
    <>
      <Flex mt="8" className={`${hidden ? "invisible" : ""}`}>
        <div className={`w-full px-1 xl:px-0 ${hidden ? "invisible" : ""}`}>
          <Heading className="text-center font-light" size="8">
            {capitalize(title)}
          </Heading>
        </div>
      </Flex>
    </>
  ) : null;
}
