import type { ProjectVisual as VisualKind } from '@/lib/content';

const BRASS = '#E8B563';
const SAGE = '#7FD1B9';
const PAPER = 'rgba(236,233,226,0.32)';
const TEXT = 'rgba(236,233,226,0.85)';
const MUTED = '#A3A29B';
const FAINT = 'rgba(236,233,226,0.1)';
const PANEL = '#14161A';

function Panel({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return <rect x={x} y={y} width={w} height={h} rx="8" fill={PANEL} stroke={FAINT} />;
}

function Energy() {
  // Placeholder bars instead of numbers, so the illustration can't be read as real metrics.
  const kpis: [string, number, string][] = [
    ['Consumption', 120, TEXT],
    ['Peak load', 72, BRASS],
    ['Efficiency', 96, SAGE],
  ];
  const bars = [46, 72, 58, 96, 80, 110, 88, 124, 100, 132, 116, 142];
  return (
    <>
      {kpis.map(([label, width, color], i) => (
        <g key={label}>
          <Panel x={16 + i * 206} y={16} w={196} h={68} />
          <text x={30 + i * 206} y={42} fontSize="12" fill={MUTED}>{label}</text>
          <rect x={30 + i * 206} y={56} width={width} height="12" rx="6" fill={color} />
        </g>
      ))}
      <Panel x={16} y={96} w={608} h={248} />
      <text x={32} y={122} fontSize="13" fill={TEXT}>Energy over time</text>
      {[160, 210, 260, 310].map((y) => (
        <line key={y} x1="32" x2="608" y1={y} y2={y} stroke={FAINT} />
      ))}
      {bars.map((h, i) => (
        <rect key={i} x={40 + i * 48} y={330 - h} width="28" height={h} rx="3" fill="rgba(236,233,226,0.07)" />
      ))}
      <path
        d="M48 270 C110 220 150 262 200 236 S300 170 360 198 S470 196 600 136"
        fill="none"
        stroke={BRASS}
        strokeWidth="3"
      />
      <circle cx="600" cy="136" r="5" fill={BRASS} />
    </>
  );
}

function Flow() {
  const nodes: [number, number, string, boolean?][] = [
    [32, 60, 'Source A'],
    [32, 240, 'Source B'],
    [250, 150, 'Pipeline', true],
    [468, 50, 'Insights'],
    [468, 250, 'Reports'],
  ];
  return (
    <>
      <g fill="none" stroke={PAPER} strokeWidth="2">
        <path d="M172 90 C220 90 205 180 250 180" />
        <path d="M172 270 C220 270 205 180 250 180" />
        <path d="M390 180 C435 180 420 80 468 80" />
        <path d="M390 180 C435 180 420 280 468 280" />
      </g>
      {nodes.map(([x, y, label, active]) => (
        <g key={label}>
          <rect x={x} y={y} width="140" height="60" rx="10" fill={PANEL} stroke={active ? BRASS : PAPER} strokeWidth={active ? 2 : 1} />
          <circle cx={x + 22} cy={y + 30} r="6" fill={active ? BRASS : SAGE} />
          <text x={x + 38} y={y + 35} fontSize="14" fill={TEXT}>{label}</text>
        </g>
      ))}
      {[[172, 90], [172, 270], [390, 180], [468, 80], [468, 280], [250, 180]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={BRASS} />
      ))}
    </>
  );
}

function Analytics() {
  const bars = [70, 118, 88, 150, 126, 168];
  return (
    <>
      <Panel x={16} y={16} w={232} h={328} />
      <text x={32} y={44} fontSize="13" fill={TEXT}>Distribution</text>
      <circle cx="132" cy="170" r="70" fill="none" stroke={FAINT} strokeWidth="24" />
      <circle
        cx="132"
        cy="170"
        r="70"
        fill="none"
        stroke={SAGE}
        strokeWidth="24"
        strokeDasharray="280 440"
        transform="rotate(-90 132 170)"
      />
      <circle
        cx="132"
        cy="170"
        r="70"
        fill="none"
        stroke={BRASS}
        strokeWidth="24"
        strokeDasharray="90 440"
        strokeDashoffset="-280"
        transform="rotate(-90 132 170)"
      />
      {[0, 1].map((i) => (
        <g key={i}>
          <circle cx={40} cy={286 + i * 24} r="5" fill={i === 0 ? SAGE : BRASS} />
          <text x={54} y={291 + i * 24} fontSize="12" fill={MUTED}>{i === 0 ? 'Segment A' : 'Segment B'}</text>
        </g>
      ))}
      <Panel x={260} y={16} w={364} h={208} />
      <text x={276} y={44} fontSize="13" fill={TEXT}>Trend by period</text>
      {bars.map((h, i) => (
        <rect key={i} x={282 + i * 56} y={212 - h * 0.85} width="36" height={h * 0.85} rx="4" fill={i === 5 ? BRASS : PAPER} />
      ))}
      <Panel x={260} y={236} w={364} h={108} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={276} y={254 + i * 28} width={[150, 110, 130][i]} height="8" rx="4" fill={PAPER} />
          <rect x={540} y={254 + i * 28} width={[64, 48, 56][i]} height="8" rx="4" fill={i === 0 ? SAGE : FAINT} />
        </g>
      ))}
    </>
  );
}

