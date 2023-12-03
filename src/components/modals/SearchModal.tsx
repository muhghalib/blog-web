import type { ComponentPropsWithoutRef } from 'react';

import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandItem } from '../ui/command';
import { Box } from '../ui/box';

import { useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

import { cn } from '@/utils/classnames';
import { Slot } from '@radix-ui/react-slot';
import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import crypto from 'crypto';
import { Flex } from '../ui/flex';
import { Typography } from '../ui/typography';
import { NavigationScrollArea } from '../scrollArea/NavigationScrollArea';
import { Button } from '../ui/button';
import Link from 'next/link';
import { DUMMY_CATEGORIES } from '@/constant/dummy/categories';

export interface SearchModalProps extends ComponentPropsWithoutRef<typeof CommandInput> {
  trigger: JSX.Element;
}

export const SearchModal = ({ className, trigger, ...props }: SearchModalProps) => {
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [router, pathname, searchParams] = [useRouter(), usePathname(), useSearchParams()];
  const createQueryString = useCreateQueryString();
  const { get, set } = useLocalStorage();

  const searchValue = searchParams.get('q') || '';

  useEffect(() => {
    const getSearchHistory = get('searchHistory');

    const prevSearchHistory = getSearchHistory ? JSON.parse(getSearchHistory) : [];

    setSearchHistory(prevSearchHistory);
  }, []);

  const handleOnClickTrigger = () => setIsOpen(true);

  const handleOnSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (e.key == 'Enter') {
      const query = createQueryString([{ name: 'q', value }]);

      const id = crypto.randomBytes(20).toString('hex');

      const mergedHistory = [...searchHistory, { id, query: value }];

      setSearchHistory(mergedHistory);
      set('searchHistory', mergedHistory);

      setIsOpen(false);

      return router.push(`${pathname}?${query}`);
    }
  };

  const handleOnClickItem = (value: string) => {
    const query = createQueryString([{ name: 'q', value }]);

    setIsOpen(false);

    return router.push(`${pathname}?${query}`);
  };

  return (
    <>
      <Slot onClick={handleOnClickTrigger}>{trigger}</Slot>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          className={cn('', className)}
          defaultValue={searchValue}
          onKeyDown={handleOnSearch}
          {...props}
        />
        <CommandList>
          <Flex
            className="sticky top-0 z-10 w-full p-2 mt-auto space-y-1 bg-background"
            direction="col"
          >
            <Typography size="sm">Trending searches:</Typography>
            <NavigationScrollArea>
              <Flex className="space-x-2">
                {DUMMY_CATEGORIES.slice(0, 8).map(({ name }, idx) => {
                  return (
                    <Button
                      key={idx}
                      onClick={() => handleOnClickItem(name)}
                      size="sm"
                      variant="link"
                      color="muted"
                    >
                      {name}
                    </Button>
                  );
                })}
              </Flex>
            </NavigationScrollArea>
          </Flex>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchHistory.slice(0, 10).map(({ query }, idx) => {
            return (
              <CommandItem
                key={idx}
                className="cursor-pointer"
                onClick={() => handleOnClickItem(query)}
              >
                {query}
              </CommandItem>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
};
