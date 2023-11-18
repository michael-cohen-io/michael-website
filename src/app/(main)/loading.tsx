"use client";

import { LoadingSpinner } from "@/components/loading";

export default function Loading() {
  <div className="mx-5 flex max-w-screen-xl items-start justify-between w-full my-4">
    <h1 className="text-2xl font-bold">Loading...</h1>
    <LoadingSpinner />
  </div>;
}
