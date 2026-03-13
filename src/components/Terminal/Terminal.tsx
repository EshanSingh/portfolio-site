import { useState, useRef, useEffect } from 'react';
import { useTerminal } from '../../hooks/useTerminal';
import { useCommandHistory } from '../../hooks/useCommandHistory';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import styles from './Terminal.module.css';

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
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [entries]);

  useEffect(() => {
    setInputValue(current);
  }, [current]);

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
      />
    </div>
  );
}
