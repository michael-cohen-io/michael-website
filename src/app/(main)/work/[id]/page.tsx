import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import WorkDetails from "@/components/modal/work-detail";

async function fetchWorkItem(id: number) {
  const workItem = await prisma.workEntry.findUnique({
    where: { id: id },
    include: {
      company: true,
    },
  });
  return workItem;
}

export default async function WorkItemPage({
  params,
}: {
  params: { id: string };
}) {
  const idInt = parseInt(params.id);
  const response = await fetchWorkItem(idInt);

  if (!response) {
    notFound();
  }

  return (
    <>
      <WorkDetails workItem={response} />
    </>
  );
}
