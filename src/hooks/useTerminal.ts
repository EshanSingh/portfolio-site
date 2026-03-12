import { useState, useCallback } from 'react';
import { commands } from '../commands';
import { uid } from '../commands/utils';
import type { HistoryEntry, OutputLine } from '../types';

const BOOT_LINES: OutputLine[] = [
  { id: uid(), content: 'portfolio v1.0.0  (type "help" to see commands)', variant: 'green' },
  { id: uid(), content: `Last login: ${new Date().toDateString()}`, variant: 'muted' },
  { id: uid(), content: '' },
];

export function useTerminal(onThemeToggle: () => void) {
  const [entries, setEntries] = useState<HistoryEntry[]>([
    { command: '', output: BOOT_LINES },
  ]);

  const execute = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();

    if (cmd === 'clear') {
      setEntries([]);
      return;
    }

    if (cmd === 'theme') {
      onThemeToggle();
      setEntries((prev) => [
        ...prev,
        {
          command: raw.trim(),
          output: [{ id: uid(), content: 'Theme toggled.', variant: 'green' }],
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
  }, [onThemeToggle]);

  return { entries, execute };
}
