import type { OutputLine as OutputLineType } from '../../types';
import styles from './OutputLine.module.css';

interface Props {
  line: OutputLineType;
}

export function OutputLine({ line }: Props) {
  if (!line.content) return <div className={styles.blank} />;

  return (
    <div className={`${styles.line} ${line.variant ? styles[line.variant] : ''}`}>
      {line.content}
    </div>
  );
}
