import Link from "next/link";

import { Strong, Text } from "@radix-ui/themes";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <Text className="text-gray-500" weight="light">
        Built with 🤍 by{" "}
        <Strong className="text-accent-color underline-offset-4 transition-colors hover:underline">
          <Link
            href="https://twitter.com/pwincessmichael"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michael Cohen
          </Link>
        </Strong>
      </Text>
    </div>
  );
}
