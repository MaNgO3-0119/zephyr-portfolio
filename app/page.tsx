import Hero from "@/components/Hero";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import NewsletterEmbed from "@/components/NewsletterEmbed";
import { getAllProjects, getAllCourses } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

export default function HomePage() {
  const projects = getAllProjects().slice(0, 3);
  const courses = getAllCourses().slice(0, 2);

  return (
    <>
      <Hero />
      <Container className="my-12">
        <section>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold">近期作品</h2>
            <Link href="/works" className="text-sm text-brand">全部作品 →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">课程与教程</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {courses.map(c => <CourseCard key={c.slug} c={c} />)}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">社交与平台</h2>
          <p className="text-sm text-zinc-300 mt-1">保持更新：幕后花絮、制作流程、上新与演出信息。</p>
          <div className="mt-3"><SocialLinks /></div>
        </section>

        <NewsletterEmbed />
      </Container>
    </>
  );
}
