/**
 * Single source of truth for all portfolio copy.
 * Everything here comes from Rajneesh's resume and earlier project write-ups.
 * Update this file, not the components, when the resume changes. Keep it factual:
 * no metrics or claims that can't be backed up in an interview.
 */

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://port-folio-aed8e.web.app',
  title: 'Rajneesh Kushwaha | Senior Full Stack Developer',
  description:
    'Senior Full Stack Developer with 4+ years of experience building scalable, high-performance web applications with React.js, Next.js, TypeScript, and Node.js.',
};

export const profile = {
  name: 'Rajneesh Kushwaha',
  initials: 'RK',
  role: 'Senior Full Stack Developer',
  availability: 'Open to new opportunities',
  intro:
    'Full Stack Developer with 4+ years of experience building scalable, high-performance web applications. My strength is the frontend, with React.js, Next.js, and TypeScript, backed by hands-on Node.js, Express.js, and REST API work.',
  /** Shown in the hero. */
  primarySkills: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
  summary:
    'Full Stack Developer with 4+ years of experience in developing scalable, responsive, and high-performance web applications. Specialized in React.js, Next.js, JavaScript, and modern frontend technologies, with working experience in Node.js, Express.js, MongoDB, and REST API integration. Experienced in building interactive dashboards, reusable components, data visualization solutions, and optimized user interfaces. Passionate about clean architecture, performance optimization, and delivering high-quality software solutions.',
  about:
    'At NextLoop Technologies I work with designers, backend developers, and product managers to deliver data-intensive product features, and I lead frontend development on the EMS energy management dashboard, where I own the architecture, code reviews, and delivery timelines.',
  email: 'rksatna777888@gmail.com',
  phone: '+91 7803838342',
  phoneHref: 'tel:+917803838342',
  location: 'Indore, Madhya Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/rajneesh112',
  linkedinLabel: 'linkedin.com/in/rajneesh112',
  github: 'https://github.com/rajneeshk7788',
  githubLabel: 'github.com/rajneeshk7788',
  resumeUrl: '/Rajneesh_Kushwaha_Full_Stack_Developer_Resume.pdf',
  resumeFileName: 'Rajneesh_Kushwaha_Full_Stack_Developer_Resume.pdf',
};

export const snapshot = [
  { label: 'Currently', value: 'Software Engineer, NextLoop Technologies LLP' },
  { label: 'Leading', value: 'Frontend for EMS, an Energy Management System' },
  { label: 'Core stack', value: 'React.js, Next.js, TypeScript, Node.js' },
  { label: 'Based in', value: 'Indore, Madhya Pradesh' },
];

export const focusAreas = [
  {
    title: 'Dashboards & data visualization',
    text: 'Interactive charts, data tables, and flow views that make complex data easier to interpret.',
  },
  {
    title: 'Reusable component systems',
    text: 'UI components built for consistency and scalability across a product.',
  },
  {
    title: 'Full stack integration',
    text: 'REST APIs, GraphQL, and authentication connecting the interface to Node.js and Express.js services.',
  },
  {
    title: 'Performance & clean architecture',
    text: 'Refactoring and efficient state management for speed and long-term maintainability.',
  },
];

export const domains = [
  { icon: 'energy', title: 'Energy', text: 'Real-time energy monitoring for EMS.' },
  { icon: 'analytics', title: 'Data & analytics', text: 'Visualization dashboards built for large datasets.' },
  { icon: 'commerce', title: 'E-commerce', text: 'Authenticated storefront, frontend to backend.' },
] as const;

export const journey = [
  { year: '2016', title: 'BSc Computer Science', text: 'Awadhesh Pratap Singh University, Satna' },
  { year: '2019', title: 'MSc Computer Science', text: 'Awadhesh Pratap Singh University, Satna' },
  { year: '2021', title: 'Full stack training', text: 'Universal Informatics, Indore' },
  { year: '2022', title: 'Joined NextLoop', text: 'Software Engineer on data-intensive products' },
  { year: '2023', title: 'Xecta', text: 'Led frontend and interactive data visualizations' },
  { year: '2025', title: 'EMS', text: 'Lead Frontend Developer on the energy dashboard' },
];

export const workProcess = [
  {
    title: 'Understand',
    text: 'Start with designers, backend developers, and product managers to agree what a feature must do and which data it depends on.',
  },
  {
    title: 'Architect',
    text: 'Plan components, state, and API boundaries up front, so the frontend stays consistent as the product grows.',
  },
  {
    title: 'Build',
    text: 'Compose reusable components, charts, and tables, with TanStack Query managing server state and Zod validating the data.',
  },
  {
    title: 'Review & refine',
    text: 'Hold the work to shared standards through code review, then refactor for performance and long-term maintainability.',
  },
];

