import * as React from 'react';
import { cn } from '@/utils/classnames';

export interface AsideProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Aside = React.forwardRef<HTMLDivElement, AsideProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <aside ref={ref} className={cn('', className)} {...props}>
        {children}
      </aside>
    );
  },
);

Aside.displayName = 'Aside';
