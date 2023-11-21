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
  const url = `${OS_API_BASE_URI}/${chain}/account/${accountAddress}/nfts?limit=21${
    page ? `&next=${page}` : ""
  }`;
  const res = await fetch(url, options);
  if (!res) {
    throw new Error("Failed to fetch owned NFTs", res);
  }
  return res.json();
}

export default async function Gallery({
  accountAddress,
  chain,
}: {
  accountAddress: string;
  chain: string;
}) {
  const nftResults = await fetchOwnedNFTs(accountAddress, chain);
  return (
    <ScrollArea scrollbars="vertical" style={{ height: "65vh" }}>
      <Grid columns="5" gap="2" justify="between">
        {nftResults.nfts.map((nft) => (
          <Suspense key={nft.identifier} fallback={<LoadingSpinner />}>
            <GalleryItem item={nft} chain={chain} />
          </Suspense>
        ))}
      </Grid>
    </ScrollArea>
  );
}
