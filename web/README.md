# Personal Webpage - Timm Hofmann

[![CI](https://github.com/tihofman/web/actions/workflows/ci.yml/badge.svg)](https://github.com/tihofman/web/actions/workflows/ci.yml)
[![Docker](https://github.com/tihofman/web/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/tihofman/web/actions/workflows/docker-publish.yml)

A modern, performant, and professional personal webpage showcasing skills and project experience. Built with Astro, featuring full internationalization (German/English), a custom design system, and automated CI/CD.

## ✨ Features

- 🌍 **Internationalization**: Full German and English support with URL-based routing
- 🎨 **Custom Design System**: Professional color palette, typography, and spacing tokens
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop
- ♿ **Accessibility**: WCAG 2.1 Level AA compliant with semantic HTML and ARIA labels
- 🚀 **Performance**: Static site generation with 95+ Lighthouse score
- 🎭 **Smooth Animations**: Morph transitions for project modals
- 🔍 **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and hreflang
- 🐳 **Docker Ready**: Multi-stage Docker build with nginx
- 🔄 **CI/CD**: Automated GitHub Actions workflows

## 🚀 Project Structure

```text
/
├── .github/
│   └── workflows/           # GitHub Actions CI/CD
├── public/                  # Static assets
├── src/
│   ├── components/         # Astro components
│   │   ├── Hero.astro
│   │   ├── Skills.astro
│   │   ├── ProjectTimeline.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectModal.astro
│   │   ├── Footer.astro
│   │   └── LanguageSwitcher.astro
│   ├── data/
│   │   └── projects.ts     # Project data (DE/EN)
│   ├── i18n/
│   │   ├── ui.ts           # UI translations
│   │   └── utils.ts        # i18n utilities
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro     # German homepage (/)
│   │   └── en/
│   │       └── index.astro # English homepage (/en/)
│   └── styles/
│       ├── global.css      # Design system tokens
│       └── design-tokens.md
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Docker Compose config
├── nginx.conf              # nginx configuration
└── package.json
```

## 🧞 Commands

### Development

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start dev server at `localhost:4321`            |
| `npm run build`           | Build production site to `./dist/`              |
| `npm run preview`         | Preview build locally before deploying          |

### Docker

| Command                          | Action                                    |
| :------------------------------- | :---------------------------------------- |
| `docker-compose up -d`           | Build and run with Docker Compose         |
| `docker build -t web .`          | Build Docker image                        |
| `docker run -p 8080:80 web`      | Run Docker container                      |

See [DOCKER.md](./DOCKER.md) for detailed Docker documentation.

## 🐳 Docker Deployment

### Quick Start

```bash
# Using Docker Compose (recommended)
docker-compose up -d

# Or using Docker directly
docker build -t timm-hofmann-web .
docker run -d -p 8080:80 timm-hofmann-web
```

Visit `http://localhost:8080`

### GitHub Container Registry

The project automatically builds and publishes Docker images to GitHub Container Registry on every push to `main`.

```bash
# Pull the latest image
docker pull ghcr.io/tihofman/web:latest

# Run it
docker run -d -p 8080:80 ghcr.io/tihofman/web:latest
```

## 🔄 CI/CD with GitHub Actions

This project includes automated workflows:

### 1. **CI Workflow** (`ci.yml`)
- Runs on every push and pull request
- Tests on Node.js 18 and 20
- Builds and verifies the project
- Uploads build artifacts

### 2. **Docker Publish Workflow** (`docker-publish.yml`)
- Triggers on push to `main` and version tags
- Builds multi-platform Docker images (amd64, arm64)
- Pushes to GitHub Container Registry (ghcr.io)
- Creates build provenance attestation

### Setup

1. **Enable Workflow Permissions:**
   - Go to Settings → Actions → General
   - Set "Workflow permissions" to "Read and write permissions"

2. **Make Package Public (optional):**
   - After first workflow run, go to Packages
   - Click on your package → Settings
   - Change visibility to Public

See [.github/workflows/README.md](./.github/workflows/README.md) for detailed documentation.

## 📝 Configuration

### Update Contact Information

Edit `src/data/projects.ts` and update the contact links:

```typescript
export const contactLinks = {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  email: 'mailto:your-email@example.com'
};
```

### Add Site URL

Update `astro.config.mjs` for proper SEO:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ... rest of config
});
```

### Customize Design

Edit design tokens in `src/styles/global.css`:
- Colors, typography, spacing
- Shadows, border radius, transitions
- See `src/styles/design-tokens.md` for documentation

## 🌍 Internationalization

The site supports German (default) and English:

- German: `http://localhost:4321/`
- English: `http://localhost:4321/en/`

Add or modify translations in `src/i18n/ui.ts`.

## 📊 Performance

The site is optimized for performance:

- Static site generation (SSG)
- Minimal JavaScript
- Optimized images and assets
- Gzip compression (in Docker/nginx)
- Asset caching (1-year for static files)

Target Lighthouse score: **95+**

## 🚀 Deployment Options

### Static Hosting
- **Vercel**: `vercel --prod`
- **Netlify**: Connect GitHub repo
- **GitHub Pages**: Set up GitHub Actions
- **Cloudflare Pages**: Connect repo

### Container Platforms
- **AWS ECS/Fargate**: Deploy Docker image
- **Google Cloud Run**: Deploy from ghcr.io
- **Azure Container Instances**: Use container image
- **Kubernetes**: Deploy with Helm

## 📚 Documentation

- [DOCKER.md](./DOCKER.md) - Docker deployment guide
- [.github/workflows/README.md](./.github/workflows/README.md) - CI/CD documentation
- [src/styles/design-tokens.md](./src/styles/design-tokens.md) - Design system tokens
- [person.md](./person.md) - Product requirements document

## 🤝 Contributing

This is a personal project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
