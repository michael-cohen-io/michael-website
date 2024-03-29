"use client";
import React, { Suspense } from "react";

import useMediaQuery from "@/lib/hooks/use-media-query";
import { shorten } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Box, Card, Flex, Heading, Inset, Link, Text } from "@radix-ui/themes";

import { LoadingSpinner } from "../loading";
import TextWithLineBreaks from "../typography/text";
import { NFT } from "@/lib/types";

const GalleryItemDialog = ({
  item,
  itemOSLink,
  dialogImage,
}: {
  item: NFT;
  itemOSLink: string;
  dialogImage: React.ReactNode;
}) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay">
        <Dialog.Content className="DialogContent data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] focus:outline-none">
          {dialogImage}
          <Dialog.Title className={`pt-6 px-8`}>
            <Flex direction="column">
              <Heading size="4" as="h1" weight="bold">
                {item.name}
              </Heading>
              <Flex className="flex mb-4 items-center justify-between w-full">
                <Link
                  href={itemOSLink}
                  className="cursor-pointer text-accent-color"
                >
                  <Heading size="3" as="h2">
                    {item.collection}
                  </Heading>
                </Link>
              </Flex>
            </Flex>
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mx-8 mb-5 leading-normal">
            <TextWithLineBreaks text={item.description} />
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};

export default function GalleryItem({
  item,
  itemOSLink,
  cardImage,
  dialogImage,
}: {
  item: NFT;
  itemOSLink: string;
  chain: string;
  cardImage: React.ReactNode;
  dialogImage: React.ReactNode;
}) {
  const { isMobile } = useMediaQuery();
  if (!item || !item.image_url) {
    return <></>;
  }

  const tokenIdentification = `${item.collection} - ${item.identifier}`;
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dialog.Root>
        <Dialog.Trigger>
          <Card
            style={{ width: `${isMobile ? "40vw" : "20vw"}`, height: `${isMobile ? "75vw" : "auto"}` }}
            className="GalleryCard outline-none"
          >
            <Inset clip="border-box" side="top" pb="current">
              {cardImage}
            </Inset>
            <Flex gap="4" align="center">
              <Box>
                <Text size="3" weight="bold">
                  {shorten(item.name ? item.name : tokenIdentification, isMobile? 10 : 20)}
                </Text>
                <Text as="div" color="gray" size="2">
                  {shorten(item.name ? tokenIdentification : "OpenSea", isMobile? 20 : 25)}
                </Text>
              </Box>
            </Flex>
          </Card>
        </Dialog.Trigger>
        <GalleryItemDialog
          item={item}
          dialogImage={dialogImage}
          itemOSLink={itemOSLink}
        />
      </Dialog.Root>
    </Suspense>
  );
}
