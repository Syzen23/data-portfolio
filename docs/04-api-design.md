# 04-api-design.md

## Purpose

This document defines all API endpoints provided by the data-portfolio project.

The API serves as the communication layer between backend content and frontend applications.

All frontend applications must consume data through these endpoints.

Direct access to JSON files is prohibited.

---

# API Base URL

Development:

```txt
http://localhost:3000/api
```

Production:

```txt
https://data-portfolio.vercel.app/api
```

---

# Response Standard

All endpoints must return a consistent response structure.

Success:

```json
{
  "success": true,
  "data": []
}
```

Single Item:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Resource not found"
}
```

---

# Projects API

Purpose:

Provide project data for:

- Featured Projects
- Projects Grid
- Project Detail Page

---

## GET /api/projects

Description:

Returns all projects.

Response:

```json
{
  "success": true,
  "data": []
}
```

Behavior:

- Sort by priority ascending
- Public and private projects included
- Return summary information

Frontend Usage:

```txt
Projects Section
Featured Projects
Projects Grid
```

---

## GET /api/projects/[slug]

Description:

Returns a single project.

Example:

```txt
/api/projects/pos-system
```

Response:

```json
{
  "success": true,
  "data": {}
}
```

Behavior:

- Search by slug
- Return full project details
- Return screenshots
- Return external links

Frontend Usage:

```txt
Project Detail Page
```

---

# Certificates API

Purpose:

Provide certificate information.

---

## GET /api/certificates

Description:

Returns all certificates.

Response:

```json
{
  "success": true,
  "data": []
}
```

Frontend Usage:

```txt
Certificates Section
```

---

## GET /api/certificates/[slug]

Description:

Returns a single certificate.

Example:

```txt
/api/certificates/dicoding-frontend
```

Response:

```json
{
  "success": true,
  "data": {}
}
```

Frontend Usage:

```txt
Certificate Detail Page
```

---

# Gallery API

Purpose:

Provide personal journey documentation.

---

## GET /api/gallery

Description:

Returns all gallery items.

Response:

```json
{
  "success": true,
  "data": []
}
```

Behavior:

- Return newest items first

Frontend Usage:

```txt
Gallery Section
Journey Timeline
```

---

# Creations API

Purpose:

Provide social media content data.

---

## GET /api/creations

Description:

Returns all content.

Response:

```json
{
  "success": true,
  "data": []
}
```

Frontend Usage:

```txt
Creations Section
```

---

## GET /api/creations?platform=tiktok

Description:

Returns TikTok content only.

Response:

```json
{
  "success": true,
  "data": []
}
```

Frontend Usage:

```txt
TikTok Tab
```

---

## GET /api/creations?platform=instagram

Description:

Returns Instagram content only.

Response:

```json
{
  "success": true,
  "data": []
}
```

Frontend Usage:

```txt
Instagram Tab
```

---

# Sorting Rules

Projects:

```txt
priority ASC
```

Example:

```txt
1
2
3
4
```

Featured projects should appear first.

---

Certificates:

```txt
newest first
```

---

Gallery:

```txt
newest first
```

---

Creations:

```txt
newest first
```

---

# Error Handling

Resource Not Found:

Status:

```txt
404
```

Response:

```json
{
  "success": false,
  "message": "Resource not found"
}
```

---

Invalid Query:

Status:

```txt
400
```

Response:

```json
{
  "success": false,
  "message": "Invalid query parameter"
}
```

---

Internal Error:

Status:

```txt
500
```

Response:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

# API Design Principles

1. Read-only API

The backend is content-driven.

No create, update, or delete endpoints are required in V1.

---

2. Frontend Friendly

Responses should be easy to consume.

Avoid deeply nested structures.

---

3. Consistent

All endpoints follow the same response pattern.

---

4. Future Ready

The API structure must remain compatible if JSON storage is replaced by a database.

Frontend integrations should not require changes.

---

# V1 Endpoint Summary

```txt
GET /api/projects
GET /api/projects/[slug]

GET /api/certificates
GET /api/certificates/[slug]

GET /api/gallery

GET /api/creations
GET /api/creations?platform=tiktok
GET /api/creations?platform=instagram
```

---

# Out of Scope

The following APIs are not included in V1:

```txt
POST
PUT
PATCH
DELETE

Authentication
Dashboard APIs
Analytics APIs
Realtime APIs
Social Media Sync APIs
```

---

# End of Document
