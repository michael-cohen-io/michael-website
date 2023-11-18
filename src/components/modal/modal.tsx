"use client";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import Dialog from "@mui/material/Dialog";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog({
  onClose,
  open,
  children,
}: {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
    >
      {children}
    </Dialog>
  );
}

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  return (
    <SimpleDialog onClose={handleClose} open={open}>
      {children}
    </SimpleDialog>
  );
}
