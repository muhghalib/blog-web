import * as React from 'react';
import { cn } from '@/utils/classnames';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn('w-full', className)} {...props}>
        {children}
      </section>
    );
  },
);

Section.displayName = 'Section';
