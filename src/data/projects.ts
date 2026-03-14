import type { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    name: 'TDLR',
    year: '2024',
    stars: '★',
    description:
      'Automated summarization tool for websites on ANY domain (yup, even paywalled ones), Makes use of content chunking and batching for efficient LLM summarization and API call reduction.',
    link: 'https://github.com/EshanSingh/tldr?tab=readme-ov-file',
    tags: ['React', 'Vite', 'FastAPI', 'Huggingface', 'TypeScript', 'Python'],
  },
  {
    name: 'Game Finder',
    year: '2023',
    stars: '★',
    description:
      'My First React Project, a web app that helps users find their next game to play based on user-selected criteria. Implemented caching to reduce API calls and implemented various QOL features.',
    link: 'https://github.com/EshanSingh/eshans-game-hub',
    tags: ['React', 'Vite', 'TypeScript', 'Axios'],
  },
  {
    name: 'Class Opening Notifier',
    year: '2023',
    stars: '★',
    description:
      'SMS notifier that would alert users when a spot opened up in a specified class section. Helped me get the specific class section I wanted.',
    link: 'https://github.com/EshanSingh/sms_updater',
    tags: ['Python', 'Twilio', 'BeautifulSoup'],
  },
];
