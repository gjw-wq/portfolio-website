# 个人作品集网站 技术设计（Tech Design）

## 技术栈

- 前端：React 18.3 + TypeScript 5.6 + Vite 5.4
- 样式：Tailwind CSS 3.4（经典 tailwind.config.js + postcss.config.js 配置）
- 动画：CSS transition / animation（不引入 framer-motion）
- 数据：项目与技能数据存放在 src/data 下的 TypeScript 文件
- 部署：构建产物为纯静态文件，可部署到 Vercel / Netlify / 任意静态托管

## 项目结构

```
src/
  components/          # 组件
    Header.tsx         # 吸顶导航（含移动端菜单）
    Hero.tsx           # 首屏：头像 + 标题 + CTA
    About.tsx          # 关于我 + 技能分组
    Projects.tsx       # 项目卡片列表
    Contact.tsx        # 联系方式
    Footer.tsx         # 页脚
  data/
    projects.ts        # 项目示例数据（6 个）
    skills.ts          # 技能分组数据
  App.tsx              # 页面组装
  main.tsx             # 入口
  index.css            # Tailwind 指令 + 全局样式
public/
  avatar.svg           # 头像 SVG 占位
```

## 数据模型

### Project（项目）
- id: string
- title: string
- description: string
- tags: string[]
- emoji: string（截图占位图标）
- gradientFrom: string（截图占位渐变起点色）
- gradientTo: string（截图占位渐变终点色）
- demoUrl: string
- repoUrl: string

### SkillGroup（技能分组）
- name: string
- items: { name: string; level: number }[]（level 为 1~100 熟练度）

## 关键技术点

1. 平滑滚动：html { scroll-behavior: smooth } + 各区块 scroll-margin-top 预留导航高度
2. 渐变文字：bg-gradient-to-r + bg-clip-text + text-transparent
3. 移动端菜单：useState 控制展开，点击链接后自动收起
4. 动画：CSS keyframes（fadeInUp）在首屏与卡片 hover 中使用
5. 响应式：Grid + Tailwind md: 前缀，头像与简介在移动端上下堆叠

## TypeScript 严格模式

- tsconfig 开启 strict、noUnusedLocals、noUnusedParameters
- 数据文件导出带类型接口，禁止 any
