import type { ProjectVisual as VisualKind } from '@/lib/content';

const BRASS = '#E8B563';
const SAGE = '#7FD1B9';
const PAPER = 'rgba(236,233,226,0.32)';
const FAINT = 'rgba(236,233,226,0.1)';

function Energy() {
  return (
    <>
      {[50, 90, 130].map((y) => (
        <line key={y} x1="20" x2="300" y1={y} y2={y} stroke={FAINT} />
      ))}
      {[34, 70, 106, 142, 178, 214, 250, 286].map((x, i) => (
        <rect
          key={x}
          x={x - 8}
          y={170 - [46, 72, 58, 96, 80, 110, 88, 124][i]}
          width="16"
          height={[46, 72, 58, 96, 80, 110, 88, 124][i]}
          rx="2"
          fill={FAINT}
        />
      ))}
      <path
        d="M26 122 C60 86 84 112 112 92 S166 42 200 66 S258 72 294 30"
        fill="none"
        stroke={BRASS}
        strokeWidth="2.5"
      />
      <circle cx="294" cy="30" r="4" fill={BRASS} />
    </>
  );
}

function Flow() {
  const nodes = [
    [24, 40],
    [24, 124],
    [128, 82],
    [232, 28],
    [232, 136],
  ];
  return (
    <>
      <g fill="none" stroke={PAPER} strokeWidth="1.5">
        <path d="M88 58 C110 58 104 100 128 100" />
        <path d="M88 142 C110 142 104 100 128 100" />
        <path d="M192 100 C214 100 208 46 232 46" />
        <path d="M192 100 C214 100 208 154 232 154" />
      </g>
      {nodes.map(([x, y], i) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="64"
          height="36"
          rx="7"
          fill="#191C20"
          stroke={i === 2 ? BRASS : PAPER}
          strokeWidth={i === 2 ? 2 : 1}
        />
      ))}
      <rect x="138" y="96" width="44" height="4" rx="2" fill={BRASS} />
      <rect x="138" y="105" width="28" height="4" rx="2" fill={PAPER} />
    </>
  );
}

function Analytics() {
  return (
    <>
      <circle cx="82" cy="100" r="46" fill="none" stroke={FAINT} strokeWidth="16" />
      <circle
        cx="82"
        cy="100"
        r="46"
        fill="none"
        stroke={SAGE}
        strokeWidth="16"
        strokeDasharray="190 289"
        transform="rotate(-90 82 100)"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={166 + i * 28}
          y={156 - [52, 88, 66, 112, 94][i]}
          width="18"
          height={[52, 88, 66, 112, 94][i]}
          rx="3"
          fill={i === 3 ? BRASS : PAPER}
        />
      ))}
      <line x1="158" x2="304" y1="156" y2="156" stroke={PAPER} />
    </>
  );
}

function Records() {
  return (
    <>
      {[32, 72, 112, 152].map((y, i) => (
        <g key={y}>
          <rect x="24" y={y} width="272" height="30" rx="6" fill="#191C20" stroke={FAINT} />
          <circle cx="42" cy={y + 15} r="7" fill={PAPER} />
          <rect x="60" y={y + 12} width={[96, 72, 110, 84][i]} height="6" rx="3" fill={PAPER} />
          <rect x="232" y={y + 8} width="52" height="14" rx="7" fill={i === 1 ? BRASS : SAGE} fillOpacity="0.8" />
        </g>
      ))}
    </>
  );
}

function Store() {
  return (
    <>
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={24 + col * 96}
            y={24 + row * 80}
            width="80"
            height="68"
            rx="7"
            fill="#191C20"
            stroke={FAINT}
          />
        ))
      )}
      <rect x="134" y="86" width="52" height="40" rx="7" fill="#0B0C0E" stroke={BRASS} strokeWidth="2" />
      <path d="M146 86 V74 a14 14 0 0 1 28 0 V86" fill="none" stroke={BRASS} strokeWidth="2" />
      <circle cx="160" cy="106" r="4" fill={BRASS} />
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

/** Abstract illustration of a project's theme. Not a product screenshot. */
export default function ProjectVisual({ kind }: { kind: VisualKind }) {
  const Visual = visuals[kind];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 196"
      className="block w-full rounded-xl border border-line bg-ink"
    >
      <Visual />
    </svg>
  );
}
