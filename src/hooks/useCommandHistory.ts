import { useState, useCallback } from 'react';

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [index, setIndex] = useState(-1);

  const push = useCallback((cmd: string) => {
    setHistory((prev) => [cmd, ...prev]);
    setIndex(-1);
  }, []);

  const navigateUp = useCallback(() => {
    setIndex((prev) => Math.min(prev + 1, history.length - 1));
  }, [history.length]);

  const navigateDown = useCallback(() => {
    setIndex((prev) => Math.max(prev - 1, -1));
  }, []);

  const current = index === -1 ? '' : history[index] ?? '';

  return { push, navigateUp, navigateDown, current };
}
