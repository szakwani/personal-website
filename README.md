# Personal Website

A modern, responsive personal portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

![Hero Section](https://github.com/user-attachments/assets/d81f7d9d-bc4a-4bf4-b4a4-f96ab58e2297)

## ✨ Features

- **Hero** – Name, title, tagline, CTA buttons, social links, and availability badge
- **About** – Bio, contact details, and career highlights
- **Experience** – Interactive accordion timeline of work history
- **Skills** – Animated progress bars across Frontend, Backend, DevOps & Cloud, and Tools
- **Projects** – Filterable project cards (Featured / All) with GitHub & live demo links
- **Contact** – Contact info cards + form with loading and success states
- **Navbar** – Smooth-scroll navigation with active section indicator & mobile hamburger menu
- **Footer** – Social links and scroll-to-top button

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [Vite 8](https://vitejs.dev/) | Build tool & dev server |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [lucide-react](https://lucide.dev/) | Icon library |

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Static output is generated in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## 🎨 Customisation

All content is centralised in **`src/data/portfolio.ts`**. Edit the exported constants to update:

- `personalInfo` – Name, title, location, email, social URLs
- `aboutContent` – Bio paragraphs and career highlights
- `experiences` – Work history (company, role, period, tech stack)
- `skillCategories` – Skill groups and proficiency levels
- `projects` – Project cards (title, description, tags, links)

Colors and design tokens live in **`tailwind.config.js`**.

## 📦 Deployment

The `dist/` folder is a self-contained static site. Deploy to any static host:

- **Vercel** – `vercel --prod`
- **Netlify** – drag & drop `dist/` or connect the repo
- **GitHub Pages** – push `dist/` to the `gh-pages` branch
- **AWS S3 + CloudFront** – upload `dist/` contents

## 📄 Licence

MIT © Saud Al Zakwani
