# 02-folder-structure.md

## Purpose

This document defines the folder structure for the data-portfolio project.

The goal is to maintain a clean, scalable, and predictable architecture that is easy to maintain as portfolio content grows.

---

# Project Structure

```txt
data-portfolio/

├── public/
│
├── src/
│
├── docs/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

# Public Assets

The public directory stores all portfolio assets.

```txt
public/

├── projects/
├── certificates/
├── gallery/
└── creations/
```

All images should be accessible through public URLs.

Example:

/projects/pos-system/cover.png

---

# Projects Asset Structure

Each project should have its own folder.

```txt
public/projects/

├── pos-system/
│   ├── cover.png
│   ├── screenshot-01.png
│   ├── screenshot-02.png
│   └── screenshot-03.png
│
├── syzen-quiz/
│   ├── cover.png
│   ├── screenshot-01.png
│   └── screenshot-02.png
```

Purpose:

- Easier maintenance
- Better organization
- Supports project detail pages

---

# Certificates Asset Structure

Each certificate should have its own folder.

```txt
public/certificates/

├── dicoding-frontend/
│   ├── cover.png
│
├── juaravibecoding/
│   ├── cover.png
```

Purpose:

- Consistent asset organization
- Supports certificate detail pages

---

# Gallery Asset Structure

```txt
public/gallery/

├── gallery-001.png
├── gallery-002.png
├── gallery-003.png
```

Purpose:

- Simple journey documentation
- Lightweight structure

---

# Creations Asset Structure

```txt
public/creations/

├── tiktok/
│   ├── content-001.png
│   ├── content-002.png
│
├── instagram/
│   ├── content-001.png
│   ├── content-002.png
```

Purpose:

- Separate social media platforms
- Easier content management

---

# Source Structure

```txt
src/

├── app/
├── data/
├── lib/
├── types/
```

---

# App Structure

The app directory contains API route handlers.

```txt
src/app/

└── api/
```

---

# API Structure

```txt
src/app/api/

├── projects/
│   ├── route.ts
│   └── [slug]/
│       └── route.ts
│
├── certificates/
│   ├── route.ts
│   └── [slug]/
│       └── route.ts
│
├── gallery/
│   └── route.ts
│
├── creations/
│   └── route.ts
```

Purpose:

Provide a clean and predictable API structure.

---

# Data Structure

The data directory stores all JSON content.

```txt
src/data/

├── projects.json
├── certificates.json
├── gallery.json
└── creations.json
```

All API routes should retrieve data from this directory.

JSON files are the source of truth for content.

---

# Types Structure

```txt
src/types/

├── project.ts
├── certificate.ts
├── gallery.ts
└── creation.ts
```

Purpose:

- Type safety
- Better maintainability
- Consistent data contracts

---

# Utility Structure

```txt
src/lib/

├── data-loader.ts
├── api-response.ts
└── constants.ts
```

Purpose:

Store reusable helper functions.

---

# Naming Convention

## Slug Naming

Always use:

```txt
lowercase
kebab-case
```

Examples:

```txt
pos-system
syzen-quiz
inventory-management
```

Avoid:

```txt
POSSystem
Pos_System
project1
```

---

# Asset Naming

Cover image:

```txt
cover.png
```

Project screenshots:

```txt
screenshot-01.png
screenshot-02.png
screenshot-03.png
```

Certificate image:

```txt
cover.png
```

Creation thumbnails:

```txt
content-001.png
content-002.png
```

---

# API Growth Strategy

Future content types should follow the same structure.

Example:

```txt
src/app/api/blogs
src/data/blogs.json
src/types/blog.ts
```

This keeps the architecture predictable.

---

# Rules

1. Never store portfolio data inside route handlers.

2. Route handlers must only read data from JSON files.

3. Frontend applications must consume APIs only.

4. Assets must remain inside public/.

5. New content types must follow the existing architecture pattern.

---

# End of Document
