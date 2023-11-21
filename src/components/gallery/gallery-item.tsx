import Image from "next/image";
import { Suspense } from "react";

import { Box, Card, Flex, Inset, Link, Text } from "@radix-ui/themes";

import { LoadingSpinner } from "../loading";

export type NFT = {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  metadata_url: string;
  created_at: string;
  updated_at: string;
  is_disabled: true;
  is_nsfw: true;
};

export default async function GalleryItem({
  item,
  chain,
}: {
  item: NFT;
  chain: string;
}) {
  if (!item || !item.image_url) {
    return <></>;
  }
  const itemOSLink = `https://opensea.io/assets/${chain}/${item.contract}/${item.identifier}`;
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Card size="2" style={{ width: "20vw" }}>
        <Inset clip="border-box" side="top" pb="current">
          <Link href={itemOSLink} asChild>
            <Image
              src={item.image_url}
              alt={item.collection}
              width={350}
              height={200}
              style={{
                width: "100%",
                height: 140,
                display: "block",
                objectFit: "cover",
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Link>
        </Inset>
        <Flex gap="4" align="center">
          <Box>
            <Link href={itemOSLink} size="3" weight="bold">
              {item.name}
            </Link>
            <Text as="div" color="gray" size="2">
              {item.collection} - {item.identifier}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Suspense>
  );
}
