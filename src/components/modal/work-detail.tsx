"use client";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import { useRouter } from "next/navigation";

function WorkDetailsModal({ workItem }: any) {
  return (
    <>
      <DialogTitle>
        <h2 className="text-xl">{workItem.company.name}</h2>
      </DialogTitle>
      <div className="flex flex-col justify-center">
        <div className="mr-auto">
          <h5 className="text-base">{workItem.role}</h5>
        </div>
        <div>
          <DialogContentText align="right">
            {workItem.startDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}{" "}
            -{" "}
            {workItem.endDate
              ? workItem.endDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })
              : "Present"}
          </DialogContentText>
        </div>
      </div>
    </>
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
            {workItem.startDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}{" "}
            -{" "}
            {workItem.endDate
              ? workItem.endDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })
              : "Present"}
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
