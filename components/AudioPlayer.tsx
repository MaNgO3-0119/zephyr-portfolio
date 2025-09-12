"use client";

import { useRef, useState, useEffect } from "react";

type Track = { title: string; url: string };

export default function AudioPlayer({ tracks }: { tracks: Track[] }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = tracks[index];

  useEffect(() => {
    if (!audioRef.current) return;
    playing ? audioRef.current.play().catch(() => {}) : audioRef.current.pause();
  }, [playing, current?.url]);

  if (!tracks?.length) return null;

  return (
    <div className="rounded-md border border-white/10 p-3">
      <div className="flex items-center justify-between">
        <div className="font-medium">{current?.title || "Track"}</div>
        <div className="space-x-2">
          <button className="px-2 py-1 rounded-md border border-white/10"
                  onClick={() => setIndex(i => (i - 1 + tracks.length) % tracks.length)}>◀</button>
          <button className="px-2 py-1 rounded-md bg-white/10"
                  onClick={() => setPlaying(p => !p)}>{playing ? "暂停" : "播放"}</button>
          <button className="px-2 py-1 rounded-md border border-white/10"
                  onClick={() => setIndex(i => (i + 1) % tracks.length)}>▶</button>
        </div>
      </div>
      <audio ref={audioRef} src={current?.url} controls className="w-full mt-2 rounded-md" />
      <div className="mt-2 flex gap-2 flex-wrap text-sm">
        {tracks.map((t, i) => (
          <button key={i}
            className={`px-2 py-1 rounded-md border ${i===index ? "bg-brand text-black border-transparent" : "border-white/10"}`}
            onClick={() => { setIndex(i); setPlaying(true); }}>{t.title}</button>
        ))}
      </div>
    </div>
  );
}