export type SkillIcon = 'frontend' | 'backend' | 'database' | 'tools';

/** Highlighted in the skills grid. */
export const coreSkills = ['React.js', 'Next.js', 'TypeScript', 'Node.js'];

export const skillGroups: { title: string; icon: SkillIcon; blurb: string; skills: string[] }[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    blurb: 'My core strength: component-driven, responsive interfaces with predictable state.',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Material UI',
      'Tailwind CSS',
      'Redux Toolkit',
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    blurb: 'The services and APIs behind the interface.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Database',
    icon: 'database',
    blurb: 'Document storage for application data.',
    skills: ['MongoDB'],
  },
  {
    title: 'Tools',
    icon: 'tools',
    blurb: 'Version control, builds, containers, and delivery pipelines.',
    skills: ['Git', 'GitHub', 'Vite', 'npm', 'Docker', 'CI/CD'],
  },
];

export const experience = {
  role: 'Software Engineer',
  company: 'NextLoop Technologies LLP',
  location: 'Indore, Madhya Pradesh',
  period: 'Jul 2022 – Present',
  summary:
    'Part of my 4+ years in full stack development. I build and maintain data-intensive product features at NextLoop, working across design, backend, and product.',
  responsibilities: [
    {
      title: 'High-performance apps',
      text: 'Engineered high-performance, responsive web applications using React.js and TypeScript, integrating REST APIs to support data-intensive features.',
    },
    {
      title: 'Cross-functional delivery',
      text: 'Partnered with designers, backend developers, and product managers to deliver and optimize product features.',
    },
    {
      title: 'Refactoring',
      text: 'Refactored existing code to improve application performance, scalability, and long-term maintainability.',
    },
    {
      title: 'Code quality',
      text: 'Strengthened code quality by conducting code reviews and enforcing development best practices.',
    },
    {
      title: 'Reusable components',
      text: 'Built reusable React UI components and implemented efficient state management, improving consistency across the user experience.',
    },
    {
      title: 'Technology evaluation',
      text: 'Evaluated emerging frontend technologies to identify improvements in development efficiency and application performance.',
    },
  ],
};

export type ProjectVisual = 'energy' | 'flow' | 'analytics' | 'records' | 'store';

export type Project = {
  title: string;
  subtitle: string;
  domain: string;
  role?: string;
  period: string;
  /** ISO months used to plot the project timeline. Omitted for undated work. */
  start?: string;
  end?: string;
  description: string;
  features: string[];
  responsibilities: string[];
  outcomes: string[];
  tech: string[];
  visual: ProjectVisual;
  /** Add once public. Cards only show links that exist. */
  links?: { demo?: string; github?: string };
};

export const projects: Project[] = [
  {
    title: 'Xecta Web Application',
    subtitle: 'Responsive, dynamic web application',
    domain: 'Data visualization',
    period: 'May 2023 – Present',
    start: '2023-05',
    description:
      'A responsive, dynamic web application with interactive data visualizations that make complex data easier to interpret.',
    features: [
      'Interactive charts built with React Highcharts',
      'Flow-based views of connected data built with React Flow',
      'Responsive, dynamic interface built with Material-UI and CSS',
    ],
    responsibilities: [
      'Led frontend development of the application.',
      'Built the interactive data visualizations using React Highcharts and React Flow.',
      'Partnered with cross-functional teams to integrate frontend features seamlessly across the application.',
    ],
    outcomes: [
      'Improved UI/UX and performance across the application.',
      'Made complex data easier to interpret through interactive visualizations.',
    ],
    tech: ['React Highcharts', 'React Flow', 'Material-UI', 'CSS'],
    visual: 'flow',
  },
  {
    title: 'EMS Dashboard Application',
    subtitle: 'EMS: Energy Management System',
    domain: 'Energy',
    role: 'Lead Frontend Developer',
    period: '2025 – Present',
    start: '2025-01',
    description:
      'A responsive energy management dashboard for real-time energy monitoring, built around interactive charts, data tables, filters, and tabbed views.',
    features: [
      'Real-time energy monitoring dashboard',
      'Interactive Highcharts charts',
      'MUI DataGrid tables with filters and tabbed views',
      'Zod-validated data with TanStack server-state management',
    ],
    responsibilities: [
      'Led frontend development using React.js, Vite, Material-UI, Tailwind CSS, Zod, Highcharts, and TanStack Query/Table.',
      'Architected reusable UI components, interactive charts, MUI DataGrid tables, filters, and tabbed views.',
      'Owned frontend architecture, code reviews, and delivery timelines, coordinating with backend and design teams.',
    ],
    outcomes: [
      'Improved data accuracy and load performance by implementing Zod validation and TanStack server-state management.',
    ],
    tech: [
      'React.js',
      'Vite',
      'Material-UI',
      'Tailwind CSS',
      'Zod',
      'Highcharts',
      'TanStack Query',
      'TanStack Table',
      'MUI DataGrid',
    ],
    visual: 'energy',
  },
  {
    title: 'Dashboard Application',
    subtitle: 'Data Visualization and Analytics Dashboard',
    domain: 'Analytics',
    period: 'Oct 2022 – Apr 2023',
    start: '2022-10',
    end: '2023-04',
    description: 'An interactive, real-time data visualization and analytics dashboard.',
    features: [
      'Real-time, interactive data visualizations',
      'Analytics views built with Material-UI and Highcharts',
      'Reusable UI components shared across the dashboard',
    ],
    responsibilities: [
      'Enhanced the real-time data visualization dashboard using Material-UI and Highcharts.',
      'Designed reusable UI components for consistency and scalability.',
    ],
    outcomes: ['Delivered efficient performance on large datasets.'],
    tech: ['Material-UI', 'Highcharts'],
    visual: 'analytics',
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Full stack e-commerce web application',
    domain: 'E-commerce',
    period: '3-week project',
    description:
      'A full stack e-commerce web application with authentication, where users register before they can view the store.',
    features: [
      'User registration and authentication',
      'Store content available only to signed-in users',
      'React frontend with an Express.js backend',
    ],
    responsibilities: [
      'Built the frontend with React.',
      'Built the backend with Express.js.',
      'Added user registration and authentication in front of the store.',
    ],
    outcomes: [],
    tech: ['React', 'Express.js', 'Authentication'],
    visual: 'store',
  },
];

