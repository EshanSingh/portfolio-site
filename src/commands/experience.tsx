import { experience } from '../data/experience';
import type { OutputLine } from '../types';
import { uid, tagLine, divider, blank } from './utils';

export function experienceCommand(): OutputLine[] {
  const lines: OutputLine[] = [
    { id: uid(), content: 'Work Experience', variant: 'cyan' },
    divider(),
    blank(),
  ];

  experience.forEach((job) => {
    lines.push(
      { id: uid(), content: job.company, variant: 'amber' },
      { id: uid(), content: `${job.role}  ·  ${job.date}`, variant: 'bold' },
      { id: uid(), content: job.description, variant: 'muted' },
      tagLine(job.tags),
      blank(),
    );
  });

  return lines;
}
