import { Project, ExperienceItem, SkillCategory, ServiceItem, EducationItem, ProfileLink } from '../types';

export const personalInfo = {
  name: 'Farid Mia',
  headline: 'Full-Stack Developer | WordPress & Laravel Specialist | AI Automation Engineer',
  shortIntro: 'I build scalable web applications, powerful WordPress solutions, intelligent AI automations, and data-driven digital experiences. With 6+ years of professional development experience, I turn complex ideas into practical, high-quality solutions.',
  email: 'mdfarid7830@gmail.com',
  phone: '+8801739692387',
  location: 'Dhaka, Bangladesh',
  experienceYears: '6+',
  status: 'Available for freelance & international roles',
  social: {
    github: 'https://github.com/faridmia',
    linkedin: 'https://www.linkedin.com/in/farid-mia-b551a9149/',
    wordpress: 'https://profiles.wordpress.org/faridmia/',
    facebook: 'https://www.facebook.com/farid.hasan.79656/',
  }
};

export const credibilityStats = [
  { label: 'Development Experience', value: '6+ Years', detail: 'Continuous engineering since 2019' },
  { label: 'WordPress Product Dev', value: 'Themes & Plugins', detail: 'Commercial releases on ThemeForest & CodeCanyon' },
  { label: 'Full-Stack PHP', value: 'Laravel & OOP', detail: 'Custom MVC, APIs, database optimization' },
  { label: 'AI & Automation', value: 'n8n & Ollama', detail: 'Intelligent workflows & local LLM pipelines' },
];

