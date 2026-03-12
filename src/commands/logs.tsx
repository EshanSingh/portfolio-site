import { logs } from '../data/logs';
import type { OutputLine } from '../types';
import { uid, divider, blank } from './utils';

const TYPE_VARIANT = {
  update: 'green',
  thought: 'cyan',
  project: 'amber',
} as const;

const TYPE_LABEL = {
  update: '[update]',
  thought: '[thought]',
  project: '[project]',
} as const;

export function logsCommand(): OutputLine[] {
  const lines: OutputLine[] = [
    { id: uid(), content: 'Recent Logs', variant: 'cyan' },
    divider(),
    blank(),
  ];

  logs.forEach((entry) => {
    lines.push(
      {
        id: uid(),
        content: `${entry.date}  ${TYPE_LABEL[entry.type]}`,
        variant: TYPE_VARIANT[entry.type],
      },
      { id: uid(), content: entry.text, variant: 'muted' },
      blank(),
    );
  });

  return lines;
}
