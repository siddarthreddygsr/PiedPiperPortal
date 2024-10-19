"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import MenuIcon from "@/components/icons/menu";
import SunIcon from "@/components/icons/sun";
import MoonIcon from "@/components/icons/moon";
import CompanyIcon from "@/components/icons/companylogo";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full shadow-sm bg-[var(--accent-foreground-color)]/10 backdropBlur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center flex-1">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold text-foreground"
            prefetch={false}
          >
            <CompanyIcon className="h-6 w-fit" />
          </Link>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-foreground"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-foreground"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-foreground"
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 w-max items-center justify-center rounded-full bg-[var(--accent-color)] px-4 py-2 text-sm font-medium text-accent-foreground shadow"
            prefetch={false}
          >
            Try Now
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" onClick={toggleTheme}>
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 bg-[var(--accent-foreground-color)]"
            >
              <div className="grid gap-4 p-6">
                <Link
                  href="#"
                  className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-foreground"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-foreground"
                  prefetch={false}
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-foreground"
                  prefetch={false}
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 w-max items-center justify-center rounded-full bg-[var(--accent-color)] px-4 py-2 text-sm font-medium text-accent-foreground shadow"
                  prefetch={false}
                >
                  Try Now
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}