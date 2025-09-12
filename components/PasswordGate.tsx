"use client";

import { useState } from "react";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState(false);
  const [input, setInput] = useState("");
  const expected = process.env.NEXT_PUBLIC_EPK_PASSWORD ?? "";

  if (ok || !expected) return <>{children}</>;

  return (
    <div className="max-w-md mx-auto border border-white/10 p-6 rounded-lg">
      <h3 className="text-lg font-semibold">输入访问口令</h3>
      <p className="text-sm text-zinc-400 mt-1">用于媒体或合作方查看 EPK</p>
      <div className="mt-4 flex gap-2">
        <input className="flex-1 px-3 py-2 rounded-md bg-black border border-white/10"
               value={input} onChange={(e) => setInput(e.target.value)} placeholder="口令…" />
        <button className="px-4 py-2 rounded-md bg-brand text-black"
                onClick={() => setOk(input.trim() === expected.trim())}>进入</button>
      </div>
      <p className="text-xs text-zinc-500 mt-2">* 仅作轻量防护，不适合敏感素材。</p>
    </div>
  );
}
