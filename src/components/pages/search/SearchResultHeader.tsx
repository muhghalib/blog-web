'use client';

import { CategoryTabs } from '@/components/tabs/CategoryTabs';
import { Flex } from '@/components/ui/flex';
import { Header } from '@/components/ui/header';
import { Typography } from '@/components/ui/typography';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { SEARCH_SORT_BY_OPTION } from '@/constant/contents/pages/search';
import { useSearchParams } from 'next/navigation';

export const SearchResultHeader = () => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get('q') || '';

  return (
    <Header className="flex flex-col items-center justify-center w-full space-y-4">
      <Flex direction="col" align="center" justify="center" className="space-y-1.5">
        <Typography size="4xl" weight="bold">
          {searchQuery}✨
        </Typography>
        <Typography size="sm" weight="regular" align="center">
          We have provide you the best result for {searchQuery}
        </Typography>
      </Flex>
      <Flex direction="col" className="w-full space-x-3 sm:flex-row" align="center">
        <SearchResultFilter />
        <CategoryTabs className="overflow-hidden" />
      </Flex>
    </Header>
  );
};

export const SearchResultFilter = () => {
  return (
    <Flex className="w-full max-w-fit" justify="start">
      <Select>
        <SelectTrigger className="w-full min-w-[10rem]">
          <SelectValue placeholder="Sort by..." />
        </SelectTrigger>
        <SelectContent>
          {SEARCH_SORT_BY_OPTION.map(({ label, value }, idx) => {
            return (
              <SelectItem key={idx} value={value}>
                {label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </Flex>
  );
};
