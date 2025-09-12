import Container from "@/components/Container";

const links = [
  { label: "最新 Showreel", href: "/works" },
  { label: "Spotify", href: "https://open.spotify.com/" },
  { label: "B站", href: "https://www.bilibili.com/" },
  { label: "课程商店", href: "/courses" },
  { label: "联系我", href: "/contact" }
];

export default function BioPage() {
  return (
    <Container className="my-10">
      <h1 className="text-3xl font-bold">Zephyr · Link in Bio</h1>
      <div className="mt-6 space-y-3">
        {links.map(l => (
          <a key={l.href} href={l.href} target={l.href.startsWith("http") ? "_blank" : "_self"}
             className="block text-center px-4 py-4 rounded-lg border border-white/10 hover:bg-white/5">
            {l.label}
          </a>
        ))}
      </div>
    </Container>
  );
}
