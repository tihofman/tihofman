# Monorepo Setup Guide

This repository uses a monorepo structure with the GitHub Actions workflows at the root level and individual projects in subdirectories.

## 📁 Directory Structure

```
/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                 # CI workflow for all projects
│   │   ├── docker-publish.yml      # Docker build & publish
│   │   └── README.md              # Workflow documentation
│   ├── QUICKSTART.md              # Quick reference guide
│   └── MONOREPO-SETUP.md          # This file
├── docker-compose.yml             # Root-level Docker Compose
├── README.md                      # Main repository README
└── web/                           # Personal webpage project
    ├── .dockerignore
    ├── Dockerfile
    ├── docker-compose.yml         # Project-specific compose file
    ├── src/
    ├── package.json
    └── README.md                  # Project documentation
```

## 🔧 How It Works

### GitHub Actions Workflows

The workflows are configured to work with the monorepo structure using:

1. **`working-directory`** - Specifies which directory to run commands in
2. **`cache-dependency-path`** - Points to the correct package-lock.json
3. **Docker context** - Builds from the correct subdirectory

### Example Workflow Configuration

```yaml
- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'
    cache-dependency-path: web/package-lock.json  # ✅ Points to correct path

- name: Install dependencies
  working-directory: web                          # ✅ Runs in web directory
  run: npm ci

- name: Build Docker image
  uses: docker/build-push-action@v5
  with:
    context: ./web                                # ✅ Build context
    file: ./web/Dockerfile                        # ✅ Dockerfile location
```

## 🚀 Usage

### Local Development

```bash
# From repository root
cd web
npm install
npm run dev

# Or use Docker Compose from root
docker-compose up -d
```

### Docker Build

```bash
# From repository root
docker build -t web ./web

# Or use Docker Compose
docker-compose build
```

### GitHub Actions

Workflows trigger automatically on:
- Push to `main` branch
- Pull requests
- Version tags (e.g., `v1.0.0`)

All project paths are handled automatically by the workflows.

## 📦 Adding New Projects

To add a new project to the monorepo:

### 1. Create Project Directory

```bash
mkdir my-new-project
cd my-new-project
npm init -y
```

### 2. Update Workflows

Add the new project to `.github/workflows/ci.yml`:

```yaml
jobs:
  build-my-project:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: my-new-project/package-lock.json

      - name: Install dependencies
        working-directory: my-new-project
        run: npm ci

      - name: Build
        working-directory: my-new-project
        run: npm run build
```

### 3. Add Docker Support (Optional)

Create `my-new-project/Dockerfile` and update root `docker-compose.yml`:

```yaml
services:
  web:
    # ... existing service

  my-new-project:
    build:
      context: ./my-new-project
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
```

### 4. Update Root README

Add documentation about the new project to the main README.md.

## 🔄 Workflow Paths Reference

### CI Workflow (`ci.yml`)

```yaml
# ✅ All paths relative to repository root
working-directory: web
cache-dependency-path: web/package-lock.json
path: web/dist/
```

### Docker Publish Workflow (`docker-publish.yml`)

```yaml
# ✅ Docker paths
context: ./web
file: ./web/Dockerfile

# ✅ npm paths
working-directory: web
cache-dependency-path: web/package-lock.json
```

## 🐳 Docker Compose Configuration

The repository has two Docker Compose files:

### Root Level (`/docker-compose.yml`)

```yaml
services:
  web:
    build:
      context: ./web      # ✅ Build from web subdirectory
      dockerfile: Dockerfile
```

**Usage:** `docker-compose up` (from root)

### Project Level (`/web/docker-compose.yml`)

```yaml
services:
  web:
    build:
      context: .          # ✅ Build from current directory
      dockerfile: Dockerfile
```

**Usage:** `cd web && docker-compose up`

Both configurations work correctly depending on where you run the command.

## 🔍 Troubleshooting

### Issue: "package-lock.json not found"

**Cause:** Incorrect `cache-dependency-path` in workflow

**Solution:** Verify path in workflow file:
```yaml
cache-dependency-path: web/package-lock.json  # ✅ Correct
cache-dependency-path: package-lock.json      # ❌ Wrong
```

### Issue: "npm ci failed"

**Cause:** Running in wrong directory

**Solution:** Add `working-directory`:
```yaml
- name: Install dependencies
  working-directory: web              # ✅ Add this
  run: npm ci
```

### Issue: Docker build fails to find files

**Cause:** Incorrect context or Dockerfile path

**Solution:** Specify both context and file:
```yaml
with:
  context: ./web                      # ✅ Where to build from
  file: ./web/Dockerfile              # ✅ Which Dockerfile to use
```

### Issue: Artifacts not found

**Cause:** Wrong path in artifact upload

**Solution:** Use path relative to project:
```yaml
with:
  name: dist
  path: web/dist/                     # ✅ From repository root
```

## 📋 Best Practices

### 1. **Consistent Paths**

Always use paths relative to repository root in workflows:
- ✅ `working-directory: web`
- ✅ `path: web/dist/`
- ✅ `context: ./web`

### 2. **Project Independence**

Each project should be self-contained:
- Own package.json
- Own Dockerfile
- Own documentation
- Own .dockerignore

### 3. **Shared Workflows**

Keep workflows at repository root for centralized management:
- Single source of truth
- Easier to maintain
- Consistent across projects

### 4. **Documentation**

Update these files when changing structure:
- Root README.md
- Project READMEs
- Workflow documentation
- This file (MONOREPO-SETUP.md)

## 🎯 Migration Checklist

If migrating to monorepo structure:

- [ ] Move project to subdirectory (e.g., `web/`)
- [ ] Update all workflow files with `working-directory`
- [ ] Update `cache-dependency-path` in workflows
- [ ] Update Docker `context` and `file` paths
- [ ] Create root-level docker-compose.yml
- [ ] Update artifact upload/download paths
- [ ] Update README badges with correct paths
- [ ] Test locally with Docker Compose
- [ ] Test GitHub Actions workflows
- [ ] Update documentation

## 📚 Additional Resources

- [GitHub Actions - Workflow syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Docker Build contexts](https://docs.docker.com/build/building/context/)
- [Monorepo best practices](https://monorepo.tools/)

---

**Last Updated:** November 2025
