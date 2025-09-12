import Container from "@/components/Container";
import CourseCard from "@/components/CourseCard";
import { getAllCourses } from "@/lib/data";

export default function CoursesPage() {
  const list = getAllCourses();
  return (
    <Container className="my-10">
      <h1 className="text-3xl font-bold">课程 / 商店</h1>
      <p className="text-sm text-zinc-300 mt-1">通过 Gumroad / 其它平台完成支付与交付。</p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {list.map(c => <CourseCard key={c.slug} c={c} />)}
      </div>
    </Container>
  );
}
