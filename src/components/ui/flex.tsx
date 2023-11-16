import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/classnames';

export const flexVariants = cva('flex', {
  variants: {
    justify: {
      normal: 'justify-normal',
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch',
    },
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    direction: {
      row: 'flex-row',
      col: 'flex-col',
    },
  },
  defaultVariants: {
    align: 'start',
    justify: 'normal',
    direction: 'row',
  },
});

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ align, justify, direction, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(flexVariants({ direction, justify, align }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Flex.displayName = 'Flex';
