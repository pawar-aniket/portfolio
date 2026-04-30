import type { PortfolioData, SchemaToken, Tool } from '../../types/portfolio';
import { assertNever } from '../../utils/assertNever';
import SectionHead from '../layout/SectionHead';

interface ToolsProps {
  data: PortfolioData['tools'];
}

export default function Tools({ data }: ToolsProps) {
  return (
    <section className="block" id="tools">
      <div className="wrap">
        <SectionHead index="01" title="tools" subtitle="skills & expertise" meta={data.meta} />
        <div className="tools">
          {data.items.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="tool reveal">
      <div className="tool-head">
        <div className="tool-name">
          <span className="arrow">▸</span>
          {tool.name}
        </div>
        <div className="tool-tag">{tool.tag}</div>
      </div>
      <div className="tool-desc">{tool.description}</div>
      <div className="tool-schema">
        {tool.schema.map((tok, i) => (
          <SchemaPart key={`${tool.name}-${i}`} tok={tok} />
        ))}
      </div>
    </div>
  );
}

function SchemaPart({ tok }: { tok: SchemaToken }) {
  switch (tok.kind) {
    case 'key':
      return <span className="k">{tok.text}</span>;
    case 'str':
      return <span className="s">{tok.text}</span>;
    case 'num':
      return <span className="n">{tok.text}</span>;
    case 'punct':
      return <>{tok.text}</>;
    default:
      return assertNever(tok);
  }
}

