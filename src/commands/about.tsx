import type { OutputLine } from '../types';
import { uid, blank, divider } from './utils';

export function aboutCommand(): OutputLine[] {
  return [
    { id: uid(), content: 'About Me', variant: 'cyan' },
    divider(),
    blank(),
    { id: uid(), content: 'Hi! I\'m Eshan. I\'m passionate about my work and', variant: 'default' },
    { id: uid(), content: 'solving problems that push me to learn new things', variant: 'default' },
    blank(),
    { id: uid(), content: 'I care about writing meaningful code with impact and', variant: 'default' },
    { id: uid(), content: 'shipping software that people actually enjoy using.', variant: 'default' },
    blank(),
    { id: uid(), content: '  Location     Boston, MA', variant: 'muted' },
    { id: uid(), content: '  Focus        Machine Learning, RAG, Optimization', variant: 'muted' },
    { id: uid(), content: '  Languages    Python, TypeScript, Java, C', variant: 'muted' },
    blank(),
    {
      id: uid(),
      content: (
        <span>
          {'  '}
          <a href="https://github.com/EshanSingh" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
          {'  ·  '}
          <a href="https://www.linkedin.com/in/eshansingh-umd/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
          {'  ·  '}
          <a href="mailto:23esingh@gmail.com" className="link">23esingh@gmail.com</a>
        </span>
      ),
    },
    blank(),
  ];
}
