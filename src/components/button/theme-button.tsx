"use client";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      radius="full"
      variant="soft"
      className="text-gray-500 hover:text-gray-700"
      onClick={() => setTheme(theme !== "light" ? "light" : "dark")}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
