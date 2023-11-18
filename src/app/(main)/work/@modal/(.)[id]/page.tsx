import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import Modal from "@/components/modal/modal";
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

export default async function WorkItemModalPage({
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
    <Modal>
      <WorkDetails workItem={response} isModal />
    </Modal>
  );
}
