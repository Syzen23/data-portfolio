# 05-content-management.md

## Purpose

This document defines how content should be managed inside the data-portfolio project.

The project does not include an admin dashboard.

All content is managed manually through JSON files and asset folders.

The goal is to keep content management simple, predictable, and easy to maintain.

---

# Content Management Philosophy

The repository acts as the single source of truth for all portfolio content.

Content updates should not require changes to frontend applications.

Workflow:

```txt id="y6lm8w"
Add Content
↓
Update JSON
↓
Commit Changes
↓
Deploy
↓
Frontend Updates Automatically
```

---

# Content Types

The system manages four content types:

```txt id="q4x6xw"
Projects
Certificates
Gallery
Creations
```

Each type follows its own workflow.

---

# Managing Projects

Location:

```txt id="70x2f0"
src/data/projects.json
```

Assets:

```txt id="4ixev2"
public/projects/
```

---

## Adding a New Project

Step 1

Create project folder.

Example:

```txt id="rvjvdk"
public/projects/inventory-system/
```

---

Step 2

Add project assets.

Example:

```txt id="mzy0kp"
cover.png

screenshot-01.png
screenshot-02.png
screenshot-03.png
```

---

Step 3

Add project object into:

```txt id="e4m49x"
projects.json
```

Example:

```json id="jhpxi0"
{
  "id": "project-005",
  "slug": "inventory-system",
  "title": "Inventory System",
  "priority": 5
}
```

---

Step 4

Commit and deploy.

The project will automatically become available through:

```txt id="s3i3uq"
/api/projects
/api/projects/inventory-system
```

---

# Managing Certificates

Location:

```txt id="3r29eh"
src/data/certificates.json
```

Assets:

```txt id="0a2ghw"
public/certificates/
```

---

## Adding a New Certificate

Step 1

Create certificate folder.

Example:

```txt id="vbj5d5"
public/certificates/dicoding-backend/
```

---

Step 2

Add certificate image.

Example:

```txt id="g6zk1e"
cover.png
```

---

Step 3

Add certificate object into:

```txt id="y90hxw"
certificates.json
```

---

Step 4

Commit and deploy.

The certificate becomes available through:

```txt id="6pl40l"
/api/certificates
/api/certificates/dicoding-backend
```

---

# Managing Gallery

Location:

```txt id="5umz8r"
src/data/gallery.json
```

Assets:

```txt id="nq48dz"
public/gallery/
```

---

## Adding Gallery Content

Step 1

Upload image.

Example:

```txt id="8f60y4"
gallery-010.png
```

---

Step 2

Add object into:

```txt id="wriz8w"
gallery.json
```

Example:

```json id="quz3j0"
{
  "id": "gallery-010",
  "image": "/gallery/gallery-010.png",
  "caption": "Participated in national coding competition."
}
```

---

Step 3

Commit and deploy.

The gallery item becomes available through:

```txt id="9qvuxc"
/api/gallery
```

---

# Managing Creations

Location:

```txt id="2dijdb"
src/data/creations.json
```

Assets:

```txt id="rvg0a6"
public/creations/
```

---

## TikTok Content

Assets:

```txt id="ijjvm8"
public/creations/tiktok/
```

---

Example:

```txt id="4zv2y3"
content-001.png
content-002.png
```

---

JSON Example:

```json id="a9v0u9"
{
  "id": "creation-001",
  "platform": "tiktok",
  "title": "Building POS System",
  "thumbnail": "/creations/tiktok/content-001.png",
  "url": "https://tiktok.com/..."
}
```

---

## Instagram Content

Assets:

```txt id="3m87vh"
public/creations/instagram/
```

---

Example:

```txt id="mf8pmr"
content-001.png
content-002.png
```

---

JSON Example:

```json id="jcy1m0"
{
  "id": "creation-002",
  "platform": "instagram",
  "title": "Developer Journey",
  "thumbnail": "/creations/instagram/content-001.png",
  "url": "https://instagram.com/..."
}
```

---

Step 3

Commit and deploy.

The content automatically becomes available through:

```txt id="7hdkq0"
/api/creations
```

---

# Updating Existing Content

Content updates should only modify:

```txt id="w9c8eb"
JSON files
Images
```

API routes should never require modifications when content changes.

---

# Removing Content

Remove:

```txt id="dy49s5"
JSON entry
```

and

```txt id="86o8nq"
associated asset files
```

Then deploy.

---

# Version Control

Every content change should be committed using descriptive commit messages.

Examples:

```txt id="4slzvk"
feat(projects): add inventory system

feat(certificates): add dicoding backend certificate

feat(gallery): add coding competition photo

feat(creations): add new tiktok content
```

---

# Asset Rules

All assets must:

```txt id="w2k4fx"
Use PNG format

Be optimized before upload

Follow naming conventions
```

Avoid:

```txt id="j5imch"
IMG_1234.png

Screenshot Final Final.png

New Project Image.png
```

---

# Content Ownership

This repository is the primary content source.

Frontend projects must never duplicate portfolio data.

Frontend applications should only consume API responses.

---

# V1 Management Strategy

Content Management Method:

```txt id="zjpwf2"
Manual JSON Editing
```

Content Deployment:

```txt id="2mcm4t"
Git Commit
↓
Vercel Deploy
```

No Dashboard Required.

---

# End of Document
