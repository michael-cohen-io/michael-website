import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import WorkTimeline from "./timeline";

async function fetchWorkData() {
  const workData = await prisma.workEntry.findMany({
    orderBy: [{ startDate: "desc" }],
    include: {
      company: true,
    },
  });
  return workData;
}

export default async function WorkPage() {
  const workData = await fetchWorkData();
  return (
    <>
      <div className="mx-5 flex max-w-screen-xl items-start justify-between w-full my-4">
        <WorkTimeline workData={workData} />
      </div>
    </>
  );
}
