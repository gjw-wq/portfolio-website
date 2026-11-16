export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} 张伟 · 用 React + Tailwind CSS 构建
        </p>
        <a
          href="#top"
          className="text-sm text-zinc-400 transition-colors hover:text-white"
        >
          回到顶部 ↑
        </a>
      </div>
    </footer>
  );
}
