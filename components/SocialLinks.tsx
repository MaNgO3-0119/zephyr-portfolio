import { Youtube, Music, Instagram, Music2, Github, Globe, Twitter } from "lucide-react";

const items = [
  { href: "https://www.bilibili.com/", label: "B站", icon: Globe },
  { href: "https://www.youtube.com/", label: "YouTube", icon: Youtube },
  { href: "https://open.spotify.com/", label: "Spotify", icon: Music2 },
  { href: "https://music.apple.com/", label: "Apple Music", icon: Music },
  { href: "https://www.instagram.com/", label: "Instagram", icon: Instagram },
  { href: "https://x.com/", label: "X / Twitter", icon: Twitter },
  { href: "https://github.com/", label: "GitHub", icon: Github }
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <a key={i.href} href={i.href} target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 hover:bg-white/5 text-sm">
          <i.icon size={16} /><span>{i.label}</span>
        </a>
      ))}
    </div>
  );
}
