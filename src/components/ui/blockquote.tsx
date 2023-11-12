import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/classnames';

import { typographyVariants } from './typography';

export const blockquoteVariants = cva(
  'p-8 bg-blockquote text-2xl italic text-blockquote-foreground border-l-4 rounded-xl border-muted-foreground',
);

export interface BlockquoteProps
  extends Omit<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, 'color'>,
    VariantProps<typeof blockquoteVariants> {}

export const Blockquote = ({ className, children, ...props }: BlockquoteProps) => {
  return (
    <blockquote className={cn(typographyVariants(), blockquoteVariants(), className)} {...props}>
      “{children}”
    </blockquote>
  );
};
