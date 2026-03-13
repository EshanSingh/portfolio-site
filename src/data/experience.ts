import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    company: 'Capital One',
    role: 'Machine Learning Intern',
    date: 'Aug 2025 – Mar 2026',
    description:
      'Developed an internal rigorous RAG evaluation framework, supplemented with a Synthetic Adversarial Dataset Generator, to streamline RAG evaluation and enhance model robustness.',
    tags: ['Python', 'RAG', 'Kubernetes', 'Jenkins'],
  },
  {
    company: 'JDSAT',
    role: 'Generative AI Intern',
    date: 'Jun 2025 – Aug 2025',
    description:
      'Developed Internal RAG Chatbot for 100+ employees reducing time spent on information retrieval by 50%. Integrated with Sharepoint and Microsoft Teams for seamless access to company knowledge.\nDeveloped a multi-modal STT insights pipeline for generating structured medical reports from audio recordings.',
    tags: ['Python', 'AWS', 'Azure', 'Sharepoint', 'Microsoft Teams'],
  },
  {
    company: 'Maryland Institute for Technology in the Humanities',
    role: 'Software Developer',
    date: 'Jan 2025 – May 2025',
    description:
      'Maintained Scholarly XML, a VScode extension with over 15k users\nIntegrated more accurate schema analysis using Salve, enabling precise XML correctness detection supplemented with intuitive UI prompts',
    tags: ['TypeScript', 'VSCode', 'CI/CD'],
  },
  {
    company: 'Hack4Impact',
    role: 'Software Developer',
    date: 'Jan 2025 – Aug 2025',
    description:
      'Developed Volunteer portal for “Food for All DC” nonprofit, using React, Node.js, and Firebase, enabling efficient volunteer management and automated Route Planning.',
    tags: ['React', 'Node.js', 'Firebase', 'TypeScript'],
  },
];