export const projectsData: Project[] = [
  {
    id: 'easy-hotel-booking',
    title: 'Easy Hotel Booking',
    category: 'WordPress',
    categoryLabel: 'WordPress Plugin Development',
    description: 'WordPress hotel-booking functionality with an emphasis on maintainable code, usability, and reliable plugin architecture.',
    longDescription: 'Engineered as a robust commercial booking management plugin for hospitality websites. Built with strict adherence to WordPress plugin standards, hooks/filters extensibility, custom post types, and optimized database queries for availability scheduling.',
    technologies: ['PHP', 'WordPress Plugin API', 'JavaScript', 'AJAX', 'MySQL', 'Admin Dashboard'],
    liveUrl: 'https://themewant.com/downloads/easy-hotel-booking/',
    isPublicProduct: true,
    statusBadge: 'Commercial Product',
    highlights: [
      'Room availability calendar and instant booking workflow',
      'Extensible settings and hookable action architecture',
      'Optimized query performance for calendar rate checks',
      'Clean translation-ready strings and sanitization'
    ],
    accentColor: '#6366F1',
    imageType: 'hotel',
  },
  {
    id: 'rt-mega-menu-pro',
    title: 'RT Mega Menu Pro',
    category: 'WordPress',
    categoryLabel: 'WordPress Plugin Development',
    description: 'A WordPress mega-menu solution designed to extend website navigation and customization capabilities.',
    longDescription: 'A dynamic, high-performance navigation system for complex e-commerce and corporate websites. Features multi-column responsive grid layouts, custom badge triggers, widgets integration, and lightweight zero-bloat frontend rendering.',
    technologies: ['PHP OOP', 'WordPress Core Nav API', 'CSS Grid & Flexbox', 'Vanilla JS', 'Accessibility'],
    liveUrl: 'https://themewant.com/downloads/rt-mega-menu-pro',
    isPublicProduct: true,
    statusBadge: 'Commercial Product',
    highlights: [
      'Deep integration with native WordPress Walker_Nav_Menu',
      'Visual layout builder with column presets and icon pickers',
      'High-speed frontend script delivery under 15kb',
      'Touch-friendly mobile navigation fallbacks'
    ],
    accentColor: '#38BDF8',
    imageType: 'menu',
  },
  {
    id: 'easy-currency-switcher',
    title: 'Easy Currency Switcher for WooCommerce',
    category: 'WordPress',
    categoryLabel: 'WooCommerce Development',
    description: 'A WooCommerce multicurrency solution focused on flexible currency-switching functionality for online stores.',
    longDescription: 'Published on CodeCanyon. Designed to handle seamless multi-currency conversion, live exchange rates integration, geo-IP auto-detection, and accurate cart & checkout order processing without cache conflicts.',
    technologies: ['PHP', 'WooCommerce Hooks', 'Exchange Rate APIs', 'Session Management', 'REST API'],
    liveUrl: 'https://codecanyon.net/item/easy-currency-switcherwoocommerce-multicurrency-plugin/59845282',
    isPublicProduct: true,
    statusBadge: 'Codecanyon Release',
    highlights: [
      'Automatic or manual live exchange rate updates via financial APIs',
      'GeoIP based customer location detection and currency matching',
      'Full compatibility with standard WooCommerce checkout gateways',
      'Customizable switcher dropdown widget and shortcode support'
    ],
    accentColor: '#10B981',
    imageType: 'currency',
  },
  {
    id: 'histudy-wordpress-theme',
    title: 'HiStudy WordPress Theme',
    category: 'WordPress',
    categoryLabel: 'WordPress Theme Development',
    description: 'An online education theme project involving WordPress development, LMS-related integrations, and ongoing product improvements.',
    longDescription: 'Top-tier ThemeForest education portal theme developed during tenure at Rainbow-Themes. Engineered course listing grids, custom Elementor widgets, LearnPress / Tutor LMS compatibility, and comprehensive demo importer systems.',
    technologies: ['PHP 8', 'Elementor API', 'LearnPress / Tutor LMS', 'WooCommerce', 'Theme Customizer'],
    liveUrl: 'https://themeforest.net/item/histudy-online-courseseducation-wordpress-theme/51609839',
    isPublicProduct: true,
    statusBadge: 'ThemeForest Featured',
    highlights: [
      'LMS integration with course syllabus, quiz, and instructor profiles',
      'Custom Elementor widget suite designed for drag-and-drop course layouts',
      'Optimized asset loading achieving high PageSpeed scores',
      'Ongoing version maintenance and customer technical escalations'
    ],
    accentColor: '#F59E0B',
    imageType: 'education',
  },
  {
    id: 'infinite-notification',
    title: 'Infinite Notification',
    category: 'WordPress',
    categoryLabel: 'WordPress Plugin Development',
    description: 'A publicly available WordPress plugin. Link directly to the WordPress.org listing.',
    longDescription: 'An open-source WordPress plugin hosted on the official WordPress.org repository. Allows website owners to broadcast notices, flash alerts, and marketing popups with granular display rules and timer configurations.',
    technologies: ['PHP', 'WordPress.org SVN', 'JavaScript', 'CSS3', 'Cookie API'],
    liveUrl: 'https://wordpress.org/plugins/infinite-notification/',
    isPublicProduct: true,
    statusBadge: 'WordPress.org Plugin',
    highlights: [
      'Official WordPress Plugin Directory compliant code review',
      'Zero dependency footprint with native JS animations',
      'Targeted rules by post type, page, or user session frequency',
      'Secure settings storage using options API and nonce validation'
    ],
    accentColor: '#8B5CF6',
    imageType: 'notification',
  },
  {
    id: 'laravel-ecommerce',
    title: 'Laravel E-Commerce Platform',
    category: 'Laravel & PHP',
    categoryLabel: 'Laravel & PHP Development',
    description: 'Full-featured modern e-commerce application built with Laravel, featuring dynamic product catalogs, cart & checkout, order tracking, and an administrative dashboard.',
    longDescription: 'Engineered as an end-to-end e-commerce solution utilizing modern Laravel features: Eloquent ORM relations, transactional order handling, secure checkout pipeline, product attribute variations, inventory management, and customer account portals. A comprehensive video walkthrough demonstrates the complete flow from front store to backend administration.',
    technologies: ['Laravel', 'PHP 8.x', 'MySQL', 'Blade', 'Bootstrap', 'JavaScript', 'Payment Gateways', 'Eloquent'],
    videoUrl: 'https://www.youtube.com/watch?v=W416nypdgd0&t=5s',
    isPublicProduct: false,
    statusBadge: 'Video Walkthrough Available',
    highlights: [
      'Complete dynamic catalog with filters, search, and category trees',
      'Cart, guest/user checkout, and order receipt generation',
      'Administrative portal for stock, order status, and customer tracking',
      'Relational database schema with transactional integrity'
    ],
    accentColor: '#EC4899',
    imageType: 'laravel',
  },
  {
    id: 'laravel-pos-business-system',
    title: 'POS & Business Management System',
    category: 'Laravel & PHP',
    categoryLabel: 'Laravel Enterprise Systems',
    description: 'Enterprise Point of Sale (POS) and inventory management solution engineered with Laravel to manage transactions, multi-store stock, supplier invoices, and accounting reports.',
    longDescription: 'Designed for retail and distribution operations. Features barcode-scanning checkout, instant receipt generation, multi-warehouse stock replenishment, supplier credit registers, daily sales summaries, and detailed profit/loss analytics. Demonstrated in a dedicated technical overview video.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'AJAX', 'Chart.js', 'Thermal Printing', 'RBAC'],
    videoUrl: 'https://www.youtube.com/watch?v=mihkI7y4wFI&t=19s',
    isPublicProduct: false,
    statusBadge: 'Video Walkthrough Available',
    highlights: [
      'High-speed POS cash register with barcode and hotkey support',
      'Real-time inventory levels, reorder alerts, and supplier procurement',
      'Customer ledger, supplier invoices, and expense management',
      'Comprehensive financial reporting: daily sales, revenue, and gross profit'
    ],
    accentColor: '#F59E0B',
    imageType: 'pos',
  },
  {
    id: 'n8n-automation-local-ai',
    title: 'n8n Automation & Local AI Pipelines',
    category: 'Automation & AI',
    categoryLabel: 'Automation & AI Experimentation',
    description: 'Workflow automation experiments integrating n8n with AI services and local language models using Ollama.',
    longDescription: 'Exploratory and production-grade automation systems connecting external webhooks, WordPress lifecycle hooks, and local Ollama-hosted LLMs. Designed for data extraction, automated summarization, lead routing, and privacy-first local document reasoning.',
    technologies: ['n8n Workflow', 'Ollama (Local LLM)', 'REST Webhooks', 'Python / Bash', 'JSON Parsing', 'Telegram / Slack API'],
    isPublicProduct: false,
    statusBadge: 'AI & Automation Showcase',
    highlights: [
      'Self-hosted n8n instance orchestrated with local Ollama model endpoints',
      'Automated form submission enrichment and sentiment categorization',
      'Zero third-party token cost on sensitive internal document summaries',
      'Event-driven triggers from WordPress post revisions to social channels'
    ],
    accentColor: '#06B6D4',
    imageType: 'automation',
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'reacthemes',
    company: 'ReacThemes',
    role: 'WordPress Plugin Developer',
    period: 'August 2025 – Present',
    isCurrent: true,
    bullets: [
      'Maintain existing production plugin codebases and resolve high-priority functional bugs.',
      'Implement new feature specifications and improve overall product stability and resilience.',
      'Work on scaling plugin architectures to comfortably handle large analytics and reporting datasets.',
      'Optimize complex database queries to reduce execution times and memory footprint under high traffic.'
    ],
    skills: ['PHP 8.2+', 'WordPress Plugin API', 'MySQL Optimization', 'Custom Post Types', 'REST Endpoints', 'Git']
  },
  {
    id: 'rainbow-themes',
    company: 'Rainbow-Themes',
    role: 'WordPress Developer / Team Lead',
    period: 'March 2024 – July 2025',
    bullets: [
      'Contributed directly to the main company digital properties and lead development on the HiStudy theme ecosystem.',
      'Engineered WooCommerce modules, custom shopping experiences, and theme performance enhancements.',
      'Supported regular theme release cycles, patch updates, and escalated customer technical support issues.',
      'Led WordPress development activities, guiding junior developers and enforcing quality standards.'
    ],
    skills: ['WordPress Architecture', 'Elementor Widgets', 'WooCommerce Extensions', 'Code Review', 'Team Leadership']
  },
  {
    id: 'rstheme',
    company: 'RSTheme',
    role: 'Web Developer / Theme Development Team Lead',
    period: 'October 2022 – February 2024',
    bullets: [
      'Developed and maintained multiple commercial WordPress themes published on international marketplaces.',
      'Investigated and resolved intricate bugs in client event booking and ticketing plugins.',
      'Handled specialized client technical support tickets, diagnosing environment-specific conflicts.',
      'Coordinated sprint tasks and theme development workflows across team members.'
    ],
    skills: ['Theme Development', 'Plugin Debugging', 'Technical Support', 'Customizer API', 'Cross-browser Compatibility']
  },
  {
    id: 'smartdatasoft',
    company: 'SmartDataSoft',
    role: 'WordPress & PHP Developer',
    period: 'December 2019 – September 2022',
    bullets: [
      'Developed and shipped commercial WordPress themes and functional plugins from wireframes to release.',
      'Engineered a PrestaShop WhatsApp Live Chat customer communication module.',
      'Authored clear technical documentation and handled customer inquiries on marketplace forums.',
      'Contributed to bespoke PHP-based web solutions, custom scripts, and third-party API integrations.'
    ],
    skills: ['PHP', 'WordPress', 'PrestaShop Module Dev', 'JavaScript', 'Technical Writing', 'Customer Support']
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Databases',
    description: 'Robust server-side development with modern PHP, MVC patterns, and relational data modeling.',
    skills: [
      { name: 'PHP', level: 'Production' },
      { name: 'Laravel', level: 'Production' },
      { name: 'OOP & Clean Code', level: 'Production' },
      { name: 'MVC Architecture', level: 'Production' },
      { name: 'REST APIs', level: 'Production' },
      { name: 'MySQL', level: 'Production' },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'SQLite', level: 'Proficient' },
      { name: 'MongoDB', level: 'Proficient' },
    ]
  },
  {
    id: 'wordpress',
    title: 'WordPress Engineering',
    description: 'Deep platform expertise spanning custom theme/plugin development, WooCommerce, and APIs.',
    skills: [
      { name: 'Custom Plugin Development', level: 'Production' },
      { name: 'Custom Theme Development', level: 'Production' },
      { name: 'WooCommerce Customization', level: 'Production' },
      { name: 'Elementor Extensions', level: 'Production' },
      { name: 'WordPress REST API', level: 'Production' },
      { name: 'Plugin Architecture', level: 'Production' },
      { name: 'Gutenberg Blocks', level: 'Proficient' },
      { name: 'Licensing Systems', level: 'Production' },
      { name: 'Security & Sanitization', level: 'Production' },
      { name: 'Performance Optimization', level: 'Production' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible user interfaces with modern JavaScript and utility styling.',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Production' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'React.js', level: 'Proficient' },
      { name: 'Redux', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Production' },
      { name: 'Bootstrap', level: 'Production' },
      { name: 'HTML5 Semantic', level: 'Production' },
      { name: 'CSS3 / SASS', level: 'Production' },
      { name: 'jQuery', level: 'Production' },
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Workflow Automation',
    description: 'Complementary skills connecting webhooks, intelligent automation, and local LLM inference.',
    skills: [
      { name: 'n8n Workflow Automation', level: 'Proficient' },
      { name: 'Ollama & Local LLMs', level: 'Experimentation' },
      { name: 'AI API Integrations', level: 'Proficient' },
      { name: 'Webhook Pipelines', level: 'Proficient' },
      { name: 'Business Process Logic', level: 'Proficient' },
    ]
  },
  {
    id: 'devops-tools',
    title: 'Tools & Infrastructure',
    description: 'Version control, automated build pipelines, and reliable hosting environments.',
    skills: [
      { name: 'Git & GitHub', level: 'Production' },
      { name: 'GitHub Actions (CI/CD)', level: 'Proficient' },
      { name: 'Docker Containers', level: 'Proficient' },
      { name: 'Linux Terminal / Bash', level: 'Proficient' },
      { name: 'Composer & NPM', level: 'Production' },
      { name: 'Vite & Webpack', level: 'Proficient' },
    ]
  },
  {
    id: 'marketing-seo',
    title: 'Digital Marketing & Growth',
    description: 'Complementary growth knowledge applied to improve conversions and technical search rankings.',
    skills: [
      { name: 'Technical SEO', level: 'Production' },
      { name: 'Google Ads (Search & Display)', level: 'Proficient' },
      { name: 'Facebook / Meta Ads', level: 'Proficient' },
      { name: 'Meta Business Manager', level: 'Proficient' },
      { name: 'Analytics & Event Tracking', level: 'Proficient' },
      { name: 'Core Web Vitals Optimization', level: 'Production' },
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'wp-plugins',
    title: 'WordPress Plugin Development',
    shortDesc: 'Custom plugins, integrations, maintenance, and reliable functionality.',
    fullDesc: 'Custom WordPress plugins tailored to your specific business requirements. Built with modular OOP architecture, custom tables where necessary, secure AJAX/REST endpoints, and seamless compatibility with modern WordPress versions.',
    features: [
      'Custom post types, taxonomies & metadata',
      'Security-hardened inputs, nonces & permission checks',
      'Performance-tuned database queries',
      'Commercial marketplace release preparation'
    ],
    icon: 'Package'
  },
  {
    id: 'wp-themes',
    title: 'WordPress Theme Development',
    shortDesc: 'Custom themes, responsive layouts, Gutenberg blocks, and Elementor extensions.',
    fullDesc: 'Pixel-perfect, high-performance themes crafted from custom Figma designs or built for ThemeForest distribution. Fast loading speeds, accessible markup, and tailored controls for effortless site administration.',
    features: [
      'Custom Elementor & Gutenberg custom block widgets',
      'Zero-dependency lightweight CSS/JS architectures',
      'Comprehensive customizer options & theme settings',
      'Full mobile responsiveness and cross-browser testing'
    ],
    icon: 'Layout'
  },
  {
    id: 'laravel-dev',
    title: 'Laravel & PHP Development',
    shortDesc: 'Backend systems, REST APIs, database-driven applications, and business logic.',
    fullDesc: 'Enterprise-grade web applications utilizing the elegance and stability of the Laravel framework. From architectural modeling to RESTful APIs powering mobile or single-page apps.',
    features: [
      'REST API design with authentication (Sanctum/Passport)',
      'Eloquent relationships, migrations & database indexing',
      'Background workers, email queues & scheduled tasks',
      'Clean MVC structure with comprehensive error handling'
    ],
    icon: 'Server'
  },
  {
    id: 'woocommerce',
    title: 'WooCommerce Development',
    shortDesc: 'Store customization, payment integrations, product functionality, and extensions.',
    fullDesc: 'Extending WooCommerce beyond default limits. Custom checkout steps, multi-currency engines, custom pricing rules, payment gateway integrations, and ERP/CRM data sync.',
    features: [
      'Custom checkout fields and fee calculations',
      'Multi-currency and dynamic pricing mechanics',
      'Third-party payment & shipping gateway integration',
      'Inventory sync and automated order webhook hooks'
    ],
    icon: 'ShoppingCart'
  },
  {
    id: 'automation-ai',
    title: 'AI & Workflow Automation',
    shortDesc: 'n8n workflows, API automation, and practical AI integrations.',
    fullDesc: 'Connecting disconnected apps and eliminating manual data entry. Building custom n8n scenarios, integrating local Ollama models or hosted AI APIs for intelligent processing and automated alert notifications.',
    features: [
      'Event-triggered webhooks between CRM, web apps & chat',
      'Automated data transformation and report distribution',
      'Local LLM inference setups using Ollama for privacy',
      'Intelligent lead routing and classification'
    ],
    icon: 'Cpu'
  },
  {
    id: 'optimization',
    title: 'Website Optimization & Maintenance',
    shortDesc: 'Bug fixes, performance improvements, code maintenance, and technical troubleshooting.',
    fullDesc: 'Revitalizing slow, unstable, or outdated sites. Diagnosing memory leaks, optimizing slow SQL queries, fixing fatal PHP errors, and improving Core Web Vitals to deliver crisp user experiences.',
    features: [
      'Database cleanup, transients removal & index audit',
      'Asset minification, script deferral & caching setup',
      'PHP error log auditing and fatal error remediation',
      'Security patching and theme/plugin version upgrades'
    ],
    icon: 'Zap'
  },
  {
    id: 'marketing-support',
    title: 'Digital Marketing Support',
    shortDesc: 'Google Ads and Meta advertising support, campaign tracking, and analytics.',
    fullDesc: 'Complementary technical marketing services ensuring your conversion pixels, Google Tag Manager, and Meta conversion APIs are firing accurately alongside structured ad campaigns.',
    features: [
      'Google Ads campaign structuring and keyword targeting',
      'Facebook / Meta Pixel & Conversions API integration',
      'Accurate conversion tracking and analytics reporting',
      'Landing page conversion-rate optimization (CRO)'
    ],
    icon: 'TrendingUp'
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'bsc-cse',
    degree: 'BSc in Computer Science & Engineering',
    institution: 'Green University of Bangladesh',
    period: '2018 – 2021',
    description: 'Comprehensive study of computer science fundamentals, data structures, algorithms, database systems, software engineering methodologies, and network communications.'
  },
  {
    id: 'diploma-eng',
    degree: 'Diploma in Engineering, Computer Technology',
    institution: 'Faridpur Polytechnic Institute',
    period: '2013 – 2017',
    description: 'Practical engineering diploma covering computer programming, hardware architecture, web technologies, and systems administration.'
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate, Science',
    institution: 'Board of Intermediate and Secondary Education',
    period: '2013',
    description: 'Foundational secondary education with a rigorous concentration in science and mathematics.'
  },
  {
    id: 'training-ibcs',
    degree: 'Industrial Training in Web Development',
    institution: 'IBCS-Primax Software Bangladesh Ltd.',
    period: 'June 2017 – November 2017',
    isTraining: true,
    description: 'Professional industrial attachment focused on Object-Oriented PHP, Laravel 5.5 framework architecture, database design, and commercial web application development practices.'
  }
];

export const profileLinks: ProfileLink[] = [
  {
    platform: 'GitHub',
    handle: 'faridmia',
    url: 'https://github.com/faridmia',
    description: 'Open-source repositories, personal tools, code samples, and automation experiments.',
    badge: 'Code & Repositories',
    icon: 'Github'
  },
  {
    platform: 'WordPress.org',
    handle: 'faridmia',
    url: 'https://profiles.wordpress.org/faridmia/',
    description: 'Official WordPress contributor profile, published plugins, and ecosystem involvement.',
    badge: 'Official Contributor',
    icon: 'Wordpress'
  },
  {
    platform: 'LinkedIn',
    handle: 'farid-mia-b551a9149',
    url: 'https://www.linkedin.com/in/farid-mia-b551a9149/',
    description: 'Professional career timeline, industry connections, and recommendations.',
    badge: 'Professional Network',
    icon: 'Linkedin'
  },
  {
    platform: 'Facebook',
    handle: 'farid.hasan.79656',
    url: 'https://www.facebook.com/farid.hasan.79656/',
    description: 'Personal & professional social network, developer community interaction, and direct messaging.',
    badge: 'Social Network',
    icon: 'Facebook'
  }
];
