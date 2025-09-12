import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <Container className="py-10 text-sm text-zinc-400">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div>© {new Date().getFullYear()} 珞三 Zephyr Luo</div>
          <div className="md:ml-auto">
            <a href="/rss" className="hover:text-white">RSS</a>
            <span className="mx-3 opacity-50">·</span>
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
