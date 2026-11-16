export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* 背景装饰光晕 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div className="animate-fade-in-up">
          <p className="mb-3 font-mono text-sm text-cyan-400 sm:text-base">
            你好，我是
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            张伟
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              前端工程师
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            5 年 Web 开发经验，热爱用代码把想法变成产品。擅长 React 与
            TypeScript 生态，追求高性能与好体验的平衡。相信"规划比代码更重要"，
            业余时间喜欢用 Vibe Coding 打磨各种个人小工具。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:text-base"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 sm:text-base"
            >
              联系我
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="animate-fade-in-up rounded-full bg-gradient-to-tr from-violet-500 via-indigo-500 to-cyan-400 p-1.5 shadow-2xl shadow-violet-500/20">
            <img
              src="/avatar.svg"
              alt="个人头像"
              width={256}
              height={256}
              className="h-48 w-48 rounded-full sm:h-64 sm:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
