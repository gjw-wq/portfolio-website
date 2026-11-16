# 个人作品集网站 AI 开发指令（AGENTS.md）

## 项目概述

使用 React + TypeScript + Tailwind CSS 开发的深色主题个人作品集单页网站。

## 开发环境

- 操作系统：Windows
- 终端：PowerShell / Git Bash
- 请使用 Windows 兼容的命令，路径分隔符注意转义

## 开发规范

- 使用 TypeScript 严格模式，禁止 any
- 组件使用函数式组件 + Hooks
- 样式全部使用 Tailwind CSS 类名，不写自定义 CSS（全局少量样式除外）
- 数据与展示分离：项目 / 技能数据只放 src/data/，组件不硬编码数据
- 组件文件名使用 PascalCase，函数名 camelCase，常量 UPPER_SNAKE_CASE

## 设计要求

- 深色主题：背景 #0a0a0a，文字 #ffffff，卡片 #111111
- 强调色使用渐变色（渐变文字、渐变描边、渐变按钮）
- 动画只用 CSS transition / animation，禁止引入 framer-motion 等重依赖
- 确保移动端适配（汉堡菜单、单栏布局）

## 注意事项

- 保持设计简洁，不要过度设计
- 所有外链使用 target="_blank" 并带 rel="noreferrer"
- 锚点跳转预留 Header 高度，避免标题被吸顶导航遮挡
- 不留 TODO / 占位符，所有内容真实完整
- 代码与配置文件一律使用 ASCII 直引号，界面文案使用中文
