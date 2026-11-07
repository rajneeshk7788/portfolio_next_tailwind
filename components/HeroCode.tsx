import { profile } from '@/lib/content';

type Token = [text: string, tone: 'key' | 'str' | 'kw' | 'punc' | 'plain'];

const tone: Record<Token[1], string> = {
  key: 'text-paper/85',
  str: 'text-sage',
  kw: 'text-brass',
  punc: 'text-muted',
  plain: 'text-paper',
};

const str = (value: string): Token => [`'${value}'`, 'str'];
const list = (values: string[]): Token[] => [
  ['[', 'punc'],
  ...values.flatMap((value, index): Token[] => (index ? [[', ', 'punc'], str(value)] : [str(value)])),
  ['],', 'punc'],
];
const field = (key: string, value: Token | Token[]): Token[] => [
  ['  ', 'plain'],
  [key, 'key'],
  [': ', 'punc'],
  ...(Array.isArray(value[0]) ? (value as Token[]) : [value as Token, [',', 'punc'] as Token]),
];

/** Every value here is real profile data: this is a developer illustration, not sample data. */
const lines: Token[][] = [
  [['const ', 'kw'], ['developer', 'plain'], [' = {', 'punc']],
  field('name', str(profile.name)),
  field('role', str(profile.role)),
  field('experience', str('4+ years')),
  field('frontend', list(['React.js', 'Next.js', 'TypeScript'])),
  field('backend', list(['Node.js', 'Express.js', 'MongoDB'])),
  field('focus', str('dashboards & data viz')),
  field('location', str('Indore, India')),
  [['};', 'punc']],
  [],
  [['export default ', 'kw'], ['developer', 'plain'], [';', 'punc']],
];

export default function HeroCode() {
  return (
    <figure aria-hidden="true" className="rise relative" style={{ '--d': '300ms' } as React.CSSProperties}>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-panel">
        <div className="flex items-center gap-2 border-b border-line bg-raised/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="ml-3 rounded-md bg-ink/70 px-2.5 py-1 font-mono text-[11px] text-paper/80">
            developer.ts
          </span>
        </div>

        <pre className="overflow-hidden px-3 py-5 font-mono text-[11px] leading-6 sm:px-5 sm:text-[13px] sm:leading-7">
          <code className="block">
            {lines.map((tokens, index) => (
              <span
                key={index}
                className="code-line grid grid-cols-[1.75rem_1fr] sm:grid-cols-[2.25rem_1fr]"
                style={{ '--d': `${450 + index * 70}ms` } as React.CSSProperties}
              >
                <span className="select-none text-right text-muted/50 pr-3 sm:pr-4">{index + 1}</span>
                <span className="whitespace-pre-wrap break-words">
                  {tokens.map(([text, kind], tokenIndex) => (
                    <span key={tokenIndex} className={tone[kind]}>
                      {text}
                    </span>
                  ))}
                  {index === lines.length - 1 && <span className="caret ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-brass" />}
                </span>
              </span>
            ))}
          </code>
        </pre>

        <div className="flex items-center justify-between border-t border-line bg-raised/40 px-4 py-2 font-mono text-[10px] text-muted sm:text-[11px]">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            main
          </span>
          <span>TypeScript</span>
        </div>
      </div>
    </figure>
  );
}
