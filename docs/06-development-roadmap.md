# 06-development-roadmap.md

## Purpose

This document defines the development roadmap for the data-portfolio project.

The roadmap is divided into phases to ensure a structured and maintainable development process.

The goal is to build the system incrementally while maintaining code quality and architectural consistency.

---

# Project Goal

Build a headless portfolio data service that:

- Stores portfolio content
- Serves data through APIs
- Manages portfolio assets
- Supports future scalability
- Deploys entirely on Vercel

---

# Development Strategy

Development follows a layer-by-layer approach.

```txt id="l7g4j4"
Foundation
↓
Data Layer
↓
API Layer
↓
Validation
↓
Deployment
```

Each phase must be completed before moving to the next phase.

---

# Phase 1 — Project Setup

## Goal

Initialize the project foundation.

---

## Tasks

Create Next.js project.

Enable:

```txt id="kzb9j8"
TypeScript
App Router
ESLint
```

---

Create root structure:

```txt id="17lt9n"
src/
public/
docs/
```

---

Create internal folders:

```txt id="wb9lnw"
src/app
src/data
src/lib
src/types
```

---

Verify:

```txt id="zhx95i"
npm run dev
```

runs successfully.

---

## Deliverables

```txt id="3r3gm4"
Project initialized
Folder structure ready
```

---

# Phase 2 — Asset Layer

## Goal

Create asset organization system.

---

## Tasks

Create:

```txt id="w5f4ns"
public/projects
public/certificates
public/gallery
public/creations
```

---

Create sample structure:

```txt id="0bjlwm"
projects/pos-system
certificates/sample-certificate
creations/tiktok
creations/instagram
```

---

Verify:

Assets can be accessed through browser URLs.

---

## Deliverables

```txt id="zovqkt"
Asset system operational
```

---

# Phase 3 — Data Layer

## Goal

Create content source files.

---

## Tasks

Create:

```txt id="ewmhh3"
projects.json
certificates.json
gallery.json
creations.json
```

---

Insert sample data.

---

Validate:

```txt id="lg1x6h"
JSON format
```

is correct.

---

## Deliverables

```txt id="yb7nnv"
Content source layer completed
```

---

# Phase 4 — Type System

## Goal

Create reusable TypeScript models.

---

## Tasks

Create:

```txt id="2wgvkh"
project.ts
certificate.ts
gallery.ts
creation.ts
```

---

Define:

```txt id="kh66h5"
interfaces
types
```

for all content entities.

---

## Deliverables

```txt id="k2j8nq"
Type-safe architecture
```

---

# Phase 5 — Utility Layer

## Goal

Create reusable backend utilities.

---

## Tasks

Create:

```txt id="lbd3yq"
data-loader.ts
api-response.ts
constants.ts
```

---

Responsibilities:

### data-loader

Read JSON files safely.

---

### api-response

Standardize API responses.

---

### constants

Store reusable constants.

---

## Deliverables

```txt id="40v76g"
Shared utilities completed
```

---

# Phase 6 — Projects API

## Goal

Expose project data.

---

## Tasks

Create:

```txt id="j3owjr"
/api/projects

/api/projects/[slug]
```

---

Features:

```txt id="wpjlwm"
List all projects
Find project by slug
Sort by priority
```

---

## Deliverables

```txt id="mjlwmk"
Projects API completed
```

---

# Phase 7 — Certificates API

## Goal

Expose certificate data.

---

## Tasks

Create:

```txt id="dwxbt0"
/api/certificates

/api/certificates/[slug]
```

---

Features:

```txt id="2k0vw3"
List certificates
Find certificate by slug
```

---

## Deliverables

```txt id="23w3ru"
Certificates API completed
```

---

# Phase 8 — Gallery API

## Goal

Expose gallery data.

---

## Tasks

Create:

```txt id="5uz4bx"
/api/gallery
```

---

Features:

```txt id="j4fbxn"
List all gallery items
```

---

## Deliverables

```txt id="6j9slr"
Gallery API completed
```

---

# Phase 9 — Creations API

## Goal

Expose social content data.

---

## Tasks

Create:

```txt id="7uy8yb"
/api/creations
```

---

Support:

```txt id="j77q0k"
All Content

TikTok Filter

Instagram Filter
```

---

Query Example:

```txt id="35yjv4"
/api/creations?platform=tiktok
```

---

## Deliverables

```txt id="1jruwi"
Creations API completed
```

---

# Phase 10 — Validation & Testing

## Goal

Verify all APIs behave correctly.

---

## Tasks

Test:

```txt id="1xjlwm"
/api/projects

/api/projects/[slug]

/api/certificates

/api/certificates/[slug]

/api/gallery

/api/creations
```

---

Verify:

```txt id="dhvc7w"
404 handling

500 handling

Invalid query handling
```

---

## Deliverables

```txt id="06wvzj"
Stable API layer
```

---

# Phase 11 — Deployment

## Goal

Deploy system to production.

---

## Tasks

Deploy to:

```txt id="c3v5x6"
Vercel
```

---

Verify:

```txt id="90x9vz"
API endpoints accessible

Assets accessible

JSON loading works
```

---

## Deliverables

```txt id="qg8dpr"
Production deployment completed
```

---

# Phase 12 — Frontend Integration

## Goal

Connect portfolio-now with data-portfolio.

---

## Tasks

Replace mock data.

Use:

```txt id="tcrl2f"
/api/projects

/api/certificates

/api/gallery

/api/creations
```

---

Verify:

```txt id="fjlwmv"
Projects render correctly

Certificates render correctly

Gallery render correctly

Creations render correctly
```

---

## Deliverables

```txt id="mj9ijj"
Frontend connected to backend
```

---

# V1 Completion Criteria

The project is considered complete when:

✓ All APIs function correctly

✓ All assets are accessible

✓ Frontend successfully consumes APIs

✓ Deployment works on Vercel

✓ Content can be updated through JSON files

✓ No hardcoded portfolio data exists in frontend

---

# Future Roadmap (V2)

Potential upgrades:

```txt id="2r6jkv"
WebP Asset Optimization

Supabase Database

Admin Dashboard

Analytics

View Counter

Content Scheduling

Social Media Sync

CMS
```

These features are intentionally excluded from V1.

---

# End of Document
