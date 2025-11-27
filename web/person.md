# Product Requirements Document: Personal Webpage for Timm Hofmann

- **Version:** 1.1
- **Date:** 26. November 2025
- **Author:** Gemini CLI
- **Status:** Draft

---

## 1. Introduction & Vision

This document outlines the requirements for a modern, professional, and performant personal webpage for Timm Hofmann, a Fullstack Software Engineer. The primary goal is to effectively showcase his skills and extensive project experience to potential employers, clients, and peers. The website will serve as a dynamic and interactive alternative to a traditional CV.

The project will be built using the **Astro** web framework to ensure a fast, content-focused, and SEO-friendly result.

## 2. Target Audience

- Technical Recruiters and Hiring Managers
- Potential Freelance Clients
- Professional Peers and Colleagues

## 3. Design & Technology Principles

### Design
- **Aesthetic:** Clean, minimalist, and modern. A professional color scheme (e.g., dark blues, grays, and a single accent color) should be used. Ample whitespace and strong typography are key.
- **Interactivity:** User engagement will be enhanced through subtle animations and a signature "morph" transition for the project details view. The experience should feel fluid and responsive.
- **Responsiveness:** The design must be fully responsive and optimized for an excellent viewing experience on all major devices, including desktops, tablets, and mobile phones.

### Technology
- **Framework:** Astro
- **Styling:** Tailwind CSS for a utility-first styling approach.
- **Internationalization:** Astro's built-in i18n features will be used to manage and route content for both English and German languages.
- **Deployment:** The final output will be a static site, deployable on any modern hosting platform (e.g., Vercel, Netlify, GitHub Pages).

## 4. Key Features

### 4.1. Language Switcher
- **Functionality:** A simple UI control (e.g., a toggle showing "DE / EN") will be placed in the header, allowing users to switch between the German and English versions of the site.
- **Persistence:** The chosen language should persist during the user's session.

### 4.2. Hero Section
A full-width section at the top of the page to immediately introduce Timm Hofmann.
- **Content:**
    - **Name:** TIMM HOFMANN
    - **Title:** Fullstack Software Engineer & Cloud Architect
    - **Tagline:** A brief, compelling summary, e.g., "Building robust and scalable software solutions from backend architecture to frontend implementation."
    - **Contact Links:** Icon-based links to GitHub, LinkedIn, and Email. (Placeholders needed).
    - **CTA:** A button labeled "View My Work" that smoothly scrolls the user to the Project Timeline section.

### 4.3. Skills Section
A dedicated section to highlight core competencies.
- **Content:** A curated list of key skills extracted from the CV, presented as styled tags or pills.
- **Example Skills:** Java, Kotlin, Spring Boot, Microprofile, Kubernetes, Azure, DevOps, SCRUM, Angular, GWT.

### 4.4. Project Timeline
The central feature of the webpage. It will display Timm's project history in a vertical timeline format.

#### 4.4.1. Project Card (Default State)
Each project in the timeline will be represented by a card.
- **Layout:** A clean card with clear visual hierarchy.
- **Content:**
    - **Company:** The name of the company/client.
    - **Timespan:** The duration of the project (e.g., "2024 - Present").
    - **Key Tech Stack:** A list of 3-5 primary technologies displayed as small tags.
- **Interaction:** The entire card will be clickable, with a subtle hover effect to indicate interactivity.

#### 4.4.2. Project Modal (Expanded State)
- **Trigger:** A click on a Project Card.
- **Transition:** A smooth **morph transition** that visually expands the card into a full-screen modal view. The animation should feel seamless.
- **Layout:** The modal will present detailed information in a structured and consistent format across all projects.
- **Content:**
    - **Role:** The title held during the project (e.g., "Technical Lead").
    - **Company & Timespan:** Repeated for context.
    - **Project Summary:** A concise paragraph explaining the project's main goal and context.
    - **Key Responsibilities:** A bulleted list detailing the tasks performed and achievements.
    - **Full Tech Stack:** A comprehensive list of all technologies involved.
- **Interaction:** The modal can be closed via an "X" icon or by clicking on the background overlay.

### 4.5. Footer
- **Content:**
    - A copyright notice (© 2025 Timm Hofmann).
    - Repeated social and contact links.

