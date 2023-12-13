import * as React from 'react';
import { cn } from '@/utils/classnames';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header ref={ref} className={cn('w-full', className)} {...props}>
        {children}
      </header>
    );
  },
);

Header.displayName = 'Header';
