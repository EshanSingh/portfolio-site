import type { ReactNode } from 'react';

export const THEMES = ['dark', 'light', 'nord', 'solarized', 'monokai', 'dracula'] as const;
export type Theme = (typeof THEMES)[number];

export type OutputVariant =
  | 'default'
  | 'green'
  | 'cyan'
  | 'amber'
  | 'muted'
  | 'red'
  | 'bold'
  | 'yellow'
  | 'purple';

export interface OutputLine {
  id: string;
  content: ReactNode;
  variant?: OutputVariant;
}

export interface HistoryEntry {
  command: string;
  output: OutputLine[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  name: string;
  year: string;
  stars: string;
  description: string;
  link: string;
  tags: string[];
}

export type LogType = 'update' | 'thought' | 'project' | 'achievement';

export interface LogEntry {
  type: LogType;
  date: string;
  text: string;
  link?: string;
}

export type CommandFn = () => OutputLine[];

export interface CommandRegistry {
  [command: string]: CommandFn;
}
