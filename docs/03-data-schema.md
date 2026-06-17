# 03-data-schema.md

## Purpose

This document defines the data schemas used by the data-portfolio project.

All JSON files must follow these structures to ensure consistency between backend APIs and frontend applications.

---

# General Rules

All entities should contain:

- id
- slug (if applicable)
- createdAt
- updatedAt

Purpose:

- Consistent data management
- Easier future migration to database systems
- Better maintainability

Date Format:

```txt
YYYY-MM-DD
```

Example:

```txt
2026-06-17
```

---

# Project Schema

Purpose:

Store portfolio projects.

File:

```txt
src/data/projects.json
```

Structure:

```json
{
  "id": "project-001",
  "slug": "pos-system",
  "title": "POS System",
  "description": "Modern POS application for UMKM.",
  "image": "/projects/pos-system/cover.png",

  "tech": ["Next.js", "TypeScript", "Supabase"],

  "priority": 1,

  "visibility": "public",

  "screenshots": [
    "/projects/pos-system/screenshot-01.png",
    "/projects/pos-system/screenshot-02.png",
    "/projects/pos-system/screenshot-03.png"
  ],

  "demoUrl": "https://example.com",
  "githubUrl": "https://github.com/example",

  "createdAt": "2026-06-17",
  "updatedAt": "2026-06-17"
}
```

---

# Project Field Explanation

| Field       | Purpose                   |
| ----------- | ------------------------- |
| id          | Unique identifier         |
| slug        | Detail page routing       |
| title       | Project title             |
| description | Short description         |
| image       | Cover image               |
| tech        | Technology stack          |
| priority    | Featured project order    |
| visibility  | Public or private project |
| screenshots | Project gallery           |
| demoUrl     | Live demo link            |
| githubUrl   | Repository link           |
| createdAt   | Creation date             |
| updatedAt   | Last update               |

---

# Visibility Values

Allowed values:

```txt
public
private
```

Meaning:

public

- Show demo button
- Show github button

private

- Hide demo button
- Hide github button
- Show screenshots only

---

# Certificate Schema

Purpose:

Store certificates and achievements.

File:

```txt
src/data/certificates.json
```

Structure:

```json
{
  "id": "certificate-001",
  "slug": "dicoding-frontend",
  "title": "Frontend Developer",
  "issuer": "Dicoding",

  "description": "Frontend development certification.",

  "image": "/certificates/dicoding-frontend/cover.png",

  "credentialUrl": "",

  "createdAt": "2026-06-17",
  "updatedAt": "2026-06-17"
}
```

---

# Certificate Field Explanation

| Field         | Purpose                 |
| ------------- | ----------------------- |
| id            | Unique identifier       |
| slug          | Detail page routing     |
| title         | Certificate title       |
| issuer        | Certificate provider    |
| description   | Certificate description |
| image         | Certificate image       |
| credentialUrl | Verification URL        |
| createdAt     | Creation date           |
| updatedAt     | Last update             |

---

# Gallery Schema

Purpose:

Store journey documentation.

File:

```txt
src/data/gallery.json
```

Structure:

```json
{
  "id": "gallery-001",

  "image": "/gallery/gallery-001.png",

  "caption": "Participated in campus technology exhibition.",

  "createdAt": "2026-06-17",
  "updatedAt": "2026-06-17"
}
```

---

# Gallery Field Explanation

| Field     | Purpose                   |
| --------- | ------------------------- |
| id        | Unique identifier         |
| image     | Gallery image             |
| caption   | Small context description |
| createdAt | Creation date             |
| updatedAt | Last update               |

---

# Creation Schema

Purpose:

Store personal branding content.

File:

```txt
src/data/creations.json
```

Structure:

```json
{
  "id": "creation-001",

  "platform": "tiktok",

  "title": "Building a POS System",

  "thumbnail": "/creations/tiktok/content-001.png",

  "url": "https://tiktok.com/example",

  "createdAt": "2026-06-17",
  "updatedAt": "2026-06-17"
}
```

---

# Creation Field Explanation

| Field     | Purpose           |
| --------- | ----------------- |
| id        | Unique identifier |
| platform  | Social platform   |
| title     | Content title     |
| thumbnail | Content thumbnail |
| url       | Redirect URL      |
| createdAt | Creation date     |
| updatedAt | Last update       |

---

# Platform Values

Allowed values:

```txt
tiktok
instagram
```

Future:

```txt
youtube
linkedin
twitter
```

---

# API Response Philosophy

All APIs should return a consistent structure.

Example:

```json
{
  "success": true,
  "data": []
}
```

Error example:

```json
{
  "success": false,
  "message": "Data not found"
}
```

---

# Future Expansion

The schema should support future additions without breaking existing APIs.

Possible future fields:

Projects:

```txt
role
duration
teamSize
projectStatus
```

Certificates:

```txt
issueDate
expiryDate
```

Creations:

```txt
views
likes
comments
```

These fields are not required for V1.

---

# End of Document
