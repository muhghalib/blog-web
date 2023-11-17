import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { typographyVariants } from './typography';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@utils/classnames';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      color: {
        default:
          'data-[variant=filled]:text-foreign-foreground data-[variant=filled]:bg-background data-[variant=outlined]:border-foreign data-[variant=outlined]:border data-[variant=outlined]:hover:bg-background data-[variant=outlined]:hover:text-foreign-foreground data-[variant=link]:text-foreign data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-foreign',
        primary:
          'data-[variant=filled]:text-primary-foreground data-[variant=filled]:bg-primary data-[variant=outlined]:border-primary data-[variant=outlined]:border data-[variant=outlined]:hover:bg-primary data-[variant=outlined]:hover:text-primary-foreground data-[variant=link]:text-primary data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-primary',
        destructive:
          'data-[variant=filled]:text-destructive-foreground data-[variant=filled]:bg-destructive data-[variant=outlined]:border-destructive data-[variant=outlined]:border data-[variant=outlined]:hover:bg-destructive data-[variant=outlined]:hover:text-destructive-foreground data-[variant=link]:text-destructive data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-destructive',
        muted:
          'data-[variant=filled]:text-muted-foreground data-[variant=filled]:bg-muted data-[variant=outlined]:border-muted data-[variant=outlined]:border data-[variant=outlined]:hover:bg-muted data-[variant=outlined]:hover:text-muted-foreground data-[variant=link]:text-muted data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-muted-foreground',
        secondary:
          'data-[variant=filled]:text-secondary-foreground data-[variant=filled]:bg-secondary data-[variant=outlined]:border-secondary data-[variant=outlined]:border data-[variant=outlined]:hover:bg-secondary data-[variant=outlined]:hover:text-secondary-foreground data-[variant=link]:text-secondary data-[variant=link]:underline-offset-4 data-[variant=link]:hover:underline data-[variant=link]:text-secondary',
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
        data-variant={variant}
        className={cn(typographyVariants(), buttonVariants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
