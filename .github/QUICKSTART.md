# GitHub Actions Quick Start Guide

## First-Time Setup (5 minutes)

### Step 1: Enable Workflow Permissions

1. Go to your repository on GitHub
2. Click **Settings** → **Actions** → **General**
3. Scroll to "Workflow permissions"
4. Select **"Read and write permissions"**
5. Check **"Allow GitHub Actions to create and approve pull requests"**
6. Click **Save**

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Add remote and push
git remote add origin https://github.com/<username>/<repo>.git
git branch -M main
git push -u origin main
```

### Step 3: Watch the Magic Happen

1. Go to **Actions** tab in your repository
2. You'll see two workflows running:
   - ✅ **CI** - Builds and tests the project
   - ✅ **Build and Push Docker Image** - Creates Docker image

### Step 4: Access Your Docker Image

After the workflow completes:

```bash
# Login to GitHub Container Registry
echo $GITHUB_TOKEN | docker login ghcr.io -u <username> --password-stdin

# Pull and run your image
docker pull ghcr.io/<username>/<repo>:latest
docker run -d -p 8080:80 ghcr.io/<username>/<repo>:latest
```

## Common Tasks

### Make Your Docker Image Public

1. Go to your repository
2. Click **Packages** (right sidebar)
3. Click on your package name
4. Click **Package settings**
5. Scroll to "Danger Zone"
6. Click **Change visibility** → **Public**
7. Confirm

### Create a Release

```bash
# Tag your commit
git tag v1.0.0
git push origin v1.0.0
```

This will:
- Trigger the Docker workflow
- Build with tags: `v1.0.0`, `v1`, `latest`
- Make it easy to rollback versions

### Check Workflow Status

```bash
# Using GitHub CLI
gh run list
gh run view <run-id>

# View logs
gh run view <run-id> --log
```

### Manually Trigger Workflow

Add to your workflow file:

```yaml
on:
  workflow_dispatch:  # Enables manual trigger
  push:
    branches: [main]
```

Then click **Actions** → **Your workflow** → **Run workflow**

## Troubleshooting

### "Resource not accessible by integration"

**Problem:** Workflow can't push to registry

**Solution:**
- Go to Settings → Actions → General
- Enable "Read and write permissions"

### "Package does not exist"

**Problem:** Can't pull Docker image

**Solution:**
- Make sure workflow ran successfully (check Actions tab)
- Make package public (see above)
- Use correct image name: `ghcr.io/<username>/<repo>:latest`

### Workflow Fails on Build

**Problem:** Build step fails

**Solution:**
```bash
# Test locally first
npm ci
npm run build

# Check if it works
npm run preview
```

## Image Tags Explained

After pushing to main:
- `ghcr.io/<user>/<repo>:latest` - Always points to latest main
- `ghcr.io/<user>/<repo>:main` - Latest from main branch
- `ghcr.io/<user>/<repo>:main-abc1234` - Specific commit

After creating tag `v1.2.3`:
- `ghcr.io/<user>/<repo>:v1.2.3` - Exact version
- `ghcr.io/<user>/<repo>:v1.2` - Latest 1.2.x
- `ghcr.io/<user>/<repo>:v1` - Latest 1.x.x

## Best Practices

### 1. Use Semantic Versioning

```bash
# Bug fix
git tag v1.0.1

# New feature
git tag v1.1.0

# Breaking change
git tag v2.0.0
```

### 2. Test Before Pushing

```bash
# Run CI checks locally
npm ci
npm run build
npm test

# Test Docker build
docker build -t test .
docker run -p 8080:80 test
```

### 3. Use Pull Requests

- Create feature branches
- Open PR to `main`
- Workflows run automatically
- Merge when green ✅

### 4. Monitor Your Workflows

- Check Actions tab regularly
- Fix failed builds immediately
- Review build logs for warnings

## Pro Tips

### Clean Up Old Images

```bash
# List all versions
gh api /user/packages/container/<repo>/versions

# Delete old versions (via web UI)
```

Or set up automated cleanup in workflow.

### Add Status Badges

Add to your README.md:

```markdown
[![CI](https://github.com/<user>/<repo>/actions/workflows/ci.yml/badge.svg)](https://github.com/<user>/<repo>/actions/workflows/ci.yml)
[![Docker](https://github.com/<user>/<repo>/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/<user>/<repo>/actions/workflows/docker-publish.yml)
```

### Speed Up Builds

Already optimized with:
- ✅ npm cache
- ✅ Docker layer cache
- ✅ Multi-stage builds

### Deploy Automatically

Add deployment step after build:

```yaml
- name: Deploy to production
  if: github.ref == 'refs/heads/main'
  run: |
    # Your deployment script
    ./deploy.sh
```

## Need Help?

- 📖 Read [workflows/README.md](./workflows/README.md)
- 🐛 Check [GitHub Actions docs](https://docs.github.com/en/actions)
- 💬 Open an issue in this repository

## Next Steps

After setup:

1. ✅ Verify workflows are green
2. ✅ Make Docker image public
3. ✅ Update README badges
4. ✅ Create your first release tag
5. ✅ Set up deployment (optional)

**You're all set! 🚀**
