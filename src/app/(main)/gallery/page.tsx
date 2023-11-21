import { Suspense } from "react";

import Gallery from "@/components/gallery/gallery";
import { LoadingSpinner } from "@/components/loading";

export default function GalleryPage() {
  return (
    <>
      <div className="z-10 w-full max-w-screen-xl px-1 xl:px-0">
        <Suspense
          fallback={
            <div className="mx-5 flex max-w-screen-xl items-center justify-center w-full my-4">
              <LoadingSpinner />
            </div>
          }
        >
          <Gallery
            accountAddress="0xb9720BE63Ea8896956A06d2dEd491De125fD705E"
            chain="ethereum"
          />
        </Suspense>
      </div>
    </>
  );
}
