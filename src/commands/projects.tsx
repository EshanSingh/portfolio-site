import { projects } from '../data/projects';
import type { OutputLine } from '../types';
import { uid, tagLine, divider, blank } from './utils';

export function projectsCommand(): OutputLine[] {
  const lines: OutputLine[] = [
    { id: uid(), content: 'Projects', variant: 'cyan' },
    divider(),
    blank(),
  ];

  projects.forEach((proj) => {
    lines.push(
      {
        id: uid(),
        content: (
          <span>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="link">
              {proj.name}
            </a>
            {'  '}
            <span className="year">{proj.year}</span>
          </span>
        ),
        variant: 'amber',
      },
      { id: uid(), content: proj.description, variant: 'muted' },
      tagLine(proj.tags),
      blank(),
    );
  });

  return lines;
}
