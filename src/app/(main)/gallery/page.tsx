import { Suspense } from "react";

import NftGallery from "@/components/gallery/nft-gallery";
import { LoadingSpinner } from "@/components/loading";
import { Heading } from "@radix-ui/themes";

export default function GalleryPage() {
  return (
    <>
      <div className="z-10 w-full max-w-screen-xl px-1 xl:px-0">
        <Heading className="text-center" weight="light" size="4">
          My NFT Collection
        </Heading>
        <Heading className="text-center" weight="light" size="1" mb="2">
          (honestly, just trying to play with different UX lol)
        </Heading>
        <Suspense
          fallback={
            <div className="mx-5 flex max-w-screen-xl items-center justify-center w-full my-4">
              <LoadingSpinner />
            </div>
          }
        >
          <NftGallery
            accountAddress="0xb9720BE63Ea8896956A06d2dEd491De125fD705E"
            chain="ethereum"
          />
        </Suspense>
      </div>
    </>
  );
}
