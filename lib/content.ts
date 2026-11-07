/**
 * Single source of truth for all portfolio copy.
 * Everything here comes from Rajneesh's resume. Update this file, not the
 * components, when the resume changes.
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
  intro:
    'I build scalable, responsive, high-performance web applications with React.js and Next.js, from interactive dashboards and data visualization to the Node.js services behind them.',
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
    text: 'REST APIs, authentication, and role-based access connecting the interface to Node.js services.',
  },
  {
    title: 'Performance & clean architecture',
    text: 'Refactoring and efficient state management for speed and long-term maintainability.',
  },
];

export const facts = [
  { value: '4+', label: 'Years of experience' },
  { value: '5', label: 'Featured projects' },
  { value: '6', label: 'Skill domains' },
];

export type SkillIcon = 'frontend' | 'languages' | 'backend' | 'databases' | 'testing' | 'devops';

export const skillGroups: { title: string; icon: SkillIcon; skills: string[] }[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: [
      'React.js',
      'Next.js',
      'Redux Toolkit',
      'Zustand',
      'TanStack Query',
      'TanStack Table',
      'Material-UI',
      'MUI DataGrid',
      'Tailwind CSS',
      'Highcharts',
      'React Flow',
      'Zod',
      'Vite',
      'Responsive Design',
      'Web Accessibility',
    ],
  },
  {
    title: 'Languages',
    icon: 'languages',
    skills: ['JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & APIs',
    icon: 'backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'WebSockets',
      'JWT',
      'OAuth',
      'Role-Based Access Control',
    ],
  },
  {
    title: 'Databases',
    icon: 'databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    title: 'Testing',
    icon: 'testing',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Playwright'],
  },
  {
    title: 'DevOps & Tools',
    icon: 'devops',
    skills: [
      'Git',
      'Docker',
      'AWS',
      'GitHub Actions',
      'CI/CD',
      'Performance Optimization',
      'Code Review',
    ],
  },
];

export const experience = {
  role: 'Software Engineer',
  company: 'NextLoop Technologies LLP',
  location: 'Indore, Madhya Pradesh',
  period: 'Jul 2022 – Present',
  responsibilities: [
    'Engineered high-performance, responsive web applications using React.js and TypeScript, integrating REST APIs to support data-intensive features.',
    'Partnered with designers, backend developers, and product managers to deliver and optimize product features.',
    'Refactored existing code to improve application performance, scalability, and long-term maintainability.',
    'Strengthened code quality by conducting code reviews and enforcing development best practices.',
    'Built reusable React UI components and implemented efficient state management, improving consistency across the user experience.',
    'Evaluated emerging frontend technologies to identify improvements in development efficiency and application performance.',
  ],
};

export type ProjectVisual = 'energy' | 'flow' | 'analytics' | 'records' | 'store';

export type Project = {
  title: string;
  subtitle: string;
  role?: string;
  period: string;
  /** ISO months used to plot the project timeline. Omitted for undated work. */
  start?: string;
  end?: string;
  description: string;
  responsibilities: string[];
  outcomes: string[];
  tech: string[];
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    title: 'EMS Dashboard Application',
    subtitle: 'EMS: Energy Management System',
    role: 'Lead Frontend Developer',
    period: '2025 – Present',
    start: '2025-01',
    description:
      'A responsive energy management dashboard for real-time energy monitoring, built around interactive charts, data tables, filters, and tabbed views.',
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
    title: 'Xecta Web Application',
    subtitle: 'Responsive, dynamic web application',
    period: 'May 2023 – Present',
    start: '2023-05',
    description:
      'A responsive, dynamic web application with interactive data visualizations that present complex data clearly.',
    responsibilities: [
      'Led frontend development using Material-UI and CSS.',
      'Built interactive data visualizations using React Highcharts and React Flow.',
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
    title: 'Dashboard Application',
    subtitle: 'Data Visualization and Analytics Dashboard',
    period: 'Oct 2022 – Apr 2023',
    start: '2022-10',
    end: '2023-04',
    description: 'An interactive, real-time data visualization and analytics dashboard.',
    responsibilities: [
      'Enhanced the real-time data visualization dashboard using Material-UI and Highcharts.',
      'Designed reusable UI components for consistency and scalability.',
    ],
    outcomes: ['Delivered efficient performance on large datasets.'],
    tech: ['Material-UI', 'Highcharts'],
    visual: 'analytics',
  },
  {
    title: 'MediCare',
    subtitle: 'Healthcare Patient Management System',
    period: 'Dec 2021 – Sep 2022',
    start: '2021-12',
    end: '2022-09',
    description:
      'A secure, responsive full stack healthcare application to manage patient records, appointments, and clinical data.',
    responsibilities: [
      'Built reusable UI components using React and TypeScript.',
      'Integrated RESTful APIs for data handling.',
      'Implemented role-based access control (RBAC).',
    ],
    outcomes: ['Optimized performance through efficient state management and API usage.'],
    tech: ['React', 'TypeScript', 'RESTful APIs', 'RBAC'],
    visual: 'records',
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Full stack e-commerce web application',
    period: '3-week project',
    description:
      'An e-commerce web application with authentication, where users register before they can view the store.',
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
    context: 'MediCare',
    title: 'Secure healthcare workflows',
    text: 'Implemented role-based access control for an application managing patient records and clinical data.',
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
