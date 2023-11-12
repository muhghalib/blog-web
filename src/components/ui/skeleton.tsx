import { cn } from '@utils/classnames';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('animate-pulse rounded-md bg-muted-foreground/50', className)} {...props} />
  );
}

export { Skeleton };