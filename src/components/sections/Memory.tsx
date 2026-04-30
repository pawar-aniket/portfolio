import type { MemoryEntry, PortfolioData } from '../../types/portfolio';
import SectionHead from '../layout/SectionHead';

interface MemoryProps {
  data: PortfolioData['memory'];
}

export default function Memory({ data }: MemoryProps) {
  return (
    <section className="block" id="memory">
      <div className="wrap">
        <SectionHead index="03" title="memory" subtitle="experience" meta={data.meta} />
        <div className="memory">
          {data.items.map((entry) => (
            <MemCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemCard({ entry }: { entry: MemoryEntry }) {
  return (
    <div className="mem reveal">
      <div className="mem-head">
        <div className="mem-id">{entry.id}</div>
        <div className="mem-time">{entry.when}</div>
      </div>
      <div className="mem-title">{entry.title}</div>
      <div className="mem-body">{entry.body}</div>
      <div className="embed-hint">
        <span>
          <b>topics</b>: {entry.topics.join(', ')}
        </span>
        <span>
          <b>weight</b>: {entry.weight.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
