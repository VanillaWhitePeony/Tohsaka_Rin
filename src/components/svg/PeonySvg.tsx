export default function PeonySVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <path id="peony-outer-petal" d="M50 55C43 45 34 35 36 24C37.5 14 44 8 50 8C56 8 62.5 14 64 24C66 35 57 45 50 55Z" />
        <path id="peony-inner-petal" d="M50 56C44 48 40 41 42 33C43 27 47 23 50 23C53 23 57 27 58 33C60 41 56 48 50 56Z" />
      </defs>
      <g fill="#fff" stroke="#ffc0cb" strokeLinejoin="round" strokeWidth="2.5">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <use key={`outer-${angle}`} href="#peony-outer-petal" transform={`rotate(${angle} 50 50)`} />
        ))}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
          <use key={`inner-${angle}`} href="#peony-inner-petal" transform={`rotate(${angle} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="8" />
      </g>
    </svg>
  );
}
