export type LogLevel = 'info' | 'tool' | 'ok' | 'note';

export interface LogEntry {
  ts: string;
  level: LogLevel;
  /** Rich content expressed as tokenized parts so we can style each part. */
  parts: LogPart[];
  /** When true, the blinking cursor is rendered after the final part. */
  cursor?: boolean;
}

export type LogPart =
  | { kind: 'key'; text: string }
  | { kind: 'val'; text: string }
  | { kind: 'faint'; text: string }
  | { kind: 'plain'; text: string };

export interface Tool {
  name: string;
  tag: string;
  description: string;
  schema: SchemaToken[];
}

export type SchemaToken =
  | { kind: 'punct'; text: string }
  | { kind: 'key'; text: string }
  | { kind: 'str'; text: string }
  | { kind: 'num'; text: string };

export type RunStatus = 'completed' | 'running' | 'shipped' | 'archived';

export interface Run {
  id: string;
  title: string;
  org: string;
  status: RunStatus;
  summary: string;
  tags: string[];
  duration: string;
  tools: number;
  meta: string;
}

export interface MemoryEntry {
  id: string;
  when: string;
  title: string;
  body: string;
  topics: string[];
  weight: number;
}

export interface FooterLink {
  label: string;
  href?: string;
  external?: boolean;
  suffix?: string;
}

export interface PortfolioData {
  brand: { name: string; role: string };
  hero: {
    sessionId: string;
    firstName: string;
    suffix: string;
    tagline: string;
    emphasis: string;
    meta: { label: string; value: string; accent?: string }[];
    model: { name: string; ctx: string };
    loginLine: string;
    command: string;
    promptUser: string;
    promptHost: string;
    promptPath: string;
    log: LogEntry[];
  };
  tools: { meta: string; items: Tool[] };
  runs: { meta: string; items: Run[] };
  memory: { meta: string; items: MemoryEntry[] };
  footer: {
    channelBlurb: string;
    cliCommand: string;
    reach: FooterLink[];
  };
}
