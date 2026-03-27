import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useTerminal } from '../../hooks/useTerminal';
import { useCommandHistory } from '../../hooks/useCommandHistory';
import { commandNames } from '../../commands';
import { THEMES } from '../../types';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import styles from './Terminal.module.css';

const allCommands = [...new Set([...commandNames, 'clear', 'theme', ...THEMES.map(t => `theme ${t}`)])];

interface Props {
  themeActions: {
    cycle: () => void;
    setByName: (name: string) => boolean;
    theme: string;
  };
}

export function Terminal({ themeActions }: Props) {
  const { entries, execute } = useTerminal(themeActions);
  const { push, navigateUp, navigateDown, current } = useCommandHistory();
  const [inputValue, setInputValue] = useState('');
  const [showOverlay, setShowOverlay] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const dismissOverlay = useCallback(() => setShowOverlay(false), []);

  useEffect(() => {
    if (!showOverlay) return;
    const timer = setTimeout(dismissOverlay, 4000);
    const onKey = () => dismissOverlay();
    window.addEventListener('keydown', onKey);
    return () => { clearTimeout(timer); window.removeEventListener('keydown', onKey); };
  }, [showOverlay, dismissOverlay]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [entries]);

  useEffect(() => {
    setInputValue(current);
  }, [current]);

  const suggestion = useMemo(() => {
    const val = inputValue.toLowerCase();
    if (!val) return '';
    const match = allCommands.find(c => c.startsWith(val) && c !== val);
    return match ?? '';
  }, [inputValue]);

  const handleSubmit = (val: string) => {
    push(val);
    execute(val);
  };

  const handleTerminalClick = () => {
    const input = document.querySelector<HTMLInputElement>('input[aria-label="Terminal input"]');
    input?.focus();
  };

  return (
    <div className={styles.terminal} onClick={handleTerminalClick}>
      {showOverlay && (
        <div className={styles.overlay} onClick={dismissOverlay}>
   
          <span className={styles.overlayText}>
            Welcome! Type <span className={styles.overlayCmd}>"help"</span> to get started
          </span>
        </div>
      )}
      <div className={styles.output}>
        <TerminalOutput entries={entries} />
        <div ref={bottomRef} />
      </div>
      <TerminalInput
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSubmit}
        onHistoryUp={navigateUp}
        onHistoryDown={navigateDown}
        suggestion={suggestion}
        onAcceptSuggestion={() => { if (suggestion) setInputValue(suggestion); }}
      />
    </div>
  );
}
