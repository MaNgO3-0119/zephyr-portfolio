import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/data";

export default function CourseCard({ c }: { c: Course }) {
  return (
    <div className="rounded-lg border border-white/10 overflow-hidden">
      <div className="relative aspect-video">
        <Image src={c.cover || "/images/placeholder-1.jpg"} alt={c.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{c.title}</h3>
        <p className="text-sm text-zinc-300 mt-1">{c.summary}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="font-medium">{c.price}</div>
          {c.buyUrl ? (
            <a href={c.buyUrl} target="_blank" rel="noreferrer"
               className="px-3 py-2 bg-brand text-black rounded-md">{c.cta ?? "购买"}</a>
          ) : (
            <Link href="/contact" className="px-3 py-2 border border-white/20 rounded-md">咨询</Link>
          )}
        </div>
      </div>
    </div>
  );
}