function Records() {
  const rows = [
    ['Patient 01', 'Appointment', SAGE],
    ['Patient 02', 'Follow-up', BRASS],
    ['Patient 03', 'Appointment', SAGE],
    ['Patient 04', 'Clinical data', SAGE],
  ];
  return (
    <>
      {['Admin', 'Doctor', 'Staff'].map((role, i) => (
        <g key={role}>
          <rect x={16 + i * 84} y={16} width="76" height="30" rx="15" fill={i === 1 ? 'rgba(232,181,99,0.15)' : PANEL} stroke={i === 1 ? BRASS : FAINT} />
          <text x={54 + i * 84} y={36} fontSize="12" textAnchor="middle" fill={i === 1 ? BRASS : MUTED}>{role}</text>
        </g>
      ))}
      <text x={624} y={36} fontSize="12" textAnchor="end" fill={MUTED}>Role-based access</text>
      {rows.map(([name, status, color], i) => (
        <g key={name}>
          <rect x={16} y={62 + i * 71} width="608" height="60" rx="10" fill={PANEL} stroke={FAINT} />
          <circle cx={46} cy={92 + i * 71} r="14" fill={FAINT} />
          <text x={72} y={88 + i * 71} fontSize="14" fill={TEXT}>{name}</text>
          <rect x={72} y={97 + i * 71} width={[110, 84, 124, 96][i]} height="6" rx="3" fill={FAINT} />
          <rect x={494} y={78 + i * 71} width="114" height="28" rx="14" fill={color} fillOpacity="0.15" />
          <text x={551} y={97 + i * 71} fontSize="12" textAnchor="middle" fill={color}>{status}</text>
        </g>
      ))}
    </>
  );
}

function Store() {
  return (
    <>
      {[0, 1, 2, 3].map((col) =>
        [0, 1].map((row) => (
          <g key={`${col}-${row}`} opacity="0.55">
            <rect x={16 + col * 155} y={16 + row * 168} width="143" height="160" rx="10" fill={PANEL} stroke={FAINT} />
            <rect x={28 + col * 155} y={28 + row * 168} width="119" height="84" rx="6" fill={FAINT} />
            <rect x={28 + col * 155} y={124 + row * 168} width="86" height="8" rx="4" fill={PAPER} />
            <rect x={28 + col * 155} y={142 + row * 168} width="50" height="8" rx="4" fill={FAINT} />
          </g>
        ))
      )}
      <rect x="180" y="84" width="280" height="192" rx="14" fill="#0B0C0E" stroke={BRASS} strokeWidth="2" />
      <rect x="306" y="124" width="28" height="22" rx="4" fill="none" stroke={BRASS} strokeWidth="2" />
      <path d="M312 124 V116 a8 8 0 0 1 16 0 V124" fill="none" stroke={BRASS} strokeWidth="2" />
      <text x="320" y="172" fontSize="14" textAnchor="middle" fill={TEXT}>Register to view the store</text>
      <rect x="204" y="188" width="232" height="26" rx="6" fill={PANEL} stroke={FAINT} />
      <rect x="204" y="224" width="232" height="30" rx="6" fill={BRASS} />
      <text x="320" y="244" fontSize="13" fontWeight="600" textAnchor="middle" fill="#0B0C0E">Create account</text>
    </>
  );
}

const visuals: Record<VisualKind, () => JSX.Element> = {
  energy: Energy,
  flow: Flow,
  analytics: Analytics,
  records: Records,
  store: Store,
};

/** Illustration of a project's theme with sample labels. Not a product screenshot. */
export default function ProjectVisual({ kind, label }: { kind: VisualKind; label: string }) {
  const Visual = visuals[kind];
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl border border-line bg-ink shadow-panel transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:group-hover:scale-100"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-raised/60 px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-paper/20" />
        <span className="h-2 w-2 rounded-full bg-paper/20" />
        <span className="h-2 w-2 rounded-full bg-paper/20" />
        <span className="ml-2 truncate font-mono text-[11px] text-muted">{label}</span>
      </div>
      <svg viewBox="0 0 640 360" className="block w-full font-sans">
        <Visual />
      </svg>
    </div>
  );
}
