import { useState, useCallback } from 'react';
import { commands } from '../commands';
import { uid } from '../commands/utils';
import { THEMES } from '../types';
import type { HistoryEntry, OutputLine } from '../types';

const BOOT_LINES: OutputLine[] = [
  { id: uid(), content: 'portfolio v1.0.0  (type "help" to see commands)', variant: 'green' },
  { id: uid(), content: `Last login: ${new Date().toDateString()}`, variant: 'muted' },
  { id: uid(), content: '' },
];

interface ThemeActions {
  cycle: () => void;
  setByName: (name: string) => boolean;
  theme: string;
}

export function useTerminal(themeActions: ThemeActions) {
  const [entries, setEntries] = useState<HistoryEntry[]>([
    { command: '', output: BOOT_LINES },
  ]);

  const execute = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();

    if (cmd === 'clear') {
      setEntries([{ command: '', output: BOOT_LINES }]);
      return;
    }

    if (cmd === 'theme') {
      const currentIdx = THEMES.indexOf(themeActions.theme as any);
      const nextTheme = THEMES[(currentIdx + 1) % THEMES.length];
      themeActions.cycle();
      setEntries((prev) => [
        ...prev,
        {
          command: raw.trim(),
          output: [
            { id: uid(), content: `Current theme: ${nextTheme}.`, variant: 'green' },
            { id: uid(), content: `Available: ${THEMES.join(', ')}`, variant: 'muted' },
            { id: uid(), content: 'Usage: theme <name> to pick a specific theme.', variant: 'muted' },
          ],
        },
      ]);
      return;
    }

    if (cmd.startsWith('theme ')) {
      const name = cmd.slice(6).trim();
      const success = themeActions.setByName(name);
      setEntries((prev) => [
        ...prev,
        {
          command: raw.trim(),
          output: success
            ? [{ id: uid(), content: `Theme set to "${name}".`, variant: 'green' }]
            : [
                { id: uid(), content: `Unknown theme: "${name}"`, variant: 'red' },
                { id: uid(), content: `Available: ${THEMES.join(', ')}`, variant: 'muted' },
              ],
        },
      ]);
      return;
    }

    let output: OutputLine[];

    if (cmd === '') {
      output = [];
    } else if (commands[cmd]) {
      output = commands[cmd]();
    } else {
      output = [
        { id: uid(), content: `command not found: ${cmd}`, variant: 'red' },
        { id: uid(), content: 'type "help" to see available commands.', variant: 'muted' },
      ];
    }

    setEntries((prev) => [...prev, { command: raw.trim(), output }]);
  }, [themeActions]);

  return { entries, execute };
}
