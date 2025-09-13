"use client";

import { queryIndex } from "@/lib/search";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function SearchContent() {
  const params = useSearchParams();
  const q = params.get("q") || "";
  const results = useMemo(() => (q ? queryIndex(q) : []), [q]);

  return (
    <div className="mt-6 space-y-4">
      {!q && <p className="text-zinc-400">请输入搜索词。</p>}
      {q && !results.length && <p className="text-zinc-400">没有找到结果。</p>}
      {results.map((r, i) => (
        <div key={i} className="border border-white/10 rounded-lg p-4">
          <div className="text-xs uppercase text-zinc-400">{r.type}</div>
          <Link href={r.slug} className="text-lg font-semibold hover:text-brand">
            {r.title}
          </Link>
          {r.excerpt && <p className="text-sm text-zinc-300 mt-1">{r.excerpt}</p>}
        </div>
      ))}
    </div>
  );
}
