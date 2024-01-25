import { Suspense } from "react";

import { LoadingSpinner } from "../loading";
import Gallery from "./gallery";
import GalleryItem from "./gallery-item";
import { toImageSrc } from "@/lib/utils";
import { keyBy } from "lodash-es";
import { NFTMedia, NFTRequestResponse } from "@/lib/types";
import { CardItemMedia, DialogItemMedia } from "./gallery-item-media";

const OS_API_BASE_URI = "https://api.opensea.io/api/v2/chain";
const OS_API_KEY = process.env.OS_API_KEY || "";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": OS_API_KEY,
  },
};


async function fetchOwnedNFTs(accountAddress: string, chain: string, page?: number): Promise<NFTRequestResponse> {
  if (!OS_API_KEY || OS_API_KEY === "") {
    throw new Error("OpenSea API key is not set");
  }
  const url = `${OS_API_BASE_URI}/${chain}/account/${accountAddress}/nfts?limit=20${page ? `&next=${page}` : ""}`;
  const res = await fetch(url, options);
  if (!res) {
    throw new Error("Failed to fetch owned NFTs", res);
  }
  return res.json();
}


async function fetchNFTMedia(mediaUrls: string[]): Promise<NFTMedia[]> {
  const media: NFTMedia[] = [];
  for (const url of mediaUrls) {
    const src = toImageSrc(url);
    const res = await fetch(src, { method: "HEAD" });
    if (!res) {
      throw new Error("Failed to fetch NFT media", res);
    }
    const contentType = res.headers.get("content-type");
    if (!contentType) {
      throw new Error(`Failed to fetch content type for media: ${src}`);
    }
    media.push({ src, contentType });
  }
  return media;
}


export default async function NftGallery({ accountAddress, chain }: { accountAddress: string; chain: string }) {
  const nftResults = await fetchOwnedNFTs(accountAddress, chain);
  const nftMedia = await fetchNFTMedia(nftResults.nfts.map((nft) => nft.image_url));
  const nftMediaMap = keyBy(nftMedia, "src");
  const reversedNfts = nftResults.nfts.reverse();
  return (
    <Gallery>
      {reversedNfts.map((nft) => {
        const itemOSLink = `https://opensea.io/assets/${chain}/${nft.contract}/${nft.identifier}`;
        const cardImage = <CardItemMedia item={nft} media={nftMediaMap[nft.image_url]} />;
        const dialogImage = <DialogItemMedia item={nft} itemOSLink={itemOSLink} media={nftMediaMap[nft.image_url]} />;
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
    </Gallery>
  );
}
