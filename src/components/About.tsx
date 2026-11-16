import { skillGroups } from "../data/skills";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          关于
          <span className="ml-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            我
          </span>
        </h2>
        <div className="mt-3 h-1 w-16 rounded bg-gradient-to-r from-violet-500 to-cyan-500" />

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            <p>
              我是一名前端工程师，日常与 React、TypeScript、Tailwind CSS
              为伴。从设计稿还原像素级的界面，到梳理复杂的业务状态，都能沉下心做好。
              我尤其喜欢把"难用的东西"改造成"好用的东西"。
            </p>
            <p>
              工作之外，我热衷于折腾各类个人工具：番茄钟、天气应用、Markdown
              笔记……这些项目让我保持对新技术的敏感，也沉淀了一套自己的
              Vibe Coding 工作流。
            </p>
            <p>
              我的信条：写得让人看得懂的代码，做让自己愿意用的产品。
              如果你也对前端工程化、交互体验感兴趣，欢迎联系我一起交流。
            </p>
          </div>

          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div
                key={group.name}
                className="rounded-2xl border border-white/10 bg-base-900 p-6"
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <span aria-hidden="true">{group.icon}</span>
                  {group.name}
                </h3>
                <ul className="mt-4 space-y-4">
                  {group.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-zinc-300">{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
