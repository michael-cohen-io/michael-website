import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import WorkDetails from "@/components/modal/work-detail";
import Card from "@mui/material/Card";

async function fetchWorkItem(id: number) {
  const workItem = await prisma.workEntry.findUnique({
    where: { id: id },
    include: {
      company: true,
    },
  });
  return workItem;
}

export async function generateStaticParams() {
  const workData = await prisma.workEntry.findMany({
    orderBy: [{ startDate: "desc" }],
    select: {
      id: true,
    },
  });
  return workData.map((work) => ({
    id: work.id.toString(),
  }));
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
    <Card>
      <WorkDetails workItem={response} />
    </Card>
  );
}
