import { useRef, useEffect, type KeyboardEvent } from 'react';
import styles from './Terminal.module.css';

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
  onHistoryUp: () => void;
  onHistoryDown: () => void;
  suggestion: string;
  onAcceptSuggestion: () => void;
}

export function TerminalInput({ value, onChange, onSubmit, onHistoryUp, onHistoryDown, suggestion, onAcceptSuggestion }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => { ref.current?.focus(); }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(value);
      onChange('');
    } else if (e.key === 'Tab' || (e.key === 'ArrowRight' && ref.current?.selectionStart === value.length)) {
      if (suggestion) {
        e.preventDefault();
        onAcceptSuggestion();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      onHistoryUp();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      onHistoryDown();
    }
  };

  return (
    <div className={styles.inputRow}>
      <span className={styles.prompt}>
        <span className={styles.promptSymbol}>➜</span>
        <span className={styles.promptPath}> ~ </span>
        $
      </span>
      <div className={styles.inputWrapper}>
        {suggestion && (
          <span className={styles.ghost} aria-hidden="true">
            {suggestion}
          </span>
        )}
        <input
          ref={ref}
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
          placeholder={suggestion ? undefined : 'type a command...'}
          aria-label="Terminal input"
        />
      </div>
    </div>
  );
}
