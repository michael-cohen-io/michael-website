"use client";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import { formatDate } from "@/lib/utils";

const TextWithLineBreaks = ({ text }: { text: string }) => {
  const lines = text.split("\\n");

  return (
    <>
      {lines.map((line, index) => (
        <>
          <p key={index} className="font-light text-xl whitespace-pre-line">
            {line}
          </p>
          <br />
        </>
      ))}
    </>
  );
};

function WorkDetailsModal({ workItem }: any) {
  return (
    <div className="flex flex-col w-full max-w-xl">
      <DialogTitle>
        <h3 className="font-light text-2xl">{workItem.company.name}</h3>
      </DialogTitle>
      <DialogContent dividers>
        <div className="flex mb-4 items-center justify-between w-full">
          <h4 className="font-light text-lg">{workItem.role}</h4>
          <DialogContentText align="right">
            <h5 className="font-light text-xl">
              {formatDate(workItem.startDate)} - {formatDate(workItem.endDate)}
            </h5>
          </DialogContentText>
        </div>
        <DialogContentText align="left">
          <TextWithLineBreaks text={workItem.description} />
        </DialogContentText>
      </DialogContent>
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
