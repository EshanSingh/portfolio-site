import type { OutputLine } from '../types';
import { uid, divider, blank } from './utils';

export function helpCommand(): OutputLine[] {
  return [
    { id: uid(), content: 'Available Commands', variant: 'cyan' },
    divider(),
    blank(),
    { id: uid(), content: '  about          Who I am and what I do', variant: 'green' },
    { id: uid(), content: '  experience     Work history and roles', variant: 'green' },
    { id: uid(), content: '  projects       Things I\'ve built', variant: 'green' },
    { id: uid(), content: '  logs           Recent updates and thoughts', variant: 'green' },
    { id: uid(), content: '  theme          Cycle theme / theme <name>', variant: 'green' },
    { id: uid(), content: '  clear          Clear the terminal', variant: 'green' },
    { id: uid(), content: '  help           Show this message', variant: 'green' },
    blank(),
    { id: uid(), content: 'Aliases: exp, work, proj, log', variant: 'muted' },
    { id: uid(), content: 'Use ↑ ↓ arrows to navigate command history', variant: 'muted' },
    blank(),
  ];
}
