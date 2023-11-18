import Link from "next/link";
import React from "react";

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-5 flex max-w-screen-xl items-center justify-center w-full my-4">
        {props.children}
      </div>
      {props.modal}
    </>
  );
}
