import { projects, type Project } from "../data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-900 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-xl hover:shadow-violet-500/10">
      {/* 截图占位：渐变 + 项目图标 */}
      <div
        className="relative flex aspect-video items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      >
        <span
          aria-hidden="true"
          className="text-6xl opacity-90 transition-transform duration-300 group-hover:scale-110"
        >
          {project.emoji}
        </span>
        <span className="absolute bottom-3 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          项目截图占位
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            在线演示
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
          >
            源码
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          项目
          <span className="ml-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            作品
          </span>
        </h2>
        <div className="mt-3 h-1 w-16 rounded bg-gradient-to-r from-violet-500 to-cyan-500" />
        <p className="mt-6 text-zinc-400">
          精选 6 个个人项目，覆盖组件开发、状态管理、API
          调用与定时任务等常见场景。
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
