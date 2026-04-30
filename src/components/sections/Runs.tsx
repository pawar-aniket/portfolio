import { useState } from 'react';
import type { PortfolioData, Run } from '../../types/portfolio';
import SectionHead from '../layout/SectionHead';

interface RunsProps {
  data: PortfolioData['runs'];
}

export default function Runs({ data }: RunsProps) {
  return (
    <section className="block" id="runs">
      <div className="wrap">
        <SectionHead index="02" title="runs" subtitle="projects" meta={data.meta} />
        <div className="runs reveal">
          {data.items.map((run) => (
            <RunRow key={run.id} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RunRow({ run }: { run: Run }) {
  const [open, setOpen] = useState(false);
  const summaryId = `${run.id}-summary`;
  const titleId = `${run.id}-title`;

  return (
    <article className={`run-row ${open ? 'is-open' : ''}`} aria-labelledby={titleId}>
      <div className={`run-status ${run.status}`}>
        <span className="pip" />
        {run.status}
      </div>

      <div className="run-body">
        <div className="run-title" id={titleId}>
          {run.title}
          <span className="id">
            {run.id} · {run.org}
          </span>
        </div>

        <button
          type="button"
          className="run-sub"
          id={summaryId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="run-sub-chev" aria-hidden>
            ▸
          </span>
          <span className="run-sub-text">{run.summary}</span>
        </button>

        <div className="run-tags">
          {run.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="col-meta run-meta">
        duration · {run.duration}
        <br />
        tools · {run.tools}
      </div>
      <div className="col-meta run-meta">{run.meta}</div>
    </article>
  );
}
