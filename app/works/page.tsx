import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/data";

export default function WorksPage() {
  const all = getAllProjects();
  const groups = {
    film: all.filter(p => p.category === "film"),
    game: all.filter(p => p.category === "game"),
    ad: all.filter(p => p.category === "ad"),
    album: all.filter(p => p.category === "album")
  };

  return (
    <Container className="my-10">
      <h1 className="text-3xl font-bold">作品</h1>

      {Object.entries(groups).map(([k, list]) => (
        list.length ? (
          <section key={k} className="mt-8">
            <h2 className="text-xl font-semibold uppercase">{k}</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-3">
              {list.map(p => <ProjectCard key={p.slug} p={p} />)}
            </div>
          </section>
        ) : null
      ))}
    </Container>
  );
}
