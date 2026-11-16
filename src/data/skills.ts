export interface SkillItem {
  name: string;
  level: number; // 熟练度 1~100
}

export interface SkillGroup {
  name: string;
  icon: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "前端开发",
    icon: "🎨",
    items: [
      { name: "React", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "HTML / CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "工程化与工具",
    icon: "🛠️",
    items: [
      { name: "Vite", level: 86 },
      { name: "Git / GitHub", level: 90 },
      { name: "ESLint / Prettier", level: 82 },
      { name: "Vitest 单元测试", level: 75 },
    ],
  },
  {
    name: "后端与其他",
    icon: "☁️",
    items: [
      { name: "Node.js", level: 78 },
      { name: "RESTful API", level: 84 },
      { name: "SQL 基础", level: 70 },
      { name: "Docker 基础", level: 65 },
    ],
  },
];
