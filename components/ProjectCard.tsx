import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectCard({ p, className }: { p: Project; className?: string }) {
  return (
    <Link href={`/works/${p.slug}`} className={cn("group rounded-lg overflow-hidden border border-white/10 hover:border-white/30", className)}>
      <div className="relative aspect-[16/9]">
        <Image src={p.poster || "/images/placeholder-1.jpg"} alt={p.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-lg font-semibold">{p.title}</div>
          <div className="text-xs text-zinc-300">{p.year} · {p.category.toUpperCase()}</div>
        </div>
      </div>
    </Link>
  );
}
