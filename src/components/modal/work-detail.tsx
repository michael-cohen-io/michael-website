"use client";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import { formatDate } from "@/lib/utils";

function WorkDetailsModal({ workItem }: any) {
  return (
    <div className="flex justify-center">
      <DialogTitle>
        <h2 className="text-xl">{workItem.company.name}</h2>
      </DialogTitle>
      <div className="flex flex-col justify-center">
        <div className="mr-auto">
          <h5 className="text-base">{workItem.role}</h5>
        </div>
        <div>
          <DialogContentText align="right">
            {formatDate(workItem.startDate)} - {formatDate(workItem.endDate)}
          </DialogContentText>
        </div>
      </div>
    </div>
  );
}

function WorkDetailsCard({ workItem }: any) {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="mr-auto">
          <h2 className="text-xl">{workItem.company.name}</h2>
          <h5 className="text-base">{workItem.role}</h5>
        </div>
        <div>
          <p className="text-sm">
            {formatDate(workItem.startDate)} - {formatDate(workItem.endDate)}
          </p>
        </div>
      </div>
    </>
  );
}

export default function WorkDetails({ workItem, isModal }: any) {
  return isModal
    ? WorkDetailsModal({ workItem })
    : WorkDetailsCard({ workItem });
}
