import { useTheme } from '../../hooks/useTheme';

interface NavProps {
  brand: { name: string; role: string };
}

export default function Nav({ brand }: NavProps) {
  const { toggle } = useTheme();

  return (
    <nav className="top">
      <div className="wrap row">
        <div className="brand">
          <span className="sigil" aria-hidden>⌘</span>
          <span>
            {brand.name}
            <span className="dim">.dev</span>
          </span>
          <small>/ {brand.role}</small>
        </div>

        <div className="nav-links">
          <a href="#tools">tools</a>
          <a href="#runs">runs</a>
          <a href="#memory">memory</a>
          <a href="#contact">contact</a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggle} aria-label="toggle theme">
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
            </svg>
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
