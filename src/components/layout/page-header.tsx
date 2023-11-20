"use client";

import { capitalize } from "@/lib/utils";

export default function PageHeader({
  title,
  hidden = false,
}: {
  title?: string;
  hidden?: boolean;
}) {
  return title ? (
    <>
      <div
        className={`mx-5 flex max-w-screen-xl items-center justify-between w-full mt-8 ${
          hidden ? "invisible" : ""
        }`}
      >
        <div className={`w-full px-1 xl:px-0 ${hidden ? "invisible" : ""}`}>
          <h1 className="text-center font-light text-2xl">
            {capitalize(title)}
          </h1>
        </div>
      </div>
    </>
  ) : null;
}