/** Personal builds with real screenshots. Add `link` once a deployment is public. */
export const sideProjects: {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
}[] = [
  {
    title: 'EventHub',
    subtitle: 'Events management application',
    image: '/event.webp',
    imageAlt: 'EventHub landing page with the headline Create Events That Inspire',
    description: 'An event management platform with a modern interface and animation throughout.',
    highlights: [
      'Built the events management application',
      'Added smooth animations and transitions',
      'Designed a fully responsive interface',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Weather Dashboard',
    subtitle: 'Real-time weather application',
    image: '/weather.webp',
    imageAlt: 'Weather Dashboard showing current conditions in Indore with humidity, wind, visibility, and pressure',
    description: 'An animated dashboard that shows real-time weather data with city search.',
    highlights: [
      'Displayed real-time weather data using APIs',
      'Implemented smooth UI animations',
      'Built responsive and clean layouts',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
];

export const achievements = [
  {
    context: 'EMS',
    title: 'Lead Frontend Developer on EMS',
    text: 'Own frontend architecture, code reviews, and delivery timelines, coordinating with backend and design teams.',
  },
  {
    context: 'EMS',
    title: 'Better data accuracy and load performance',
    text: 'Implemented Zod validation and TanStack server-state management across the dashboard.',
  },
  {
    context: 'Xecta',
    title: 'Complex data made easier to interpret',
    text: 'Built interactive visualizations with React Highcharts and React Flow, and improved UI/UX and performance.',
  },
  {
    context: 'Dashboard Application',
    title: 'Efficient performance on large datasets',
    text: 'Designed reusable UI components for consistency and scalability in a real-time analytics dashboard.',
  },
  {
    context: 'NextLoop Technologies',
    title: 'Consistent user experience',
    text: 'Built reusable React UI components and efficient state management, improving consistency across products.',
  },
  {
    context: 'NextLoop Technologies',
    title: 'Stronger engineering standards',
    text: 'Strengthened code quality by conducting code reviews and enforcing development best practices.',
  },
];

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Awadhesh Pratap Singh University',
    location: 'Satna, Madhya Pradesh',
    period: 'Jul 2019 – Jun 2021',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Awadhesh Pratap Singh University',
    location: 'Satna, Madhya Pradesh',
    period: 'Jun 2016 – Jul 2019',
  },
];

export const certifications = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Universal Informatics, Indore (professional training)',
    period: 'Aug 2021 – Apr 2022',
  },
  { title: 'The Complete HTML, CSS and JavaScript', issuer: 'Udemy' },
  { title: 'The Complete Java Certification Course' },
];

export const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

export const facts = [
  { value: '4+', label: 'Years of experience' },
  { value: String(projects.length + sideProjects.length), label: 'Projects built' },
  { value: String(domains.length), label: 'Product domains' },
  { value: String(skillGroups.reduce((total, group) => total + group.skills.length, 0)), label: 'Tools & technologies' },
];
