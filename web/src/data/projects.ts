export interface Project {
  id: string;
  role: {
    de: string;
    en: string;
  };
  company: string;
  timespan: {
    de: string;
    en: string;
  };
  summary: {
    de: string;
    en: string;
  };
  responsibilities: {
    de: string[];
    en: string[];
  };
  keyTech: string[];
  fullTechStack: string[];
}

export const projects: Project[] = [
  {
    id: 'compeople-2025',
    role: {
      de: 'Senior Software Engineer',
      en: 'Senior Software Engineer'
    },
    company: 'compeople AG',
    timespan: {
      de: '10/2025 - laufend',
      en: '10/2025 - Present'
    },
    summary: {
      de: 'Full-Stack-Entwicklung und Architekturberatung in Kundenprojekten.',
      en: 'Full-stack development and architecture consulting in customer projects.'
    },
    responsibilities: {
      de: [
        'Entwicklung von Full-Stack-Lösungen für Kundenprojekte',
        'Architekturplanung und technische Konzeption',
        'Implementierung moderner Softwarelösungen',
        'Zusammenarbeit mit interdisziplinären Teams'
      ],
      en: [
        'Development of full-stack solutions for customer projects',
        'Architectural planning and technical design',
        'Implementation of modern software solutions',
        'Collaboration with interdisciplinary teams'
      ]
    },
    keyTech: ['Java', 'Kotlin', 'Spring Boot'],
    fullTechStack: ['Java', 'Kotlin', 'Spring Boot', 'Microservices', 'REST APIs', 'Git']
  },
  {
    id: 'sn-gmbh-2024',
    role: {
      de: 'Senior Software Engineer',
      en: 'Senior Software Engineer'
    },
    company: 'S&N GmbH, Eschborn',
    timespan: {
      de: '2024 - 09/2025',
      en: '2024 - 09/2025'
    },
    summary: {
      de: 'Full-Stack-Entwicklung, Architekturplanung und Implementierung in Kundenprojekten.',
      en: 'Full-Stack development, architectural planning, and implementation in customer projects.'
    },
    responsibilities: {
      de: [
        'Entwicklung von Full-Stack-Lösungen für diverse Kundenprojekte',
        'Architekturplanung und technische Konzeption',
        'Implementierung moderner Softwarelösungen',
        'Zusammenarbeit mit interdisziplinären Teams'
      ],
      en: [
        'Development of Full-Stack solutions for various customer projects',
        'Architectural planning and technical design',
        'Implementation of modern software solutions',
        'Collaboration with interdisciplinary teams'
      ]
    },
    keyTech: ['Java', 'Kotlin', 'Spring Boot'],
    fullTechStack: ['Java', 'Kotlin', 'Spring Boot', 'Microservices', 'REST APIs', 'Git']
  },
  {
    id: 'datagroup-2023',
    role: {
      de: 'Senior Backend Engineer',
      en: 'Senior Backend Engineer'
    },
    company: 'Datagroup, Mainz',
    timespan: {
      de: '11/2023 - 01/2025',
      en: '11/2023 - 01/2025'
    },
    summary: {
      de: 'Entwicklung und Betreuung einer Bundessoftware für das Zahlungsmanagement. Migration eines JavaEE-Legacy-Systems zu Spring Boot.',
      en: 'Development and support of a federal software for payment management. Migration of a JavaEE legacy system to Spring Boot.'
    },
    responsibilities: {
      de: [
        'Migration von JavaEE-Legacy-System zu Spring Boot',
        'Entwicklung und Wartung des Zahlungsmanagementsystems',
        'Modernisierung der Systemarchitektur',
        'Sicherstellung der Systemstabilität und Performance'
      ],
      en: [
        'Migration of JavaEE legacy system to Spring Boot',
        'Development and maintenance of payment management system',
        'Modernization of system architecture',
        'Ensuring system stability and performance'
      ]
    },
    keyTech: ['JavaEE', 'Spring Boot', 'PostgreSQL'],
    fullTechStack: ['JavaEE', 'Spring Boot', 'PostgreSQL', 'JPA', 'REST', 'Maven', 'Git']
  },
  {
    id: 'publicplan-2023',
    role: {
      de: 'Technical Lead',
      en: 'Technical Lead'
    },
    company: 'PublicPlan / Land NRW, Eschborn',
    timespan: {
      de: '07/2023 - 03/2024',
      en: '07/2023 - 03/2024'
    },
    summary: {
      de: 'Architekturdesign und Aufbau einer cloudbasierten, mandantenfähigen Anwendung für Bürgerservices. Die Rolle umfasste auch Projektplanung und SCRUM Master.',
      en: 'Architectural design and build of a cloud-based, multi-tenant application for citizen services. Role also included project planning and SCRUM Master.'
    },
    responsibilities: {
      de: [
        'Design der Cloud-Architektur für Multi-Tenancy',
        'Implementierung mandantenfähiger Services',
        'Leitung des Entwicklungsteams als SCRUM Master',
        'Projektplanung und Sprint-Koordination',
        'Sicherstellung von Skalierbarkeit und Datenisolation'
      ],
      en: [
        'Design of cloud architecture for multi-tenancy',
        'Implementation of multi-tenant services',
        'Leading the development team as SCRUM Master',
        'Project planning and sprint coordination',
        'Ensuring scalability and data isolation'
      ]
    },
    keyTech: ['Cloud', 'Multi-tenancy', 'SCRUM'],
    fullTechStack: ['Azure', 'Kubernetes', 'Spring Boot', 'Multi-tenancy', 'SCRUM', 'Microservices', 'Docker']
  },
  {
    id: 'bafin-2023',
    role: {
      de: 'Technical Lead',
      en: 'Technical Lead'
    },
    company: 'BaFin, Frankfurt',
    timespan: {
      de: '02/2023 - laufend',
      en: '02/2023 - Present'
    },
    summary: {
      de: 'Verbesserung der externen Präsenz der BaFin auf europäischer Ebene durch Implementierung eines Microprofile-Webservices für die Systemintegration.',
      en: 'Improving the external presence of BaFin at a European level through the implementation of a Microprofile webservice for system integration.'
    },
    responsibilities: {
      de: [
        'Entwicklung von Microprofile-basierten Webservices',
        'Integration europäischer Systeme',
        'Technische Leitung und Architekturentscheidungen',
        'Sicherstellung von Compliance und Sicherheitsstandards'
      ],
      en: [
        'Development of Microprofile-based webservices',
        'Integration of European systems',
        'Technical leadership and architectural decisions',
        'Ensuring compliance and security standards'
      ]
    },
    keyTech: ['Microprofile', 'Java', 'REST'],
    fullTechStack: ['Microprofile', 'Java', 'Jakarta EE', 'REST', 'OpenAPI', 'Docker', 'Kubernetes']
  },
  {
    id: 'com-azure-2022',
    role: {
      de: 'Cloudarchitekt und DevOps',
      en: 'Cloud Architect and DevOps'
    },
    company: 'COM Software GmbH, Eschborn',
    timespan: {
      de: '12/2022 - 02/2023',
      en: '12/2022 - 02/2023'
    },
    summary: {
      de: 'Aufbau und Verwaltung eines Kubernetes-Clusters in Azure. Erstellung von Helm-Templates für eine automatisierte CI/CD-Pipeline mit GitHub Actions.',
      en: 'Setup and management of a Kubernetes cluster in Azure. Created Helm templates for an automated CI/CD pipeline with GitHub Actions.'
    },
    responsibilities: {
      de: [
        'Aufbau und Konfiguration von Kubernetes in Azure (AKS)',
        'Entwicklung von Helm Charts für Deployment-Automatisierung',
        'Implementierung von CI/CD-Pipelines mit GitHub Actions',
        'Infrastructure as Code mit Terraform',
        'Monitoring und Logging-Setup'
      ],
      en: [
        'Setup and configuration of Kubernetes in Azure (AKS)',
        'Development of Helm Charts for deployment automation',
        'Implementation of CI/CD pipelines with GitHub Actions',
        'Infrastructure as Code with Terraform',
        'Monitoring and logging setup'
      ]
    },
    keyTech: ['Kubernetes', 'Azure', 'Helm', 'GitHub Actions'],
    fullTechStack: ['Kubernetes', 'Azure', 'AKS', 'Helm', 'GitHub Actions', 'Docker', 'Terraform', 'ArgoCD']
  },
  {
    id: 'com-codegen-2022',
    role: {
      de: 'Technical Lead',
      en: 'Technical Lead'
    },
    company: 'COM Software GmbH, Eschborn',
    timespan: {
      de: '07/2022 - 12/2022',
      en: '07/2022 - 12/2022'
    },
    summary: {
      de: 'Prototypische Implementierung eines Code-Generators zum Scaffolding von Spring Boot- und Angular-Anwendungsinfrastruktur.',
      en: 'Prototypical implementation of a code generator to scaffold Spring Boot and Angular application infrastructure.'
    },
    responsibilities: {
      de: [
        'Design und Entwicklung eines Code-Generators',
        'Erstellung von Templates für Spring Boot Backend',
        'Erstellung von Templates für Angular Frontend',
        'Automatisierung der Projektstruktur-Generierung',
        'Best-Practice-Definition für Projektsetup'
      ],
      en: [
        'Design and development of a code generator',
        'Creation of templates for Spring Boot backend',
        'Creation of templates for Angular frontend',
        'Automation of project structure generation',
        'Best practice definition for project setup'
      ]
    },
    keyTech: ['Spring Boot', 'Angular', 'Code Generation'],
    fullTechStack: ['Spring Boot', 'Angular', 'TypeScript', 'Java', 'Yeoman', 'Template Engines', 'CLI Tools']
  },
  {
    id: 'dvag-2020',
    role: {
      de: 'Technical Lead',
      en: 'Technical Lead'
    },
    company: 'DVAG, Frankfurt',
    timespan: {
      de: '02/2020 - 12/2022',
      en: '02/2020 - 12/2022'
    },
    summary: {
      de: 'Design und Entwicklung eines Systems zur Orchestrierung der Migration persönlicher Daten von einem Legacy-System zu Azure mittels Batch-Verarbeitung.',
      en: 'Design and development of a system to orchestrate the migration of personal data from a legacy system to Azure via batch processing.'
    },
    responsibilities: {
      de: [
        'Architekturdesign für Datenmigrationssystem',
        'Implementierung von Batch-Processing-Workflows',
        'Migration von Legacy-Daten zu Azure Cloud',
        'Sicherstellung von Datenintegrität und -sicherheit',
        'Performance-Optimierung für große Datenmengen'
      ],
      en: [
        'Architectural design for data migration system',
        'Implementation of batch processing workflows',
        'Migration of legacy data to Azure Cloud',
        'Ensuring data integrity and security',
        'Performance optimization for large data volumes'
      ]
    },
    keyTech: ['Azure', 'Batch Processing', 'Java'],
    fullTechStack: ['Azure', 'Azure Batch', 'Spring Batch', 'Java', 'SQL Server', 'Event Hub', 'Storage Accounts']
  },
  {
    id: 'drv-2019',
    role: {
      de: 'Full-Stack Developer',
      en: 'Full-Stack Developer'
    },
    company: 'DRV Hessen, Frankfurt',
    timespan: {
      de: '10/2019 - 01/2020',
      en: '10/2019 - 01/2020'
    },
    summary: {
      de: 'Entwicklung eines Systems für die digitale Kommunikation zwischen Kliniken und der DRV. Erstellung von Datenanalysen und Einrichtung von Jenkins-CI-Pipelines.',
      en: 'Developed a system for digital communication between clinics and the DRV. Created data analyses and set up Jenkins CI pipelines.'
    },
    responsibilities: {
      de: [
        'Entwicklung digitaler Kommunikationsschnittstellen',
        'Implementierung von Datenanalyse-Tools',
        'Aufbau von CI/CD-Pipelines mit Jenkins',
        'Integration mit bestehenden Klinik-Systemen'
      ],
      en: [
        'Development of digital communication interfaces',
        'Implementation of data analysis tools',
        'Setup of CI/CD pipelines with Jenkins',
        'Integration with existing clinic systems'
      ]
    },
    keyTech: ['Jenkins', 'Data Analysis', 'Java'],
    fullTechStack: ['Java', 'Spring Boot', 'Jenkins', 'SQL', 'REST APIs', 'Angular', 'Data Analysis']
  },
  {
    id: 'amazon-2019',
    role: {
      de: 'Programmierer / Analyst',
      en: 'Programmer / Analyst'
    },
    company: 'Amazon EU, Luxemburg',
    timespan: {
      de: '01/2019 - 09/2019',
      en: '01/2019 - 09/2019'
    },
    summary: {
      de: 'Automatisierungsentwicklung für interne Systemkonfiguration, automatisierte Dokumentengenerierung und Containerisierung interner Anwendungen.',
      en: 'Automation development for internal system configuration, automated document generation, and containerization of internal applications.'
    },
    responsibilities: {
      de: [
        'Entwicklung von Automatisierungslösungen',
        'Implementierung von Velocity-Templates für Dokumentengenerierung',
        'ZPL-basierte Label-Generierung',
        'Containerisierung mit Docker',
        'Optimierung interner Workflows'
      ],
      en: [
        'Development of automation solutions',
        'Implementation of Velocity templates for document generation',
        'ZPL-based label generation',
        'Containerization with Docker',
        'Optimization of internal workflows'
      ]
    },
    keyTech: ['Velocity', 'ZPL', 'Docker'],
    fullTechStack: ['Java', 'Velocity', 'ZPL', 'Docker', 'Python', 'Bash', 'AWS']
  },
  {
    id: 'com-2018',
    role: {
      de: 'Senior Software Engineer',
      en: 'Senior Software Engineer'
    },
    company: 'COM SOFTWARE GmbH, Eschborn',
    timespan: {
      de: '2018 - 2024',
      en: '2018 - 2024'
    },
    summary: {
      de: 'Full-Stack-Java-Entwicklung in Kundenprojekten, einschließlich Architekturplanung und Implementierung.',
      en: 'Full-Stack Java development in customer projects, including architectural planning and implementation.'
    },
    responsibilities: {
      de: [
        'Full-Stack-Entwicklung mit Java-Technologien',
        'Architekturplanung für Kundenprojekte',
        'Implementierung von End-to-End-Lösungen',
        'Mentoring von Junior-Entwicklern',
        'Technische Beratung der Kunden'
      ],
      en: [
        'Full-Stack development with Java technologies',
        'Architectural planning for customer projects',
        'Implementation of end-to-end solutions',
        'Mentoring of junior developers',
        'Technical consulting for clients'
      ]
    },
    keyTech: ['Java', 'Fullstack', 'Spring'],
    fullTechStack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'REST', 'Microservices']
  },
  {
    id: 'thomas-cook-2018',
    role: {
      de: 'Full-Stack Software Developer',
      en: 'Full-Stack Software Developer'
    },
    company: 'Thomas Cook AG, Oberursel',
    timespan: {
      de: '03/2018 - 12/2018',
      en: '03/2018 - 12/2018'
    },
    summary: {
      de: 'Erweiterung bestehender GWT-Dialoge für Import/Export-Funktionen und Entwicklung einer Kommunikationsschnittstelle zwischen IMS und Java.',
      en: 'Extended existing GWT dialogs for import/export functions and developed a communication interface between IMS and Java.'
    },
    responsibilities: {
      de: [
        'Entwicklung von GWT-basierten Benutzeroberflächen',
        'Implementierung von Import/Export-Funktionalität',
        'Integration mit IMS (Inventory Management System)',
        'Schnittstellenentwicklung zwischen Legacy- und modernen Systemen'
      ],
      en: [
        'Development of GWT-based user interfaces',
        'Implementation of import/export functionality',
        'Integration with IMS (Inventory Management System)',
        'Interface development between legacy and modern systems'
      ]
    },
    keyTech: ['GWT', 'Java', 'IMS'],
    fullTechStack: ['GWT', 'Java', 'IMS', 'JavaScript', 'SQL', 'XML', 'REST']
  },
  {
    id: 'condor-2018',
    role: {
      de: 'Business Analyst / Testing',
      en: 'Business Analyst / Testing'
    },
    company: 'Condor Flugdienst GmbH',
    timespan: {
      de: '03/2018 - 12/2018',
      en: '03/2018 - 12/2018'
    },
    summary: {
      de: 'Analyse und Erfassung von Anforderungen (Waterfall/Agile) für eine neue Online-Präsenz. Durchführung manueller und automatisierter Tests von Anwendungen.',
      en: 'Analyzed and captured requirements (Waterfall/Agile) for a new online presence. Conducted manual and automated testing of applications.'
    },
    responsibilities: {
      de: [
        'Anforderungsanalyse in Waterfall- und Agile-Projekten',
        'Erstellung von User Stories und Akzeptanzkriterien',
        'Durchführung manueller Tests',
        'Entwicklung automatisierter Testszenarien',
        'Qualitätssicherung der Online-Plattform'
      ],
      en: [
        'Requirements analysis in Waterfall and Agile projects',
        'Creation of user stories and acceptance criteria',
        'Execution of manual tests',
        'Development of automated test scenarios',
        'Quality assurance of online platform'
      ]
    },
    keyTech: ['Agile', 'QA', 'Testing'],
    fullTechStack: ['JIRA', 'Selenium', 'TestNG', 'Agile', 'Scrum', 'Manual Testing', 'Test Automation']
  }
];

export const skills = [
  'Java',
  'Kotlin',
  'Spring Boot',
  'Microprofile',
  'Kubernetes',
  'Azure',
  'AWS',
  'DevOps',
  'CI/CD',
  'Docker',
  'Helm',
  'Terraform',
  'SCRUM',
  'Agile',
  'Angular',
  'TypeScript',
  'REST APIs',
  'Microservices',
  'PostgreSQL',
  'Git',
  'GitHub Actions',
  'Jenkins'
];

export const contactLinks = {
  github: 'https://github.com/tihofman',
  linkedin: 'https://linkedin.com/in/timm-hofmann',
  email: 'mailto:timm.hofmann@example.com'
};
