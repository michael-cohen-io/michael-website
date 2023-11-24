import { Text } from "@radix-ui/themes";

export default function TextWithLineBreaks({ text }: { text: string }) {
  console.log(text);
  const lines = text.split("\\n");

  return (
    <>
      {lines.map((line, index) => (
        <>
          <Text
            as="p"
            className="text-sm"
            key={index}
            size="1"
            weight="light"
            color="gray"
          >
            {line}
          </Text>
          <br />
        </>
      ))}
    </>
  );
}
