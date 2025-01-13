"use client"
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function ThemeSwitch() {
  return <Button
  variant="ghost"
  size="icon"
  onClick={() => {
    document.documentElement?.classList.toggle("dark");
  }}
  className="rounded-full"
>
  <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-180 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
  <span className="sr-only">Toggle theme</span>
</Button>
}