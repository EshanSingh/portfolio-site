import type { OutputLine } from '../types';
import { uid, blank, divider } from './utils';

export function aboutCommand(): OutputLine[] {
  return [
    { id: uid(), content: 'About Me', variant: 'cyan' },
    divider(),
    blank(),
    { id: uid(), content: 'Hey, I\'m Alex — a software engineer who loves building', variant: 'default' },
    { id: uid(), content: 'developer tools, infrastructure, and things that run fast.', variant: 'default' },
    blank(),
    { id: uid(), content: 'I care about clean APIs, thoughtful abstractions, and', variant: 'default' },
    { id: uid(), content: 'shipping software that other engineers actually enjoy using.', variant: 'default' },
    blank(),
    { id: uid(), content: '  Location     San Francisco, CA', variant: 'muted' },
    { id: uid(), content: '  Focus        Systems, DevTools, Infrastructure', variant: 'muted' },
    { id: uid(), content: '  Languages    Go, TypeScript, Rust, Python', variant: 'muted' },
    blank(),
    {
      id: uid(),
      content: (
        <span>
          {'  '}
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
          {'  ·  '}
          <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
          {'  ·  '}
          <a href="mailto:alex@example.com" className="link">alex@example.com</a>
        </span>
      ),
    },
    blank(),
  ];
}
