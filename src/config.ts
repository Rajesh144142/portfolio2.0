export const siteConfig = {
  name: "Rajesh Kumar Halder",
  title: "Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in scalable web applications, cloud-native architectures, and AI-powered backend systems.",
  accentColor: "#1d4ed8",
  profileImage: "/rajesh.jpg",

  social: {
    email: "rajeshkh704435@gmail.com",
    linkedin: "https://www.linkedin.com/in/rajesh-kumar-halder-141666203/",
    twitter: "https://x.com/rajesh_tech0735",
    github: "https://github.com/Rajesh144142",
  },

  aboutMe:
    "Full Stack Software Engineer who designs and builds scalable, production-grade systems from the ground up. Strong individual contributor with proven experience leading cross-functional teams to deliver solutions at scale. Gen AI enthusiast passionate about integrating intelligent automation into enterprise applications.",

  skills: [
    // Languages
    "JavaScript",
    "TypeScript",
    "Python",
    "C",
    "C++",
    "SQL",

    // Frontend
    "React",
    "Redux",
    "Tailwind CSS",
    "Material UI",

    // Backend
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST APIs",
    "WebSockets",

    // Databases & ORM
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS RDS",
    "DynamoDB",
    "TypeORM",
    "Sequelize",

    // Cloud & DevOps
    "AWS EC2",
    "AWS Lambda",
    "AWS S3",
    "AWS API Gateway",
    "AWS Amplify",
    "Docker",
    "Kubernetes",
    "Nginx",

    // Messaging & Streaming
    "Kafka",

    // AI & Automation
    "AutoGen",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "RAG",
    "Fine-tuning",
    "Agents",
    "LLMs",

    // Tools
    "Git",
    "GitLab",
    "Postman",
  ],

  projects: [
    {
      name: "TaskFlow Pro",
      description:
        "Enterprise task and meeting management platform with real-time updates, background job scheduling, and role-based access control.",
      link: "https://github.com/Rajesh144142/taskflow-pro",
      skills: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "AWS RDS",
        "WebSockets",
        "JWT",
        "APScheduler",
        "Docker",
        "Nginx",
      ],
    },
    {
      name: "FolksLet",
      description:
        "Full-stack social media application featuring secure authentication, real-time chat, and scalable backend APIs.",
      link: "https://github.com/Rajesh144142/FolksLet",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "Nginx",
      ],
    },
    {
      name: "Black Rhino – Automated BRSR System",
      description:
        "AI-driven BRSR report generation system using AutoGen agents and FastAPI microservices with scheduled workflows.",
      link: "",
      skills: [
        "Python",
        "FastAPI",
        "AutoGen",
        "Agentic AI",
        "Kafka",
        "AWS EC2",
        "AWS S3",
        "Docker",
      ],
    },
  ],

  experience: [
    {
      company: "Gabriel & Co",
      title: "Associate Software Engineer",
      dateRange: "Mar 2025 – Present",
      bullets: [
        "Led migration for Gemsocean by writing Python scripts for automated media pipeline to process 50K+ images to AWS S3, transitioning from SKU-based to BC item-based identifiers with performance optimization via streaming, batching, and controlled parallelism.",
        "Contributed to B2B website for Gabriel using Node.js, developing frontend and backend business logic for Gabriel University and BA goals modules, including simplified reward flow. Built job-based server scripts for Zoho CRM data synchronization with PostgreSQL.",
        "Engineered end-to-end Employee Management Tool (CBM) using React.js and Node.js/Express with PostgreSQL, implementing RBAC, custom RESTful APIs, and SendGrid API integration—reducing manual follow-ups by 40% for 500+ users.",
        "Built transcribing tool using OpenAI Whisper model with Python, enabling automated audio-to-text conversion for enterprise workflows.",
      ],
    },
    {
      company: "Inventic AI",
      title: "Full Stack Engineer",
      dateRange: "Sep 2024 – Mar 2025",
      bullets: [
        "Architected Inventic.ai V1 platform using Python and FastAPI, implementing transaction monitoring logic and constructing custom debugging tools. Integrated Agentic AI (AutoGen) APIs for intelligent negative news detection with enterprise-grade monitoring capabilities.",
        "Designed automated BRSR generation system for Black Rhino using Python backend, creating workflow that processes data through AutoGen agents to generate structured reports. Built FastAPI microservices with cronjob-based automated data fetching—reducing manual effort by 50%.",
        "Implemented RAG (Retrieval-Augmented Generation) pipelines and fine-tuning workflows for LLM models, enabling context-aware agent systems for intelligent document processing and analysis.",
        "Deployed production systems on AWS EC2 with Dockerized services and Nginx reverse proxy, ensuring high availability and scalable infrastructure.",
      ],
    },
    {
      company: "Vitto Money",
      title: "Full Stack Developer Intern",
      dateRange: "Mar 2024 – Sep 2024",
      bullets: [
        "Spearheaded loan processing system development including KYC, credit scoring via third-party APIs, and disbursement—achieving 40% reduction in processing time.",
        "Designed key features in scalable admin dashboard for Midland, enhancing user experience and contributing to 25% efficiency boost.",
      ],
    },
  ],

  education: [
    {
      school: "Government College of Engineering and Textile Technology, West Bengal",
      degree: "B.Tech in Computer Science and Engineering",
      dateRange: "2020 – 2024",
      achievements: ["CGPA: 8.68"],
    },
    {
      school: "Bongaon High School, West Bengal",
      degree: "Higher Secondary & Matriculation",
      dateRange: "2017 – 2020",
      achievements: ["Intermediate: 96.8%", "Matriculation: 87.71%"],
    },
  ],
};
