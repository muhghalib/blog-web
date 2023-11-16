import * as React from 'react';
import { cn } from '@/utils/classnames';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('', className)} {...props}>
        {children}
      </div>
    );
  },
);

Box.displayName = 'Box';
