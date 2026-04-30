import type { FooterLink, PortfolioData } from '../../types/portfolio';

interface FooterProps {
  data: PortfolioData['footer'];
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="foot" id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h4>// channel</h4>
            <p className="foot-blurb">{data.channelBlurb}</p>
            <div className="cli-prompt-box" aria-hidden>
              <span>❯</span>
              <span className="who">aniket</span>
              <span className="dim">@</span>
              <span className="info">portfolio</span>
              <span className="dim">:~ $</span>
              <span className="ph">{data.cliCommand}</span>
              <span className="cur" />
            </div>
          </div>

          <FootList heading="// reach" items={data.reach} pinRight />
        </div>

        <div className="foot-meta">
          <div>
            aniket.dev <span className="faint">·</span> v0.4.7
          </div>
          <div>react + typescript · vite</div>
        </div>
      </div>
    </footer>
  );
}

function FootList({
  heading,
  items,
  pinRight = false,
}: {
  heading: string;
  items: FooterLink[];
  pinRight?: boolean;
}) {
  return (
    <div className={pinRight ? 'foot-col foot-col-pin-right' : 'foot-col'}>
      <h4>{heading}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <FootAnchor item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FootAnchor({ item }: { item: FooterLink }) {
  const hasHref = typeof item.href === 'string' && item.href.length > 0;
  const externalAttrs =
    item.external && hasHref ? { target: '_blank', rel: 'noreferrer noopener' } : undefined;

  if (!hasHref) {
    return (
      <span className="foot-static">
        {item.label}
        {item.suffix && <span className="arrow-out">{item.suffix}</span>}
      </span>
    );
  }

  return (
    <a href={item.href} {...externalAttrs}>
      {item.label}
      {item.suffix && <span className="arrow-out">{item.suffix}</span>}
    </a>
  );
}
