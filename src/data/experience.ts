import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    company: 'Stripe',
    role: 'Senior Software Engineer',
    date: '2022 – present',
    description:
      'Led redesign of payment routing infrastructure handling $2B+ daily transactions. Reduced p99 latency by 40% through query optimization and caching layer.',
    tags: ['Go', 'gRPC', 'Kafka', 'PostgreSQL'],
  },
  {
    company: 'Vercel',
    role: 'Software Engineer',
    date: '2020 – 2022',
    description:
      'Built edge middleware runtime powering 100K+ deployments/day. Designed incremental static regeneration v2 reducing cache misses by 60%.',
    tags: ['TypeScript', 'Rust', 'Next.js', 'AWS'],
  },
  {
    company: 'Figma',
    role: 'Frontend Engineer',
    date: '2018 – 2020',
    description:
      'Implemented real-time multiplayer cursor system and plugin API used by 50K+ community plugins. Optimized canvas rendering for 10x performance on complex files.',
    tags: ['TypeScript', 'WebGL', 'C++', 'WebSocket'],
  },
];
