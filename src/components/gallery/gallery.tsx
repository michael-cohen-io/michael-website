import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { Grid, ScrollArea } from "@radix-ui/themes";

import { LoadingSpinner } from "../loading";
import GalleryItem, { NFT } from "./gallery-item";

const OS_API_BASE_URI = "https://api.opensea.io/api/v2/chain";
const OS_API_KEY = process.env.OS_API_KEY || "";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": OS_API_KEY,
  },
};

type NFTRequestResponse = {
  nfts: NFT[];
  next: string;
};
async function fetchOwnedNFTs(
  accountAddress: string,
  chain: string,
  page?: number,
): Promise<NFTRequestResponse> {
  if (!OS_API_KEY || OS_API_KEY === "") {
    throw new Error("OpenSea API key is not set");
  }
  const url = `${OS_API_BASE_URI}/${chain}/account/${accountAddress}/nfts?limit=20${
    page ? `&next=${page}` : ""
  }`;
  const res = await fetch(url, options);
  if (!res) {
    throw new Error("Failed to fetch owned NFTs", res);
  }
  return res.json();
}

const CardItemImage = ({ item }: { item: NFT }) => {
  return (
    <Image
      src={item.image_url}
      alt={item.collection}
      width={300}
      height={200}
      style={{
        width: "100%",
        height: 200,
        display: "block",
        objectFit: "cover",
        backgroundColor: "var(--gray-5)",
      }}
    />
  );
};

const DialogItemImage = ({
  item,
  itemOSLink,
}: {
  item: NFT;
  itemOSLink: string;
}) => {
  return (
    <Link href={itemOSLink}>
      <Image
        src={item.image_url}
        alt={item.collection}
        width={400}
        height={300}
        style={{
          width: "100%",
          height: 400,
          display: "block",
          objectFit: "cover",
          backgroundColor: "var(--gray-5)",
        }}
      />
    </Link>
  );
};

export default async function Gallery({
  accountAddress,
  chain,
}: {
  accountAddress: string;
  chain: string;
}) {
  const nftResults = await fetchOwnedNFTs(accountAddress, chain);
  const reversedNfts = nftResults.nfts.reverse();
  return (
    <ScrollArea scrollbars="vertical" style={{ height: "65vh" }}>
      <Grid columns="4" gap="2" justify="between">
        {reversedNfts.map((nft) => {
          const itemOSLink = `https://opensea.io/assets/${chain}/${nft.contract}/${nft.identifier}`;
          const cardImage = <CardItemImage item={nft} />;
          const dialogImage = (
            <DialogItemImage item={nft} itemOSLink={itemOSLink} />
          );
          return (
            <Suspense key={nft.identifier} fallback={<LoadingSpinner />}>
              <GalleryItem
                item={nft}
                itemOSLink={itemOSLink}
                chain={chain}
                cardImage={cardImage}
                dialogImage={dialogImage}
              />
            </Suspense>
          );
        })}
      </Grid>
    </ScrollArea>
  );
}
