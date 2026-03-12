import type { CommandRegistry } from '../types';
import { aboutCommand } from './about';
import { experienceCommand } from './experience';
import { projectsCommand } from './projects';
import { logsCommand } from './logs';
import { helpCommand } from './help';

export const commands: CommandRegistry = {
  about: aboutCommand,
  experience: experienceCommand,
  exp: experienceCommand,
  work: experienceCommand,
  projects: projectsCommand,
  proj: projectsCommand,
  logs: logsCommand,
  log: logsCommand,
  help: helpCommand,
};

export const commandNames = Object.keys(commands);
