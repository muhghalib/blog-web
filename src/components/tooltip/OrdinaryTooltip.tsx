import type { ComponentPropsWithoutRef, FC } from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Typography } from '../ui/typography';

type OrdinaryTooltipProps = {
  content: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<typeof TooltipContent>;

export const OrdinaryTooltip: FC<OrdinaryTooltipProps> = ({ content, children, ...props }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent {...props}>
          <Typography size="sm">{content}</Typography>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default OrdinaryTooltip;
