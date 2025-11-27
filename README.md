# Timm Hofmann - Portfolio Repository

[![CI](https://github.com/tihofman/tihofman/actions/workflows/ci.yml/badge.svg)](https://github.com/tihofman/tihofman/actions/workflows/ci.yml)
[![Docker](https://github.com/tihofman/tihofman/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/tihofman/tihofman/actions/workflows/docker-publish.yml)

## 📁 Repository Structure

This repository contains multiple projects:

- **`/web`** - Personal webpage built with Astro
  - Modern, performant portfolio website
  - Full German/English internationalization
  - Automated CI/CD with GitHub Actions
  - Docker containerization with nginx
  - [View Documentation](./web/README.md)

## 🚀 Quick Start

### Personal Webpage

```bash
# Navigate to the web project
cd web

# Install dependencies
npm install

# Start development server
npm run dev

# Or run with Docker from root
docker-compose up -d
```

Visit `http://localhost:4321` (dev) or `http://localhost:8080` (Docker)

### Automated Deployments

Every push to `main` automatically:
- ✅ Builds and tests the project
- ✅ Creates Docker images for amd64 and arm64
- ✅ Pushes to GitHub Container Registry
- ✅ Tags with version numbers and commit SHAs

Pull the latest image:
```bash
docker pull ghcr.io/tihofman/tihofman:latest
docker run -d -p 8080:80 ghcr.io/tihofman/tihofman:latest
```

---

# 💫 About Me:
Currently working for compeople<br>Learning about AI, Rust, Vue


## 🌐 Socials:
[
![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/timm-hofmann-690849180) [
![Twitch](https://img.shields.io/badge/Twitch-%239146FF.svg?logo=Twitch&logoColor=white)](https://twitch.tv/kyrilia) 

# 💻 Tech Stack:

## Docs
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) 
![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white) 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) 
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white) 

## Backend
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) 
![Neo4J](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white) 
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka) 
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) 
![Kotlin](https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white) 
![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white) 
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) 
![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white) 
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)
![OpenAPI](https://img.shields.io/badge/OpenAPI-6BA539?logo=openapiinitiative&logoColor=white&style=for-the-badge)

## DevOps
![Bash Script](https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white) 
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white) 
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) 
![GitLab CI](https://img.shields.io/badge/gitlab%20CI-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white) 
![Bitbucket](https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white) 
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) 
![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white) 
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white) 
![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-FFFFFF?&style=for-the-badge&logo=opentelemetry&logoColor=black) 
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) 
![Helm](https://img.shields.io/badge/Helm-0F1689?logo=helm&logoColor=fff&style=for-the-badge)

## Cloud Systems
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white) 
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 


## Build Systems
![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white) 
![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white) 
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) 
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## WebTech
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) 
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) 
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) 
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white) 
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) 
![Playwright](https://img.shields.io/badge/-playwright-%232EAD33?style=for-the-badge&logo=playwright&logoColor=white) 

## Database
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) 
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) 
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white) 
![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white) 
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white) 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) 


## Design
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) 

## IoT
![Homebridge](https://img.shields.io/badge/homebridge-%23491F59.svg?style=for-the-badge&logo=homebridge&logoColor=white) 
![Raspberry Pi](https://img.shields.io/badge/-Raspberry_Pi-C51A4A?style=for-the-badge&logo=Raspberry-Pi)

# 📊 GitHub Stats:

![](https://github-readme-stats.vercel.app/api?username=tihofman&theme=dark&hide_border=true&include_all_commits=true&count_private=true)<br/>

![](https://nirzak-streak-stats.vercel.app/?user=tihofman&theme=dark&hide_border=true)<br/>

![](https://github-readme-stats.vercel.app/api/top-langs/?username=tihofman&theme=dark&hide_border=true&include_all_commits=true&count_private=true&layout=compact)

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
