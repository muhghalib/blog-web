import * as React from 'react';
import { cn } from '@/utils/classnames';

export interface MainProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Main = React.forwardRef<HTMLDivElement, MainProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <main ref={ref} className={cn('w-full', className)} {...props}>
        {children}
      </main>
    );
  },
);

Main.displayName = 'Main';
