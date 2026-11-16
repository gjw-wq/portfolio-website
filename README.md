# 个人作品集网站

深色主题、渐变强调的个人作品集单页网站。展示个人介绍、技能分组与项目作品，手机、电脑均可正常浏览。

## 功能清单

- 吸顶导航：锚点平滑滚动，滚动时毛玻璃背景，移动端汉堡菜单
- Hero 首屏：本地 SVG 头像（渐变描边）、渐变大标题、个人简介、CTA 按钮
- 关于我：多段个人介绍 + 技能分组展示（熟练度进度条）
- 项目展示：6 个项目卡片，含截图占位、描述、技术栈标签、在线地址与源码链接
- 联系方式：邮箱、GitHub、博客卡片式入口
- 响应式布局与 CSS 淡入动画（无重依赖）

## 目录结构

```
├── RESEARCH.md            # 需求研究
├── PRD.md                 # 产品需求文档
├── TECH_DESIGN.md         # 技术设计文档
├── AGENTS.md              # AI 开发指令
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── avatar.svg          # 头像 SVG 占位
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── data/
    │   ├── projects.ts     # 项目数据
    │   └── skills.ts       # 技能数据
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Projects.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

## 启动步骤

```bash
npm install
npm run dev
```

打开终端提示的地址（默认 http://localhost:5173）即可预览。

## 构建与部署

```bash
npm run build     # 产物输出到 dist/
npm run preview   # 本地预览构建产物
```

可将 dist/ 部署到 Vercel、Netlify 或任意静态托管。

## 环境变量

本项目纯静态展示，无需配置环境变量。

## 自定义内容

- 修改个人信息：编辑 `src/components/Hero.tsx` 与 `src/components/About.tsx`
- 修改项目数据：编辑 `src/data/projects.ts`
- 修改技能数据：编辑 `src/data/skills.ts`
- 替换头像：替换 `public/avatar.svg`
