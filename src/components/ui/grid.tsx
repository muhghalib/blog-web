import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/classnames';

export const gridVariants = cva('grid', {
  variants: {
    items: {
      start: 'place-items-start',
      end: 'place-items-end',
      center: 'place-items-center',
      baseline: 'place-items-baseline',
      stretch: 'place-items-stretch',
    },
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    },
    sm: {
      1: 'sm:grid-cols-1',
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-3',
      4: 'sm:grid-cols-4',
      5: 'sm:grid-cols-5',
      6: 'sm:grid-cols-6',
    },
    md: {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      5: 'md:grid-cols-5',
      6: 'md:grid-cols-6',
    },
    lg: {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
      5: 'lg:grid-cols-5',
      6: 'lg:grid-cols-6',
    },
  },
  defaultVariants: {
    items: 'start',
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

export const Grid = ({ cols, sm, md, lg, items, className, children, ...props }: GridProps) => {
  return (
    <div className={cn(gridVariants({ items, cols, sm, md, lg }), className)} {...props}>
      {children}
    </div>
  );
};
