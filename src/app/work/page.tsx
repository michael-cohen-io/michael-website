import PageHeader from "@/components/layout/page-header";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

async function fetchWorkData() {
  const workData = await prisma.workEntry.findMany({
    orderBy: [{ startDate: "desc" }],
    include: {
      company: true,
    },
  });
  console.log(workData);
  return workData;
}

export default async function About() {
  const workData = await fetchWorkData();
  return (
    <>
      <PageHeader title="Work History" />
      <div className="mx-5 flex max-w-screen-xl items-start justify-between w-full my-4">
        {workData.map((work: any) => (
          <div key={work.id} className="z-10 w-full max-w-lg px-1 xl:px-0">
            <h1 className="text-center font-display font-light text-4xl">
              {work.company.name}
            </h1>
            <h2 className="text-center font-display font-light text-2xl">
              {work.team}
            </h2>
            {/* <h3 className="text-center font-display font-light text-xl">
              {work.startDate} - {work.endDate}
            </h3> */}
            <p className="text-center font-display font-light text-xl">
              {work.role}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
