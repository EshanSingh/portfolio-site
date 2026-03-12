import type { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    name: 'querykit',
    year: '2024',
    stars: '★ 2.4k',
    description:
      'Type-safe SQL query builder for TypeScript with zero runtime overhead. Compiles queries at build time.',
    link: 'https://github.com/example/querykit',
    tags: ['TypeScript', 'SQL', 'Compiler'],
  },
  {
    name: 'termsync',
    year: '2023',
    stars: '★ 1.1k',
    description:
      'Real-time collaborative terminal sessions over WebRTC. Share your terminal with teammates instantly.',
    link: 'https://github.com/example/termsync',
    tags: ['Rust', 'WebRTC', 'Terminal'],
  },
  {
    name: 'pixelforge',
    year: '2022',
    stars: '★ 890',
    description:
      'GPU-accelerated image processing pipeline for the browser. Runs GLSL shaders on arbitrary image data.',
    link: 'https://github.com/example/pixelforge',
    tags: ['WebGL', 'GLSL', 'TypeScript'],
  },
  {
    name: 'dotfig',
    year: '2021',
    stars: '★ 540',
    description:
      'Declarative dotfile manager that syncs configs across machines using a single TOML manifest.',
    link: 'https://github.com/example/dotfig',
    tags: ['Go', 'TOML', 'CLI'],
  },
];
