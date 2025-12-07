"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import {
  Sun,
  Moon,
  // Laptop
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the theme toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    // Use setTimeout to defer the state update to the next tick
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <Button
        variant="ghost"
        className="w-10 rounded-full"
        aria-label="Toggle Theme"
      >
        <div className="size-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      className="w-10 rounded-full hover:bg-slate-800/50 dark:hover:bg-slate-700/50"
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="size-5 text-yellow-400" />
      ) : (
        <Moon className="size-5 text-white" />
      )}
    </Button>
  );
}
