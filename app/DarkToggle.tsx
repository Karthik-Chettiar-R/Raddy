"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function DarkToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
    const initial = saved ? saved === "dark" : prefersDark;
    setIsDark(initial);
    if (initial) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  if (isDark === null) {
    return (
      <Button aria-hidden className="opacity-0 pointer-events-none">
        Loading
      </Button>
    );
  }

  return (
    <Button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "Dark" : "Light"}
    </Button>
  );
}
