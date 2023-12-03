import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { typographyVariants } from './typography';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@utils/classnames';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      color: {
        default:
          'text-button data-[variant=filled]:text-button-foreground data-[variant=filled]:bg-button data-[variant=outlined]:border-button data-[variant=outlined]:border data-[variant=outlined]:hover:bg-button data-[variant=outlined]:hover:text-button-foreground data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-button',
        primary:
          'text-primary data-[variant=filled]:text-primary-foreground data-[variant=filled]:bg-primary data-[variant=outlined]:border-primary data-[variant=outlined]:border data-[variant=outlined]:hover:bg-primary data-[variant=outlined]:hover:text-primary-foreground data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-primary',
        destructive:
          'text-destructive data-[variant=filled]:text-destructive-foreground data-[variant=filled]:bg-destructive data-[variant=outlined]:border-destructive data-[variant=outlined]:border data-[variant=outlined]:hover:bg-destructive data-[variant=outlined]:hover:text-destructive-foreground data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-destructive',
        muted:
          'text-muted data-[variant=filled]:text-muted-foreground data-[variant=filled]:bg-muted data-[variant=outlined]:border-muted data-[variant=outlined]:border data-[variant=outlined]:hover:bg-muted data-[variant=outlined]:hover:text-muted-foreground data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-muted-foreground',
        secondary:
          'text-secondary data-[variant=filled]:text-secondary-foreground data-[variant=filled]:bg-secondary data-[variant=outlined]:border-secondary data-[variant=outlined]:border data-[variant=outlined]:hover:bg-secondary data-[variant=outlined]:hover:text-secondary-foreground data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-secondary',
      },
      variant: {
        outlined: '',
        filled: '',
        link: '!p-0 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'filled',
      color: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        data-variant={variant || 'filled'}
        className={cn(
          typographyVariants({ weight: 'regular' }),
          buttonVariants({ variant, size, color }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
