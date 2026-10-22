import ButterflySVG from '@components/svg/ButterflySvg';
import { cn } from '@lib/utils';
import type { ReactNode } from 'react';

export default function Divider({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div className={cn('section-divider my-4 flex items-center gap-4', className)}>
      <span className="section-divider-line h-px grow origin-right bg-linear-to-r from-transparent to-primary/45" />
      {children ? (
        <h2 className="section-divider-title flex items-center gap-2.5 font-bold text-2xl text-foreground/70 tracking-widest">
          <ButterflySVG className="section-divider-bloom size-4 shrink-0" />
          {children}
          <ButterflySVG className="section-divider-bloom size-4 shrink-0" />
        </h2>
      ) : null}
      <span className="section-divider-line h-px grow origin-left bg-linear-to-l from-transparent to-primary/45" />
    </div>
  );
}
