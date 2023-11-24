import MarkDownTextWithLinebreaks from "@/components/typography/markdown";
import prisma from "@/lib/prisma";

import WorkTimeline from "../../../components/timeline/timeline";

async function fetchWorkData() {
  const workData = await prisma.workEntry.findMany({
    orderBy: [{ startDate: "desc" }],
    include: {
      company: true,
    },
  });
  return workData;
}

function workItemDescriptionComponent(workItem: any) {
  return <MarkDownTextWithLinebreaks text={workItem.description} />;
}

export default async function WorkPage() {
  const workData = await fetchWorkData();

  // maps each workData item's ID to its description component
  const workItemDescriptionComponentMap = workData.reduce(
    (acc, workItem) => ({
      ...acc,
      [workItem.id]: workItemDescriptionComponent(workItem),
    }),
    {},
  );
  return (
    <>
      <div className="mx-5 flex max-w-screen-xl items-start justify-between w-full my-4">
        <WorkTimeline
          workData={workData}
          workItemDescriptionComponentMap={workItemDescriptionComponentMap}
        />
      </div>
    </>
  );
}
