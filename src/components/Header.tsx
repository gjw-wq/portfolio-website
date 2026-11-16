import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "关于我" },
  { href: "#projects", label: "项目" },
  { href: "#contact", label: "联系方式" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-base-950/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight">
          <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            zhangwei.dev
          </span>
        </a>

        {/* 桌面端导航 */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              与我联系
            </a>
          </li>
        </ul>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          aria-label="切换导航菜单"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* 移动端菜单 */}
      {menuOpen && (
        <ul className="space-y-1 border-b border-white/10 bg-base-950/95 px-4 pb-4 pt-2 backdrop-blur-md md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-2.5 text-center text-base font-semibold text-white"
            >
              与我联系
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
