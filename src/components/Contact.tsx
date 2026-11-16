const CONTACTS = [
  {
    label: "邮箱",
    value: "zhangwei@example.com",
    href: "mailto:zhangwei@example.com",
    icon: "✉️",
  },
  {
    label: "GitHub",
    value: "github.com/example",
    href: "https://github.com/example",
    icon: "🐙",
  },
  {
    label: "技术博客",
    value: "blog.example.com",
    href: "https://blog.example.com",
    icon: "📚",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          联系
          <span className="ml-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            我
          </span>
        </h2>
        <div className="mt-3 h-1 w-16 rounded bg-gradient-to-r from-violet-500 to-cyan-500" />
        <p className="mt-6 text-zinc-400">
          无论是工作机会、项目合作，还是技术交流，都欢迎随时找我。
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {CONTACTS.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-white/10 bg-base-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-base-800"
            >
              <span aria-hidden="true" className="text-3xl">
                {contact.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{contact.label}</h3>
              <p className="mt-1 break-all text-sm text-zinc-400">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
