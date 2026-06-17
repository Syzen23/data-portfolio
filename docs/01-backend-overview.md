# 01-backend-overview.md

## Project Information

Project Name: data-portfolio

Version: V1

Purpose:
A headless portfolio data service that stores and provides portfolio-related data through API endpoints. The system acts as a centralized backend source for multiple frontend applications.

Primary Consumer:

- portfolio-now (main portfolio website)

Future Consumers:

- portfolio-v2
- landing pages
- personal websites
- dashboard systems

---

# Project Goal

The goal of this project is to separate portfolio content from frontend presentation.

Instead of hardcoding portfolio data directly inside the frontend application, all data will be managed inside this repository and exposed through API endpoints.

This architecture allows:

- Easier content management
- Reusable portfolio data
- Better scalability
- Cleaner frontend codebase
- Future migration to database systems without changing frontend architecture

---

# Tech Stack

Framework:

- Next.js (App Router)

Language:

- TypeScript

API:

- Route Handlers

Storage:

- JSON Files

Assets:

- Local Static Assets

Deployment:

- Vercel

Database:

- None (V1)

Admin Dashboard:

- None (V1)

Authentication:

- None (V1)

---

# Architecture Overview

Frontend and backend are separated into different repositories.

Frontend:

portfolio-now

Responsibilities:

- User Interface
- Animations
- Storytelling Experience
- Portfolio Presentation

Backend:

data-portfolio

Responsibilities:

- Data Management
- Asset Management
- API Services

Architecture Flow:

User
↓
portfolio-now
↓
Fetch API
↓
data-portfolio
↓
JSON Data + Assets

---

# Content Scope

The backend manages four primary content types.

1. Projects
2. Certificates
3. Gallery
4. Creations

---

# Projects

Purpose:
Store portfolio projects.

Each project may contain:

- Title
- Description
- Tech Stack
- Cover Image
- Screenshots
- Detail Page Content
- External Links

Projects support:

- Featured Projects
- Public Projects
- Private Projects

Featured projects are determined using:

priority: number

Example:

priority: 1

---

# Certificates

Purpose:
Store certificates and achievements.

Each certificate has its own detail page.

Users can:

- View certificate information
- View certificate image
- Read certificate details

---

# Gallery

Purpose:
Store journey documentation.

Examples:

- Campus activities
- Competitions
- Workshops
- Events
- Community activities

Gallery is intentionally simple.

Each item contains:

- Image
- Caption

No categories are required for V1.

---

# Creations

Purpose:
Showcase personal branding content.

Platforms:

- TikTok
- Instagram

Content structure:

- Thumbnail
- Title
- Platform
- URL

Behavior:

Users click content cards and are redirected to the original social media post.

The backend does not synchronize with social media APIs.

All content is managed manually.

---

# Asset Strategy

All images are stored inside this repository.

Example:

public/
├── projects/
├── certificates/
├── gallery/
└── creations/

Assets should be considered the single source of truth for portfolio content.

Frontend applications should retrieve image paths from API responses.

---

# API Philosophy

The backend should expose clean and predictable endpoints.

Examples:

/api/projects
/api/projects/[slug]

/api/certificates
/api/certificates/[slug]

/api/gallery

/api/creations

The frontend should never access JSON files directly.

All access must go through API routes.

---

# Future Scalability

The architecture should support future upgrades without changing frontend integrations.

Current:

Route Handler
↓
JSON Files

Future:

Route Handler
↓
Database

Potential Future Database:

- Supabase PostgreSQL

The API contract should remain unchanged.

---

# Non Goals

The following features are intentionally excluded from V1:

- Authentication
- Admin Dashboard
- CMS
- Database
- Social Media Sync
- Analytics Dashboard
- Realtime Features
- User Accounts

These features may be considered in future versions.

---

# Success Criteria

The backend is considered successful when:

- Frontend can fetch all portfolio data through APIs
- Assets are centralized
- Data is easy to update manually
- New content can be added without modifying frontend code
- Future database migration remains possible
- Deployment works entirely on Vercel

End of Document.
