import { nanoid } from 'nanoid';
import type { OutputLine } from '../types';

export const uid = () => nanoid(8);
export const blank = (): OutputLine => ({ id: uid(), content: '' });
export const divider = (): OutputLine => ({ id: uid(), content: '─'.repeat(48), variant: 'muted' });

export function tagLine(tags: string[]): OutputLine {
  return {
    id: uid(),
    content: (
      <span>
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </span>
    ),
  };
}