## 5. Internationalization (i18n)
- **Supported Languages:** The website must be fully available in **German (de)** and **English (en)**.
- **Default Language:** German will be the default language for visitors.
- **Routing:** The language will be part of the URL structure (e.g., `/en/about`, `/de/about`).
- **Content:** All text, including UI elements, headers, and project details, must be translated and managed within Astro's i18n system.

## 6. Content: Project Data

All descriptive content in the following table must be provided in both English and German. The German text can be sourced from the CV.

| Role                          | Company                       | Timespan              | Description                                                                                                                              | Key Tech                                         |
| ----------------------------- | ----------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Senior Software Engineer      | S&N GmbH, Eschborn            | 2024 - laufend        | Full-Stack development, architectural planning, and implementation in customer projects.                                                   | `Java`, `Kotlin`                                 |
| Senior Backend Engineer       | Datagroup, Mainz              | 11/2023 - 01/2025     | Development and support of a federal software for payment management. Migration of a JavaEE legacy system to SpringBoot.                 | `JavaEE`, `SpringBoot`                           |
| Technical Lead                | PublicPlan / Land NRW, Eschborn | 07/2023 - 03/2024     | Architectural design and build of a cloud-based, multi-tenant application for citizen services. Role also included project planning and SCRUM Master. | `Cloud`, `Multi-tenancy`, `SCRUM`                |
| Technical Lead                | BaFin, Frankfurt              | 02/2023 - laufend     | Improving the external presence of BaFin at a European level through the implementation of a Microprofile webservice for system integration. | `Microprofile`                                   |
| Cloudarchitekt und DevOps     | COM Software GmbH, Eschborn   | 12/2022 - 02/2023     | Setup and management of a Kubernetes Cluster in Azure. Created Helm templates for an automated CI/CD pipeline with GitHub Actions.           | `Kubernetes`, `Azure`, `Helm`, `GitHub Actions`  |
| Technical Lead                | COM Software GmbH, Eschborn   | 07/2022 - 12/2022     | Prototypical implementation of a code generator to scaffold Spring Boot and Angular application infrastructure.                            | `Spring Boot`, `Angular`, `Code Generation`      |
| Technical Lead                | DVAG, Frankfurt               | 02/2020 - 12/2022     | Design and development of a system to orchestrate the migration of personal data from a legacy system to Azure via batch processing.        | `Azure`, `Batch Processing`                      |
| Full-Stack Developer          | DRV Hessen, Frankfurt         | 10/2019 - 01/2020     | Developed a system for digital communication between clinics and the DRV. Created data analyses and set up Jenkins CI pipelines.          | `Jenkins`, `Data Analysis`                       |
| Programmierer / Analyst       | Amazon EU, Luxemburg          | 01/2019 - 09/2019     | Automation development for internal system configuration, automated document generation, and containerization of internal applications.    | `Velocity`, `ZPL`, `Docker`                      |
| Senior Software Engineer      | COM SOFTWARE GmbH, Eschborn   | 2018 - 2024           | Full-Stack Java development in customer projects, including architectural planning and implementation.                                     | `Java`, `Fullstack`                              |
| Full-Stack Software Developer | Thomas Cook AG, Oberursel     | 03/2018 - 12/2018     | Extended existing GWT dialogs for import/export functions and developed a communication interface between IMS and Java.                  | `GWT`, `Java`, `IMS`                             |
| Business Analyst / Testing    | Condor Flugdienst GmbH        | 03/2018 - 12/2018     | Analyzed and captured requirements (Waterfall/Agile) for a new online presence. Conducted manual and automated testing of applications.    | `Agile`, `QA`, `Testing`                         |

## 7. Non-Functional Requirements

- **Performance:** The site must be highly performant, with a target Google Lighthouse score of 95+ in the Performance category.
- **Accessibility:** Adherence to WCAG 2.1 Level AA standards is required. This includes semantic HTML, keyboard navigability, and proper ARIA attributes.
- **SEO:** Basic on-page SEO must be implemented, including appropriate meta titles, descriptions, and `hreflang` tags for language variants.

## 8. Out of Scope

- A blog or content management system (CMS).
- A database connection. All content will be static.
