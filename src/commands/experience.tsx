import { experience } from '../data/experience';
import type { OutputLine } from '../types';
import { uid, tagLine, divider, blank } from './utils';



export function experienceCommand(): OutputLine[] {
  const lines: OutputLine[] = [
    { id: uid(), content: 'Work Experience', variant: 'cyan' },
    divider(),
    blank(),
  ];

  
  const reversed = [...experience].reverse();

  reversed.forEach((job, i) => {
    const isLast = i === reversed.length - 1;
    lines.push(
      { id: uid(), content: isLast ? (<span>{job.company} <span style={{ color: 'var(--color-green)', fontSize: '0.8rem', marginLeft: '8px' }}>● most recent</span></span>) : job.company, variant: 'amber' },
      { id: uid(), content: `${job.role}  ·  ${job.date}`, variant: 'bold' },
      { id: uid(), content: job.description, variant: 'muted' },
      tagLine(job.tags),
      blank(),
    );
  });

  return lines;
}
