export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
  demoUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    id: "markdown-notes",
    title: "云影笔记",
    description:
      "支持实时预览与代码高亮的 Markdown 笔记应用，左侧编辑、右侧渲染，笔记数据本地持久化，支持全文搜索与标签管理。",
    tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    emoji: "📝",
    gradientFrom: "#7c3aed",
    gradientTo: "#3b82f6",
    demoUrl: "https://example.com/demo/markdown-notes",
    repoUrl: "https://github.com/example/markdown-notes",
  },
  {
    id: "pomodoro-timer",
    title: "专注番茄钟",
    description:
      "基于番茄工作法的计时器：SVG 环形进度、系统通知与 Web Audio 提示音、可自定义时长，内置今日与本周专注统计。",
    tags: ["React", "TypeScript", "Web Audio", "Notification API"],
    emoji: "🍅",
    gradientFrom: "#dc2626",
    gradientTo: "#f97316",
    demoUrl: "https://example.com/demo/pomodoro-timer",
    repoUrl: "https://github.com/example/pomodoro-timer",
  },
  {
    id: "weather-app",
    title: "天气查询助手",
    description:
      "接入 OpenWeatherMap 的天气应用：城市搜索、Geolocation 自动定位、五日预报与城市收藏，错误场景均有中文友好提示。",
    tags: ["React", "TypeScript", "OpenWeatherMap API", "Geolocation"],
    emoji: "⛅",
    gradientFrom: "#0ea5e9",
    gradientTo: "#14b8a6",
    demoUrl: "https://example.com/demo/weather-app",
    repoUrl: "https://github.com/example/weather-app",
  },
  {
    id: "todo-pro",
    title: "待办清单 Pro",
    description:
      "多条件筛选的待办事项应用：分类、优先级、截止日期、模糊搜索一应俱全，Zustand 管理全局状态，含完成率统计看板。",
    tags: ["React", "TypeScript", "Zustand", "date-fns"],
    emoji: "✅",
    gradientFrom: "#059669",
    gradientTo: "#84cc16",
    demoUrl: "https://example.com/demo/todo-pro",
    repoUrl: "https://github.com/example/todo-pro",
  },
  {
    id: "tech-blog",
    title: "个人技术博客",
    description:
      "基于 Next.js 的静态博客：MDX 写作、代码高亮、暗色主题、RSS 订阅，Lighthouse 性能得分 99，已持续更新 30+ 篇文章。",
    tags: ["Next.js", "MDX", "Vercel", "SEO"],
    emoji: "📚",
    gradientFrom: "#334155",
    gradientTo: "#7c3aed",
    demoUrl: "https://example.com/demo/tech-blog",
    repoUrl: "https://github.com/example/tech-blog",
  },
  {
    id: "mini-ui",
    title: "Mini UI 组件库",
    description:
      "亲手打磨的轻量 React 组件库：Button、Dialog、Toast 等 12 个组件，全量 TypeScript 类型覆盖，Storybook 文档站点同步维护。",
    tags: ["React", "TypeScript", "Storybook", "Rollup"],
    emoji: "🧩",
    gradientFrom: "#6366f1",
    gradientTo: "#ec4899",
    demoUrl: "https://example.com/demo/mini-ui",
    repoUrl: "https://github.com/example/mini-ui",
  },
];
