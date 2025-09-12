// --- Minimal stub data; replace with your real content later ---
export type Project = {
  slug: string;
  title: string;
  category: "film" | "game" | "ad" | "album";
  year?: number;
  poster?: string;
  video?: { type: "youtube" | "bilibili"; id: string };
  tracks?: { title: string; url: string }[];
  logline?: string;
  notes?: string[];
  awards?: string[];
  tags?: string[];
  private?: boolean;
  scorePdf?: string;
};

export type Course = {
  slug: string;
  title: string;
  summary: string;
  cover?: string;
  price?: string;
  cta?: string;
  buyUrl?: string;
  tags?: string[];
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "ember-blade",
    title: "Ember Blade",
    category: "game",
    year: 2024,
    poster: "/images/placeholder-1.jpg",
    video: { type: "youtube", id: "dQw4w9WgXcQ" },
    tracks: [
      { title: "Main Theme", url: "" },
      { title: "Forest Run", url: "" }
    ],
    logline: "奇幻动作冒险，融合民族与混合编制的主题写作。",
    notes: ["以三全音动机贯穿章节", "低音簧管和军鼓的反差戏法"],
    awards: [],
    tags: ["orchestral", "hybrid", "fantasy"],
    scorePdf: "" // e.g. "/scores/ember-blade-suite.pdf"
  },
  {
    slug: "midnight-ink",
    title: "Midnight Ink",
    category: "film",
    year: 2023,
    poster: "/images/placeholder-2.jpg",
    video: { type: "bilibili", id: "BV1xx411c7mD" },
    tracks: [{ title: "Nocturne", url: "" }],
    logline: "黑色电影风短片，钢琴与弦乐的极简主题变形。",
    tags: ["minimal", "noir"]
  }
];

export const courses: Course[] = [
  {
    slug: "orchestration-magic",
    title: "魔幻题材配乐写作：从动机到配器",
    summary: "18 课时，完整拆解奇幻题材的叙事音乐方法论与可复用模板。",
    cover: "/images/course-1.jpg",
    price: "¥799",
    cta: "立即购买",
    buyUrl: "https://gumroad.com/l/your-product",
    tags: ["orchestration", "fantasy"]
  },
  {
    slug: "hybrid-sound-design",
    title: "Hybrid 作曲与音色设计工作流",
    summary: "从合成到采样，构建属于你的混合音色池与主题语言。",
    cover: "/images/course-2.jpg",
    price: "¥599",
    cta: "加入学习",
    buyUrl: "https://gumroad.com/l/your-product",
    tags: ["hybrid", "sound design"]
  }
];

export const posts: Post[] = [
  {
    slug: "process-notes-01",
    title: "Process Notes #01：从和声到音色的映射",
    date: "2025-06-01",
    excerpt: "谈谈在影视配乐里，如何把和声功能变成音色对比。",
    tags: ["harmony", "orchestration"]
  }
];

export function getAllProjects() { return projects; }
export function getProject(slug: string) { return projects.find(p => p.slug === slug); }
export function getAllCourses() { return courses; }
export function getAllPosts() { return posts; }

export function allSlugs() {
  return [
    ...projects.map(p => `/works/${p.slug}`),
    ...posts.map(p => `/blog/${p.slug}`)
  ];
}
