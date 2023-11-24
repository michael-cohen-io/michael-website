import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Suspense } from "react";

import { Text } from "@radix-ui/themes";

const components = {
  p: (props: any) => <Text>{props.children}</Text>,
  a: (props: any) => (
    <Link {...props} className="text-accent-color hover:underline">
      {props.children}
    </Link>
  ),
};

export default async function MarkDownTextWithLinebreaks(props: {
  text: string;
}) {
  const { text } = props;
  if (!text) return null;
  const lines = text.split("\\n");
  return (
    <>
      {lines.map((line) => (
        <>
          <Suspense fallback={<>Loading...</>}>
            <MDXRemote source={line} components={{ ...components }} />
          </Suspense>
          <br />
        </>
      ))}
    </>
  );
}
