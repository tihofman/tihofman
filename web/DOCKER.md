# Docker Deployment Guide

This guide explains how to build and run the personal webpage using Docker.

## Prerequisites

- Docker installed on your system ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose (included with Docker Desktop)

## Quick Start

### Using Docker Compose (Recommended)

The easiest way to run the application:

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The website will be available at `http://localhost:8080`

### Using Docker Commands

If you prefer to use Docker commands directly:

```bash
# Build the image
docker build -t timm-hofmann-web .

# Run the container
docker run -d -p 8080:80 --name timm-web timm-hofmann-web

# View logs
docker logs -f timm-web

# Stop and remove the container
docker stop timm-web
docker rm timm-web
```

## Docker Architecture

### Multi-Stage Build

The Dockerfile uses a multi-stage build process:

1. **Builder Stage** (node:20-alpine)
   - Installs Node.js dependencies
   - Builds the Astro static site
   - Creates optimized production assets

2. **Production Stage** (nginx:alpine)
   - Lightweight nginx web server (~40MB)
   - Serves the static HTML, CSS, and JavaScript
   - Includes custom nginx configuration for routing

### Benefits

- **Small Image Size**: Final image is ~40MB (nginx:alpine + static files)
- **Fast Builds**: npm dependencies are cached between builds
- **Production Ready**: Optimized nginx configuration with compression and caching
- **Secure**: Minimal attack surface with Alpine Linux

## Nginx Configuration

The custom nginx configuration (`nginx.conf`) includes:

- **Gzip Compression**: Reduces bandwidth usage
- **Static Asset Caching**: 1-year cache for images, fonts, CSS, and JavaScript
- **i18n Routing**: Proper handling of `/` (German) and `/en/` (English) routes
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, XSS-Protection
- **Health Checks**: Built-in health check endpoint

## Environment Variables

Currently, no environment variables are required. If you need to add configuration:

```yaml
# In docker-compose.yml
environment:
  - NODE_ENV=production
  - SITE_URL=https://yourdomain.com
```

## Building for Production

### Local Build and Test

```bash
# Build the image
docker build -t timm-hofmann-web:latest .

# Test the build
docker run -p 8080:80 timm-hofmann-web:latest

# Visit http://localhost:8080
```

### Building for Different Platforms

If you need to build for different platforms (e.g., ARM64 for AWS Graviton):

```bash
# Build for multiple platforms
docker buildx build --platform linux/amd64,linux/arm64 -t timm-hofmann-web:latest .
```

## Deployment Options

### 1. Docker Hub

```bash
# Tag the image
docker tag timm-hofmann-web:latest yourusername/timm-hofmann-web:latest

# Push to Docker Hub
docker push yourusername/timm-hofmann-web:latest
```

### 2. AWS ECS/Fargate

```bash
# Tag for ECR
docker tag timm-hofmann-web:latest <account-id>.dkr.ecr.<region>.amazonaws.com/timm-hofmann-web:latest

# Push to ECR
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/timm-hofmann-web:latest
```

### 3. Google Cloud Run

```bash
# Tag for GCR
docker tag timm-hofmann-web:latest gcr.io/<project-id>/timm-hofmann-web:latest

# Push to GCR
docker push gcr.io/<project-id>/timm-hofmann-web:latest
```

### 4. Azure Container Registry

```bash
# Tag for ACR
docker tag timm-hofmann-web:latest <registry-name>.azurecr.io/timm-hofmann-web:latest

# Push to ACR
docker push <registry-name>.azurecr.io/timm-hofmann-web:latest
```

## Health Checks

The container includes a health check that runs every 30 seconds:

```bash
# Check container health
docker inspect --format='{{.State.Health.Status}}' timm-web
```

Health check endpoint: `http://localhost/`

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs timm-web

# Check if port is already in use
lsof -i :8080
```

### Build fails

```bash
# Clear Docker cache and rebuild
docker build --no-cache -t timm-hofmann-web .
```

### nginx configuration errors

```bash
# Test nginx config
docker run --rm timm-hofmann-web nginx -t
```

## Performance Optimization

The Docker setup includes:

- **Static asset caching**: 1-year cache headers for immutable assets
- **Gzip compression**: Reduces transfer size by ~70%
- **Minimal base image**: Fast startup and low memory footprint
- **Health checks**: Automatic container restart on failures

## Security Best Practices

- Uses official Alpine-based images (smaller attack surface)
- Runs nginx as non-root user
- Includes security headers
- No sensitive data in the image
- Regular base image updates recommended

## Monitoring

To monitor the container in production:

```bash
# View resource usage
docker stats timm-web

# View logs in real-time
docker logs -f timm-web

# Check health status
docker inspect timm-web | grep Health -A 10
```

## Updating the Application

```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose up -d --build
```

## Clean Up

```bash
# Stop and remove container
docker-compose down

# Remove images
docker rmi timm-hofmann-web

# Clean up unused resources
docker system prune -a
```
