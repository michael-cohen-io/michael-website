import { Text } from "@radix-ui/themes";

export function TextWithLineBreaks({ text }: { text: string }) {
  const lines = text.split("\\n");

  return (
    <>
      {lines.map((line, index) => (
        <>
          <Text as="p" className="text-sm" key={index} size="1" weight="light">
            {line}
          </Text>
          <br />
        </>
      ))}
    </>
  );
}
