import { useState, useEffect, useCallback } from 'react';
import { THEMES, type Theme } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const cycle = useCallback(() => {
    setTheme((t) => {
      const i = THEMES.indexOf(t);
      return THEMES[(i + 1) % THEMES.length];
    });
  }, []);

  const setByName = useCallback((name: string): boolean => {
    const lower = name.toLowerCase() as Theme;
    if (THEMES.includes(lower)) {
      setTheme(lower);
      return true;
    }
    return false;
  }, []);

  return { theme, cycle, setByName };
}
