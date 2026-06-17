# 00-master-context.md

## Project Context

Project Name:

data-portfolio

Version:

V1

Project Type:

Headless Portfolio Data Service

---

# Project Vision

The goal of this project is to create a centralized backend service that stores and provides portfolio data through API endpoints.

This repository acts as the single source of truth for portfolio content.

The frontend should never store hardcoded portfolio content.

All content must be retrieved through APIs.

---

# Relationship With Frontend

Frontend Repository:

portfolio-now

Purpose:

A modern storytelling portfolio website that presents personal branding as:

- Fullstack Developer
- Content Creator

The frontend is responsible for:

- User Interface
- Storytelling Experience
- Animations
- User Interaction

The backend is responsible for:

- Content Management
- Asset Management
- API Delivery

Architecture:

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

# Development Philosophy

This project prioritizes:

- Simplicity
- Maintainability
- Scalability
- Clean Architecture

Avoid unnecessary complexity.

Do not introduce:

- Authentication
- Admin Dashboard
- Database
- CMS
- Social Media Sync
- Analytics System

unless explicitly required in future versions.

---

# Core Principle

The project is content-driven.

Content changes should never require frontend code changes.

Expected workflow:

Update Content
↓
Commit Changes
↓
Deploy
↓
Frontend Updates Automatically

---

# Technology Stack

Framework:

- Next.js (App Router)

Language:

- TypeScript

API Layer:

- Route Handlers

Storage:

- JSON Files

Assets:

- Local Static Assets

Deployment:

- Vercel

Database:

- None (V1)

---

# Content Scope

The backend manages four content domains.

1. Projects
2. Certificates
3. Gallery
4. Creations

No additional content types should be introduced unless approved.

---

# Projects

Projects represent portfolio work.

Projects support:

- Featured Projects
- Public Projects
- Private Projects

Featured ordering uses:

priority: number

Routing:

/projects/[slug]

Public projects may contain:

- Demo URL
- GitHub URL

Private projects may contain:

- Screenshots
- Description

without exposing source code or deployments.

---

# Certificates

Certificates represent learning achievements and certifications.

Each certificate has:

- Detail Page
- Cover Image
- Description

Routing:

/certificates/[slug]

---

# Gallery

Gallery represents personal journey documentation.

Examples:

- Campus Activities
- Competitions
- Workshops
- Events
- Community Activities

Gallery intentionally remains simple.

Each item contains:

- Image
- Caption

---

# Creations

Creations represent personal branding content.

Supported Platforms:

- TikTok
- Instagram

Each content item contains:

- Thumbnail
- Title
- URL

When clicked:

User
↓
Redirect
↓
Original Social Media Content

No API synchronization is required.

Content is managed manually.

---

# Asset Strategy

All assets are stored inside this repository.

Structure:

public/
├── projects/
├── certificates/
├── gallery/
└── creations/

The backend owns all assets.

Frontend applications should only consume asset URLs returned by APIs.

---

# API Philosophy

All frontend applications must communicate through APIs.

Never access JSON files directly.

Examples:

/api/projects
/api/projects/[slug]

/api/certificates
/api/certificates/[slug]

/api/gallery

/api/creations

Consistency is more important than complexity.

---

# Development Rules

1. Keep architecture simple.

2. Prefer readability over clever implementations.

3. Route handlers must never contain hardcoded content.

4. JSON files are the source of truth.

5. Assets must remain inside public/.

6. Follow TypeScript best practices.

7. Maintain backward compatibility whenever possible.

8. Avoid overengineering.

---

# Success Criteria

The project is successful when:

✓ Portfolio data is fully centralized

✓ Frontend consumes data through APIs

✓ Assets are managed in one location

✓ Deployment works on Vercel

✓ New content can be added without modifying frontend code

✓ Future migration to a database remains possible

---

# Reading Order For AI Agents

Before generating code, read documents in the following order:

1. 00-master-context.md
2. 01-backend-overview.md
3. 02-folder-structure.md
4. 03-data-schema.md
5. 04-api-design.md
6. 05-content-management.md
7. 06-development-roadmap.md

The AI agent should follow these documents as the primary source of truth for the project.

# End of Document
