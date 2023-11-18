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
        className={`mx-5 flex max-w-screen-xl items-start justify-between w-full mt-20 ${
          hidden ? "invisible" : ""
        }`}
      >
        <div
          className={`z-10 w-full max-w-lg px-1 xl:px-0 ${
            hidden ? "invisible" : ""
          }`}
        >
          <h1 className="text-slate-500 font-light text-2xl">
            {capitalize(title)}
          </h1>
        </div>
      </div>
    </>
  ) : null;
}
