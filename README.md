# Personal Website

This is my personal website built with **Next.js** and **Markdown**.

## 🚀 Features

- **Intro Section**: A beautiful introduction managed via `content/intro.md`.
- **Blog**: A tag-filterable blog system that reads posts from `content/posts/`.
- **Design**: Minimalist, premium dark theme using Vanilla CSS Variables.
- **Search**: Real-time filtering of blog posts.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (Static Export)
- CSS Modules & Variables
- Markdown (`remark`, `gray-matter`)

## 📝 Adding Content

To add a new blog post, create a `.md` file in `content/posts/`:

```markdown
---
title: "Your Post Title"
date: "2023-11-20"
tags: ["tag1", "tag2"]
---

Your content here...
```

## 📦 Deployment

This site is deployed automatically to GitHub Pages via GitHub Actions.
