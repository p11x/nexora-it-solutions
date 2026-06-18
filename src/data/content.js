export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Operations', href: '/operations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 12, suffix: '+', label: 'Years of Excellence' },
  { value: 50, suffix: '+', label: 'Expert Engineers' },
]

export const services = [
  {
    icon: 'Cloud',
    title: 'Cloud Architecture',
    desc: 'Scalable, resilient cloud infrastructure designed for performance. We architect multi-cloud and hybrid solutions that grow with your business.',
    color: '#4F46E5',
    capabilities: ['Multi-Cloud Strategy', 'Infrastructure as Code', 'Cost Optimization', 'Auto-scaling Architecture'],
  },
  {
    icon: 'Shield',
    title: 'Cybersecurity',
    desc: 'Enterprise-grade threat detection, zero-trust architecture, and compliance monitoring to keep your data safe 24/7.',
    color: '#0891B2',
    capabilities: ['Penetration Testing', 'SOC Operations', 'Compliance Audits', 'Incident Response'],
  },
  {
    icon: 'Cpu',
    title: 'AI & ML Solutions',
    desc: 'Custom machine learning models and intelligent automation pipelines that turn raw data into actionable insights.',
    color: '#7C3AED',
    capabilities: ['Predictive Analytics', 'NLP & Chatbots', 'Computer Vision', 'MLOps Pipelines'],
  },
  {
    icon: 'Globe',
    title: 'Digital Transformation',
    desc: 'End-to-end digital strategy and implementation to modernize legacy systems and unlock new revenue streams.',
    color: '#10b981',
    capabilities: ['Business Process Automation', 'ERP Integration', 'Change Management', 'Digital Roadmap'],
  },
  {
    icon: 'Code2',
    title: 'Custom Software Dev',
    desc: 'Full-stack engineering teams building performant, maintainable software tailored to your exact requirements.',
    color: '#f59e0b',
    capabilities: ['Web & Mobile Apps', 'API Development', 'System Integration', 'Legacy Modernization'],
  },
  {
    icon: 'Network',
    title: 'IT Infrastructure',
    desc: 'Robust network design, SD-WAN, and managed infrastructure services ensuring 99.9% uptime for mission-critical workloads.',
    color: '#ef4444',
    capabilities: ['Network Architecture', 'SD-WAN Solutions', 'Disaster Recovery', 'Managed Services'],
  },
]

export const products = [
  {
    name: 'NexaCloud',
    category: 'Cloud Platform',
    desc: 'Unified multi-cloud management platform with auto-scaling, cost analytics, and one-click deployments across AWS, Azure, and GCP.',
    badge: 'New',
    price: 'From $299/mo',
    features: ['Multi-cloud dashboard', 'Auto-scaling policies', 'Cost optimization AI', 'One-click deployments'],
  },
  {
    name: 'SecureVault',
    category: 'Security Suite',
    desc: 'Zero-trust security platform with real-time threat detection, automated compliance reporting, and encrypted data management.',
    badge: 'Popular',
    price: 'From $199/mo',
    features: ['Zero-trust architecture', 'Real-time threat detection', 'Compliance automation', 'Data encryption'],
  },
  {
    name: 'DataPulse',
    category: 'Analytics',
    desc: 'Enterprise analytics platform with real-time visualization, predictive modeling, and collaborative dashboards for data-driven teams.',
    badge: 'Enterprise',
    price: 'Custom',
    features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Team collaboration'],
  },
  {
    name: 'FlowOps',
    category: 'DevOps Platform',
    desc: 'End-to-end DevOps automation with CI/CD pipelines, infrastructure monitoring, and developer collaboration tools.',
    badge: 'Beta',
    price: 'Free Trial',
    features: ['CI/CD pipelines', 'Infrastructure monitoring', 'Developer tools', 'Team collaboration'],
  },
]

export const operations = [
  {
    phase: '01',
    title: 'Discovery & Planning',
    desc: 'Deep-dive into your business requirements, technical landscape, and strategic goals to define a clear roadmap.',
    icon: 'Search',
  },
  {
    phase: '02',
    title: 'Architecture Design',
    desc: 'Design robust, scalable system architecture with detailed technical specifications and risk assessment.',
    icon: 'Layers',
  },
  {
    phase: '03',
    title: 'Agile Development',
    desc: 'Iterative sprints with continuous client feedback, ensuring the product evolves exactly as needed.',
    icon: 'Zap',
  },
  {
    phase: '04',
    title: 'QA & Security Audit',
    desc: 'Comprehensive testing, penetration testing, and security audits to ensure enterprise-grade reliability.',
    icon: 'Shield',
  },
  {
    phase: '05',
    title: 'Deployment & DevOps',
    desc: 'Seamless production deployment with CI/CD pipelines, monitoring, and automated rollback capabilities.',
    icon: 'Rocket',
  },
  {
    phase: '06',
    title: '24/7 Support & Scale',
    desc: 'Round-the-clock support, proactive monitoring, and continuous optimization to keep systems running at peak performance.',
    icon: 'Headphones',
  },
]

export const techStack = [
  'React', 'Node.js', 'Python', 'Kubernetes', 'AWS', 'Azure', 'GCP',
  'TensorFlow', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL',
]

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Meridian Financial',
    initials: 'SC',
    text: 'Viprove transformed our legacy infrastructure into a modern cloud-native platform. Their team delivered on time, on budget, and exceeded every technical benchmark.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Engineering',
    company: 'ScaleAuto Inc.',
    initials: 'MR',
    text: 'The AI solutions Viprove built increased our operational efficiency by 40%. Their deep expertise in ML and custom software is unmatched.',
    rating: 5,
  },
  {
    name: 'Emily Nakamura',
    role: 'CISO',
    company: 'HealthFirst Systems',
    initials: 'EN',
    text: 'Their cybersecurity audit uncovered critical vulnerabilities we had missed for years. Viprove is now our permanent security partner for all infrastructure needs.',
    rating: 5,
  },
]

export const team = [
  {
    name: 'David Park',
    role: 'CEO & Founder',
    bio: '20+ years in enterprise IT architecture. Former Chief Architect at a Fortune 500 cloud provider. Driving Viprove\'s vision of accessible, enterprise-grade innovation.',
    initials: 'DP',
    color: '#4F46E5',
  },
  {
    name: 'Amara Singh',
    role: 'CTO',
    bio: 'PhD in distributed systems. Led engineering teams scaling to 10M+ users. Expert in cloud-native architecture and AI platforms.',
    initials: 'AS',
    color: '#0891B2',
  },
  {
    name: 'James Wright',
    role: 'Head of Security',
    bio: '15 years in cybersecurity. Certified ethical hacker and CISSP. Built threat detection systems protecting Fortune 100 enterprises.',
    initials: 'JW',
    color: '#7C3AED',
  },
  {
    name: 'Lisa Thompson',
    role: 'VP of Delivery',
    bio: 'Agile methodology expert with a track record of 200+ successful project deliveries. Ensures every client receives world-class service.',
    initials: 'LT',
    color: '#10b981',
  },
]
