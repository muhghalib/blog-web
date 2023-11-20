import * as React from 'react';
import type { TabsProps } from '@radix-ui/react-tabs';

import { Typography } from '../ui/typography';
import { NavigationScrollArea } from '../scrollArea/NavigationScrollArea';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { DUMMY_CATEGORIES } from '@/constant/dummy/categories';
import { cn } from '@/utils/classnames';

interface CategoryTabsProps extends TabsProps {}

export const CategoryTabs = ({ className, ...props }: CategoryTabsProps) => {
  return (
    <Tabs className={cn('w-full', className)} {...props}>
      <NavigationScrollArea>
        <TabsList className="flex items-start justify-start p-0 bg-transparent">
          {DUMMY_CATEGORIES.map(({ name }, idx) => {
            return (
              <TabsTrigger
                key={idx}
                value={name}
                className="p-2 w-fit relative isolate group/tabs-trigger data-[state=active]:rounded-none data-[state=active]:shadow-none"
              >
                <Typography
                  weight="regular"
                  className="group-data-[state=active]/tabs-trigger:bg-[linear-gradient(81deg,_#00EFE1_0%,_#4B74FB_100%)] group-data-[state=active]/tabs-trigger:text-transparent group-data-[state=active]/tabs-trigger:bg-clip-text"
                >
                  {name}
                </Typography>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </NavigationScrollArea>
    </Tabs>
  );
};
