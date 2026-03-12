import type { HistoryEntry } from '../../types';
import { OutputLine } from '../OutputLine';
import styles from './Terminal.module.css';

interface Props {
  entries: HistoryEntry[];
}

export function TerminalOutput({ entries }: Props) {
  return (
    <>
      {entries.map((entry, i) => (
        <div key={i}>
          {entry.command && (
            <div className={styles.promptLine}>
              <span className={styles.promptSymbol}>➜</span>
              <span className={styles.promptPath}> ~ </span>
              <span>$ {entry.command}</span>
            </div>
          )}
          {entry.output.map((line) => (
            <OutputLine key={line.id} line={line} />
          ))}
        </div>
      ))}
    </>
  );
}
