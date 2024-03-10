"use client";

import { capitalize } from '@/lib/utils';
import { Flex, Heading } from '@radix-ui/themes';

export default function PageHeader({
  title,
  hidden = false,
}: {
  title?: string;
  hidden?: boolean;
}) {
  return title && !hidden ? (
    <>
      <Flex
        mt={{ xs: "0", md: "8" }}
        className={`${hidden ? "invisible" : ""}`}
      >
        <div className={`w-full px-1 xl:px-0 ${hidden ? "invisible" : ""}`}>
          <Heading className="text-center" weight="light" size="8">
            {capitalize(title)}
          </Heading>
        </div>
      </Flex>
    </>
  ) : null;
}
