"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const [q, setQ] = useState("");
  const router = useRouter();
  return (
    <form onSubmit={(e) => { e.preventDefault(); if (q.trim()) router.push(`/search?q=${encodeURIComponent(q)}`); }}
          className="hidden md:flex items-center gap-2">
      <input
        className="px-3 py-1.5 rounded-md bg-black border border-white/10 text-sm w-56"
        placeholder="站内搜索…"
        value={q} onChange={(e) => setQ(e.target.value)}
      />
      <button className="px-3 py-1.5 rounded-md bg-white/10 text-sm">搜索</button>
    </form>
  );
}
