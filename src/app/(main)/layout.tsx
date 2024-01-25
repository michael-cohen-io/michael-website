"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import { Suspense } from "react";

import PageHeader from "@/components/layout/page-header";
import { LoadingSpinner } from "@/components/loading";

export default function Layout({ children }: { children: any }) {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <div className="flex flex-col items-center justify-center">
          {segment && <PageHeader title={segment} />}
          <div className="mx-4 mt-8 flex max-w-screen-xl items-start w-full">
            <Suspense
              fallback={
                <div className="mx-5 flex max-w-screen-xl items-center justify-center w-full my-4">
                  <LoadingSpinner />
                </div>
              }
            >
              {children}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
