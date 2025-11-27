# GitHub Actions Workflows

This directory contains automated workflows for building, testing, and deploying the personal webpage.

## Workflows

### 1. `docker-publish.yml` - Build and Push Docker Image

Builds the Astro project and creates a Docker image, then pushes it to GitHub Container Registry (ghcr.io).

**Triggers:**
- Push to `main` branch
- Version tags (e.g., `v1.0.0`, `v1.2.3`)
- Pull requests to `main` (build only, no push)

**What it does:**
1. Checks out the code
2. Sets up Node.js 20
3. Installs dependencies with `npm ci`
4. Builds the Astro project
5. Runs tests (if available)
6. Sets up Docker Buildx for multi-platform builds
7. Logs in to GitHub Container Registry
8. Builds Docker image for linux/amd64 and linux/arm64
9. Pushes image with appropriate tags
10. Creates build provenance attestation

**Image Tags:**
- `latest` - Latest build from main branch
- `main` - Builds from main branch
- `sha-<commit>` - Tagged with commit SHA
- `v1.2.3` - Semantic version tags
- `v1.2` - Major.minor version
- `v1` - Major version

**Accessing the Image:**
```bash
# Pull the latest image
docker pull ghcr.io/<username>/<repo>:latest

# Pull a specific version
docker pull ghcr.io/<username>/<repo>:v1.0.0

# Pull by commit SHA
docker pull ghcr.io/<username>/<repo>:main-abc1234
```

### 2. `ci.yml` - Continuous Integration

Runs build and test checks on every push and pull request.

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

**What it does:**
1. Tests on multiple Node.js versions (18, 20)
2. Builds the project
3. Runs tests
4. Verifies build output (checks for index.html files)
5. Uploads build artifacts (retention: 7 days)
6. Runs linting and formatting checks

**Matrix Testing:**
Tests across Node.js versions to ensure compatibility.

## Setup Instructions

### 1. Enable GitHub Container Registry

GitHub Container Registry (ghcr.io) is enabled by default for all repositories. No additional setup required!

### 2. Set Repository Permissions

The workflows use `GITHUB_TOKEN` which is automatically provided. Ensure your repository has the correct permissions:

1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

### 3. Make Your Package Public (Optional)

By default, packages are private. To make them public:

1. Go to your package page: `https://github.com/<username>/<repo>/pkgs/container/<repo>`
2. Click **Package settings**
3. Scroll to **Danger Zone**
4. Click **Change visibility** → **Public**

### 4. Using the Docker Image

Once the workflow runs successfully:

```bash
# Login to GitHub Container Registry
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Pull and run the image
docker pull ghcr.io/<username>/<repo>:latest
docker run -d -p 8080:80 ghcr.io/<username>/<repo>:latest
```

## Image Naming Convention

The image will be available at:
```
ghcr.io/<github-username>/<repository-name>:<tag>
```

For example:
- `ghcr.io/tihofman/web:latest`
- `ghcr.io/tihofman/web:v1.0.0`
- `ghcr.io/tihofman/web:main-abc1234`

## Secrets and Variables

### Automatic Secrets

- `GITHUB_TOKEN` - Automatically provided by GitHub Actions

### Optional Secrets

If you need to add custom secrets:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secret

Common secrets you might add:
- `DOCKER_USERNAME` - For Docker Hub (if pushing there too)
- `DOCKER_PASSWORD` - For Docker Hub
- `SLACK_WEBHOOK` - For notifications

## Workflow Status Badges

Add status badges to your README:

```markdown
![CI](https://github.com/<username>/<repo>/actions/workflows/ci.yml/badge.svg)
![Docker](https://github.com/<username>/<repo>/actions/workflows/docker-publish.yml/badge.svg)
```

## Advanced Configuration

### Build for Specific Platforms

Edit `docker-publish.yml` and modify the platforms:

```yaml
platforms: linux/amd64,linux/arm64,linux/arm/v7
```

### Add Deployment Step

Add a deployment job after the build:

```yaml
deploy:
  needs: build-and-push
  runs-on: ubuntu-latest
  steps:
    - name: Deploy to production
      run: |
        # Your deployment script
```

### Enable Caching

The workflow already uses GitHub Actions cache for:
- npm dependencies (`cache: 'npm'`)
- Docker layers (`cache-from: type=gha`)

This speeds up builds significantly!

## Troubleshooting

### "Resource not accessible by integration" error

**Solution:** Enable write permissions for GITHUB_TOKEN:
- Settings → Actions → General → Workflow permissions → Read and write permissions

### "Package does not exist" when pulling

**Solution:** Make sure the workflow ran successfully and check package visibility:
- Go to your package settings
- Make it public if needed

### Build fails on `npm ci`

**Solution:** Ensure package-lock.json is committed to the repository:
```bash
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

### Multi-platform build is slow

**Solution:** This is normal. Building for multiple platforms (amd64, arm64) takes longer.
- Remove unused platforms if you don't need them
- Use GitHub Actions cache (already enabled)

## Local Testing

Test the workflow locally using [act](https://github.com/nektos/act):

```bash
# Install act
brew install act

# Run the CI workflow
act -j build

# Run the Docker publish workflow (skip push)
act -j build-and-push -s GITHUB_TOKEN=$GITHUB_TOKEN
```

## Monitoring

### View Workflow Runs

- Go to **Actions** tab in your repository
- Click on a workflow to see runs
- Click on a run to see detailed logs

### View Published Packages

- Go to your repository
- Click **Packages** on the right sidebar
- View all published Docker images

## Security

### Scanning Images

Add a security scan step:

```yaml
- name: Run Trivy vulnerability scanner
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
    format: 'sarif'
    output: 'trivy-results.sarif'
```

### Sign Images

The workflow includes build provenance attestation for supply chain security.

## Performance Tips

1. **Use cache:** Already enabled for npm and Docker
2. **Limit platforms:** Only build for platforms you need
3. **Scheduled cleanup:** Regularly delete old packages
4. **Use workflow_dispatch:** Trigger manual builds when needed

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [Docker Build Push Action](https://github.com/docker/build-push-action)
- [Metadata Action](https://github.com/docker/metadata-action)
