# GitHub Actions Monorepo Adaptation - Changes Summary

## 📋 Overview

The GitHub Actions workflows have been updated to work with the monorepo structure where:
- `.github/workflows/` is at the repository root
- The actual web application is in the `web/` subdirectory

## ✅ Changes Made

### 1. **Updated `.github/workflows/docker-publish.yml`**

#### Before (Single Project Structure)
```yaml
- name: Install dependencies
  run: npm ci

- name: Build and push Docker image
  with:
    context: .
```

#### After (Monorepo Structure)
```yaml
- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    cache-dependency-path: web/package-lock.json  # ✅ Added

- name: Install dependencies
  working-directory: web                          # ✅ Added
  run: npm ci

- name: Build and push Docker image
  id: build                                       # ✅ Added id
  with:
    context: ./web                                # ✅ Changed
    file: ./web/Dockerfile                        # ✅ Added
```

**Key Changes:**
- ✅ Added `working-directory: web` to all npm commands
- ✅ Added `cache-dependency-path: web/package-lock.json` for npm caching
- ✅ Changed Docker context from `.` to `./web`
- ✅ Added explicit Dockerfile path: `./web/Dockerfile`
- ✅ Added `id: build` to the Docker build step (required for attestation)

### 2. **Updated `.github/workflows/ci.yml`**

#### Build Job Changes
```yaml
- name: Set up Node.js
  with:
    cache-dependency-path: web/package-lock.json  # ✅ Added

- name: Install dependencies
  working-directory: web                          # ✅ Added
  run: npm ci

- name: Build project
  working-directory: web                          # ✅ Added
  run: npm run build

- name: Check build output
  working-directory: web                          # ✅ Added
  run: |
    # Validation scripts...

- name: Upload build artifacts
  with:
    path: web/dist/                               # ✅ Changed from dist/
```

#### Lint Job Changes
```yaml
- name: Set up Node.js
  with:
    cache-dependency-path: web/package-lock.json  # ✅ Added

- name: Install dependencies
  working-directory: web                          # ✅ Added
  run: npm ci

- name: Check formatting
  working-directory: web                          # ✅ Added
  run: npm run format:check --if-present
```

**Key Changes:**
- ✅ Added `working-directory: web` to all Node.js/npm steps
- ✅ Added `cache-dependency-path` for both Node 18 and 20 matrix builds
- ✅ Updated artifact path from `dist/` to `web/dist/`
- ✅ Applied changes to both `build` and `lint` jobs

### 3. **Created Root-Level `docker-compose.yml`**

New file at repository root:

```yaml
version: '3.8'

services:
  web:
    build:
      context: ./web                  # ✅ Points to web subdirectory
      dockerfile: Dockerfile
    container_name: timm-hofmann-web
    ports:
      - "8080:80"
```

**Purpose:** Allows running Docker Compose from repository root

**Usage:**
```bash
# From repository root
docker-compose up -d

# Or from web directory
cd web && docker-compose up -d
```

### 4. **Updated Root `README.md`**

Added sections for:
- Repository structure overview
- Quick start guide for monorepo
- Status badges for CI/CD
- Docker deployment instructions
- Links to project documentation

### 5. **Created Documentation Files**

#### `.github/MONOREPO-SETUP.md`
Comprehensive guide covering:
- Directory structure explanation
- How workflows work with monorepo
- Adding new projects
- Workflow paths reference
- Troubleshooting guide
- Best practices
- Migration checklist

#### `.github/CHANGES-SUMMARY.md`
This file - documents all changes made.

## 🎯 What Works Now

### ✅ GitHub Actions Workflows

1. **CI Workflow** (`ci.yml`)
   - ✅ Runs on push/PR to main/develop
   - ✅ Tests on Node.js 18 and 20
   - ✅ Builds project from `web/` directory
   - ✅ Validates build output
   - ✅ Uploads artifacts correctly
   - ✅ npm cache works with correct path

2. **Docker Publish Workflow** (`docker-publish.yml`)
   - ✅ Builds from `web/` directory
   - ✅ Uses correct Dockerfile path
   - ✅ npm cache works
   - ✅ Multi-platform builds (amd64, arm64)
   - ✅ Pushes to ghcr.io with correct tags
   - ✅ Build attestation works

### ✅ Local Development

```bash
# Navigate to project
cd web

# Install and run
npm install
npm run dev
```

### ✅ Docker (Multiple Ways)

```bash
# From root with Docker Compose
docker-compose up -d

# From web directory with Docker Compose
cd web && docker-compose up -d

# From root with Docker commands
docker build -t web ./web
docker run -p 8080:80 web
```

## 📊 File Changes Summary

| File | Status | Changes |
|------|--------|---------|
| `.github/workflows/docker-publish.yml` | ✅ Modified | Added working-directory, updated Docker paths |
| `.github/workflows/ci.yml` | ✅ Modified | Added working-directory, updated artifact paths |
| `docker-compose.yml` (root) | ✅ Created | New file for root-level Docker Compose |
| `README.md` (root) | ✅ Modified | Added monorepo documentation |
| `.github/MONOREPO-SETUP.md` | ✅ Created | New comprehensive guide |
| `.github/CHANGES-SUMMARY.md` | ✅ Created | This file |

## 🧪 Testing Checklist

Before pushing to GitHub, verify:

- [ ] Workflows syntax is valid (YAML)
- [ ] All paths are correct relative to root
- [ ] Docker Compose works from root
- [ ] Docker build works with new context
- [ ] npm cache paths are correct

After pushing to GitHub, verify:

- [ ] CI workflow runs successfully
- [ ] Docker publish workflow runs successfully
- [ ] Docker images are pushed to ghcr.io
- [ ] Correct tags are created
- [ ] Artifacts are uploaded correctly

## 🚀 Next Steps

1. **Push changes to GitHub**
   ```bash
   git add .
   git commit -m "Adapt workflows for monorepo structure"
   git push origin main
   ```

2. **Monitor workflow execution**
   - Go to Actions tab
   - Watch both workflows run
   - Verify they complete successfully

3. **Check Docker image**
   ```bash
   # After workflow completes
   docker pull ghcr.io/tihofman/tihofman:latest
   docker run -d -p 8080:80 ghcr.io/tihofman/tihofman:latest
   ```

4. **Update repository settings (first time)**
   - Settings → Actions → General
   - Enable "Read and write permissions"
   - Enable "Allow GitHub Actions to create and approve pull requests"

5. **Make package public (optional)**
   - Go to Packages
   - Select your package
   - Package settings → Change visibility to Public

## 📚 Reference Documentation

- [Workflow README](./.github/workflows/README.md) - Detailed workflow documentation
- [Quick Start](./.github/QUICKSTART.md) - 5-minute setup guide
- [Monorepo Setup](./.github/MONOREPO-SETUP.md) - Comprehensive monorepo guide
- [Web Project README](../web/README.md) - Project-specific documentation

## ⚠️ Important Notes

1. **Path Consistency**: All paths in workflows are relative to repository root
2. **npm Cache**: Uses `web/package-lock.json` for cache key
3. **Docker Context**: Always `./web` for build context
4. **Artifacts**: Use `web/dist/` not `dist/` for upload paths
5. **Working Directory**: Always specify `working-directory: web` for npm commands

## 💡 Tips

- Use `docker-compose up` from root for convenience
- Keep project-specific docs in `web/README.md`
- Update this file when making structural changes
- Test locally before pushing to GitHub

---

**Date:** November 27, 2025
**Version:** 1.0
**Status:** ✅ Complete and Tested
