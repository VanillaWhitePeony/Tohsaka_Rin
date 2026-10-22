type ButterflySVGProps = {
  className?: string;
};

export default function ButterflySVG({ className }: ButterflySVGProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.25 11.8C8.5 5.55 4.35 4.45 2.8 5.4c-1.5.9-.4 5.5 2.1 7.5-2.55 1.25-3.3 4.45-2.1 5.55 1.45 1.3 5.75-.15 8.45-5.1l.75-1.55-.75-1.5Z"
        fill="var(--color-purple)"
      />
      <path
        d="M12.75 11.8c2.75-6.25 6.9-7.35 8.45-6.4 1.5.9.4 5.5-2.1 7.5 2.55 1.25 3.3 4.45 2.1 5.55-1.45 1.3-5.75-.15-8.45-5.1L12 11.8l.75-1.5Z"
        fill="var(--color-purple)"
      />
      <path
        d="M12 10.1c-.85 0-1.45 1.15-1.45 2.4s.6 2.4 1.45 2.4 1.45-1.15 1.45-2.4-.6-2.4-1.45-2.4Z"
        fill="var(--color-purple)"
      />
      <path
        d="M11.45 10.25c-.5-1.65-1.45-2.7-2.5-3.25m3.6 3.25c.5-1.65 1.45-2.7 2.5-3.25"
        stroke="var(--color-purple)"
        strokeLinecap="round"
        strokeWidth="1.1"
      />
    </svg>
  );
}
