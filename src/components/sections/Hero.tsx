import type { LogEntry, LogPart, PortfolioData } from '../../types/portfolio';
import { assertNever } from '../../utils/assertNever';
import { splitOnce } from '../../utils/splitOnce';

type HeroProps = PortfolioData['hero'];

export default function Hero(props: HeroProps) {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <HeroCopy {...props} />
          <HeroTerminal {...props} />
        </div>
      </div>
    </header>
  );
}

function HeroCopy({ sessionId, firstName, suffix, tagline, emphasis, meta }: HeroProps) {
  const [beforeEm, afterEm] = splitOnce(tagline, emphasis);

  return (
    <div className="hero-copy">
      <div className="eyebrow">
        <span className="square" /> session · {sessionId} · resumed
      </div>

      <h1 className="name">
        <span className="name-main">{firstName}</span>
        {suffix && <span className="serif italic it name-suffix">{suffix}</span>}
      </h1>

      <p className="tagline">
        {beforeEm}
        {afterEm !== null && (
          <>
            <em>{emphasis}</em>
            {afterEm}
          </>
        )}
      </p>

      <dl className="meta-row">
        {meta.map((m) => (
          <MetaRow key={m.label} {...m} />
        ))}
      </dl>

      <div className="cta-row">
        <a className="btn primary" href="#runs">
          view runs <span className="kbd">↵</span>
        </a>
        <a className="btn" href="#contact">
          open channel <span className="kbd">⌘K</span>
        </a>
      </div>
    </div>
  );
}

function MetaRow({ label, value, accent }: { label: string; value: string; accent?: string }) {
  if (!accent) {
    return (
      <>
        <dt>{label}</dt>
        <dd>{value}</dd>
      </>
    );
  }
  const [before, after] = splitOnce(value, accent);
  return (
    <>
      <dt>{label}</dt>
      <dd>
        {before}
        {after !== null && (
          <>
            <span className="hi">{accent}</span>
            {after}
          </>
        )}
      </dd>
    </>
  );
}

function HeroTerminal({ model, loginLine, command, promptUser, promptHost, promptPath, log }: HeroProps) {
  return (
    <div className="hero-terminal-wrap">
      <div className="model-card">
        <span className="dotg" />
        model · <span className="model-name">{model.name}</span>
        <span className="faint">·</span>
        <span>{model.ctx}</span>
      </div>

      <div className="terminal" role="img" aria-label="Live agent session introducing Aniket">
        <div className="term-bar">
          <div className="term-dots" aria-hidden>
            <i /><i /><i />
          </div>
          <div className="term-title">aniket@portfolio — zsh — 92×24</div>
          <div className="term-tabs" aria-hidden>
            <span>~</span>
            <span className="active">agent</span>
            <span>logs</span>
          </div>
        </div>

        <div className="term-body">
          <div className="login-line">{loginLine}</div>

          <div className="prompt">
            <span className="sigil">❯</span>
            <span className="who">{promptUser}</span>
            <span className="at">@</span>
            <span className="host">{promptHost}</span>
            <span className="colon">:</span>
            <span className="path">{promptPath}</span>
            <span className="cmd">{command}</span>
          </div>

          <ul className="log">
            {log.map((entry) => (
              <LogLine key={`${entry.ts}-${entry.level}`} entry={entry} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function LogLine({ entry }: { entry: LogEntry }) {
  return (
    <li>
      <span className="ts">{entry.ts}</span>
      <span className={`lvl ${entry.level}`}>{entry.level}</span>
      <span className="msg">
        {entry.parts.map((part, i) => (
          <LogPartEl key={`${entry.ts}-${i}`} part={part} />
        ))}
        {entry.cursor && <span className="cursor" />}
      </span>
    </li>
  );
}

function LogPartEl({ part }: { part: LogPart }) {
  switch (part.kind) {
    case 'key':
      return <span className="key">{part.text}</span>;
    case 'val':
      return <span className="val">{part.text}</span>;
    case 'faint':
      return <span className="faint">{part.text}</span>;
    case 'plain':
      return <>{part.text}</>;
    default:
      return assertNever(part);
  }
}

