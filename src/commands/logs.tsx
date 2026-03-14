import { logs } from '../data/logs';
import type { OutputLine } from '../types';
import { uid, divider, blank } from './utils';

const TYPE_VARIANT = {
  update: 'green',
  thought: 'cyan',
  project: 'purple',
  achievement: 'yellow',
} as const;

const TYPE_LABEL = {
  update: '[update]',
  thought: '[thought]',
  project: '[project]',
  achievement: '[achievement]',
} as const;

export function logsCommand(): OutputLine[] {
  const lines: OutputLine[] = [
    { id: uid(), content: 'Recent Logs', variant: 'cyan' },
    divider(),
    blank(),
  ];

  logs.forEach((entry, i) => {
    const isLast = i === logs.length - 1;

    const header = isLast ? (
      <span>
        {entry.date}{'  '}{TYPE_LABEL[entry.type]}
        <span style={{ color: 'var(--color-green)', fontSize: '0.8rem', marginLeft: '8px' }}>● most recent</span>
      </span>
    ) : (
      `${entry.date}  ${TYPE_LABEL[entry.type]}`
    );

    const text = entry.link ? (
      <span>
        {entry.text}{' '}
        <a href={entry.link} target="_blank" rel="noopener noreferrer" className="link">[link]</a>
      </span>
    ) : (
      entry.text
    );

    lines.push(
      { id: uid(), content: header, variant: TYPE_VARIANT[entry.type] },
      { id: uid(), content: text, variant: 'muted' },
      blank(),
    );
  });

  return lines;
}
