export const personalInfo = {
  name: 'Alex Johnson',
  title: 'Full Stack Developer',
  subtitle: 'Building elegant solutions to complex problems',
  tagline: 'I craft fast, accessible, and beautiful web experiences.',
  intro:
    "I'm a passionate full stack developer with 5+ years of experience building scalable web applications. I love turning ideas into reality through clean code, thoughtful architecture, and pixel-perfect design.",
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  availability: 'Open to opportunities',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    resume: '#',
  },
};

export const aboutContent = {
  bio: [
    "Hi! I'm Alex, a full stack developer based in San Francisco. I specialize in building high-performance web applications using modern JavaScript/TypeScript ecosystems.",
    "When I'm not coding, I'm exploring hiking trails, reading tech blogs, or contributing to open-source projects. I believe great software is built at the intersection of technical excellence and exceptional user experience.",
    "I'm currently available for freelance projects and full-time opportunities.",
  ],
  highlights: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Happy Clients', value: '25+' },
    { label: 'Open Source Contributions', value: '100+' },
  ],
};

export const experiences = [
  {
    id: 1,
    company: 'TechCorp Inc.',
    role: 'Senior Full Stack Developer',
    period: 'Jan 2022 – Present',
    location: 'San Francisco, CA',
    description:
      'Led a team of 5 engineers to deliver a SaaS platform used by 50,000+ users. Architected microservices infrastructure and improved performance by 40%.',
    highlights: [
      'Built real-time collaboration features using WebSockets and Redis',
      'Reduced API response time by 40% through query optimization',
      'Mentored 3 junior developers, improving team velocity by 25%',
      'Implemented CI/CD pipeline reducing deployment time from 2h to 15min',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    id: 2,
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    period: 'Jun 2020 – Dec 2021',
    location: 'Remote',
    description:
      'Core engineer on a fintech startup from seed to Series A. Built payment processing features handling $2M+ monthly transactions.',
    highlights: [
      'Developed payment integration with Stripe and Plaid APIs',
      'Built mobile-responsive dashboard with real-time analytics',
      'Achieved 99.9% uptime through robust error handling and monitoring',
      'Reduced infrastructure costs by 30% through architecture optimization',
    ],
    tech: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Stripe', 'GCP'],
  },
  {
    id: 3,
    company: 'Digital Agency Co.',
    role: 'Frontend Developer',
    period: 'Aug 2018 – May 2020',
    location: 'New York, NY',
    description:
      'Delivered 20+ client websites and web apps. Specialized in building pixel-perfect UIs with strong focus on accessibility and performance.',
    highlights: [
      'Built 20+ client projects from design to deployment',
      'Improved Core Web Vitals scores by average 60% across projects',
      'Established component library used across all client projects',
      'Introduced TypeScript to the team, reducing runtime errors by 50%',
    ],
    tech: ['React', 'JavaScript', 'TypeScript', 'CSS/SCSS', 'WordPress'],
  },
];

export const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vue.js', level: 80 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 80 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 82 },
      { name: 'Docker / Kubernetes', level: 78 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Linux / Bash', level: 80 },
      { name: 'Terraform', level: 65 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Jest / Vitest', level: 85 },
      { name: 'Figma', level: 75 },
      { name: 'Jira / Notion', level: 88 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'CloudTask',
    description:
      'A real-time project management platform with AI-powered task prioritization, team collaboration features, and advanced analytics dashboard.',
    image: null,
    tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: 'from-blue-600 to-cyan-500',
  },
  {
    id: 2,
    title: 'FinanceFlow',
    description:
      'Personal finance tracker with bank integrations, spending categorization, budget goals, and beautiful data visualizations.',
    image: null,
    tags: ['Vue.js', 'Python', 'Django', 'Plaid API', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: 'from-emerald-600 to-teal-500',
  },
  {
    id: 3,
    title: 'DevPortal',
    description:
      'Developer documentation platform with interactive API playground, code examples, version management, and team collaboration.',
    image: null,
    tags: ['Next.js', 'TypeScript', 'MDX', 'Prisma', 'Vercel'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: 'from-violet-600 to-purple-500',
  },
  {
    id: 4,
    title: 'ShopSmart',
    description:
      'E-commerce platform with product recommendations engine, inventory management, and seamless checkout flow.',
    image: null,
    tags: ['React', 'Stripe', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: 'from-orange-600 to-amber-500',
  },
  {
    id: 5,
    title: 'ChatBridge',
    description:
      'Multi-platform messaging app with end-to-end encryption, file sharing, and real-time notifications.',
    image: null,
    tags: ['React Native', 'Firebase', 'WebRTC'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: 'from-pink-600 to-rose-500',
  },
  {
    id: 6,
    title: 'DataPulse',
    description:
      'Business intelligence dashboard with customizable widgets, automated reports, and multi-source data connectors.',
    image: null,
    tags: ['D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: 'from-sky-600 to-blue-500',
  },
];
