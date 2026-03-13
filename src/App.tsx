import { Terminal } from './components/Terminal';
import { TitleBar } from './components/TitleBar';
import { useTheme } from './hooks/useTheme';
import './styles/globals.css';

function App() {
  const { theme, cycle, setByName } = useTheme();

  return (
    <div style={{
      width: '75vw',
      height: '75vh',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '10px',
      border: '1px solid var(--color-border)',
      overflow: 'hidden',
      background: 'var(--color-bg-surface)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    }}>
      <TitleBar theme={theme} onThemeToggle={() => setByName(theme === 'light' ? 'dark' : 'light')} />
      <Terminal themeActions={{ cycle, setByName, theme }} />
    </div>
  );
}

export default App;
