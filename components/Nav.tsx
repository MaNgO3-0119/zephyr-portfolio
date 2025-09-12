"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import SearchInput from "./SearchInput";

const links = [
  { href: "/", label: "首页" },
  { href: "/works", label: "作品" },
  { href: "/courses", label: "课程" },
  { href: "/blog", label: "博客" },
  { href: "/about", label: "关于" },
  { href: "/epk", label: "EPK" },
  { href: "/contact", label: "联系" },
  { href: "/bio", label: "Link-in-bio" }
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/50">
      <div className="container flex items-center gap-4 h-14 max-w-6xl">
        <Link href="/" className="font-semibold tracking-wide">珞三 Zephyr</Link>
        <nav className="hidden md:flex items-center gap-3 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={cn("px-2 py-1 rounded-md hover:bg-white/5",
                pathname === l.href && "bg-white/10")}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <SearchInput />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
