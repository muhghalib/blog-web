'use client';

import Link from 'next/link';

import { Flex } from '../ui/flex';
import { Typography } from '../ui/typography';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';

import { NAVBAR_LINK, NAVBAR_TITLE } from '@/constant/contents/navbar';
import { Separator } from '../ui/separator';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { NavbarMenu } from './NavbarMenu';

export const Navbar = () => {
  const [router, pathname, searchParams] = [useRouter(), usePathname(), useSearchParams()];
  const createQueryString = useCreateQueryString();

  const searchValue = searchParams.get('q') || '';

  const handleOnSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (e.key == 'Enter') {
      const query = createQueryString([{ name: 'q', value }]);

      return router.push(`${pathname}?${query}`);
    }
  };

  return (
    <Flex
      className="sticky top-0 z-20 w-full px-6 py-6 mx-auto space-x-6 shadow-sm md:px-12 bg-background"
      align="center"
    >
      <Flex className="w-full space-x-6" align="center">
        <Link href="/home">
          <Typography size="xl" weight="semibold">
            {NAVBAR_TITLE}
          </Typography>
        </Link>
        <Flex className="items-center w-full max-w-md px-5 border rounded-full border-input">
          <Search width={20} height={20} />
          <Input
            defaultValue={searchValue}
            placeholder="search..."
            className="border-none"
            onKeyDown={handleOnSearch}
          />
        </Flex>
      </Flex>
      <Flex className="ml-auto space-x-6 max-lg:hidden">
        {NAVBAR_LINK.map(({ label, url }, idx) => {
          return (
            <Typography
              color={pathname.startsWith(url) ? 'primary' : 'black'}
              key={idx}
              className="hover:text-primary"
            >
              <Link href={url}>{label}</Link>
            </Typography>
          );
        })}
      </Flex>
      <Separator orientation="vertical" className="h-10" />
      <Flex align="center" className="space-x-6 max-md:hidden">
        <Button variant="link">Get started</Button>
        <Button variant="outlined">Create a blog</Button>
      </Flex>
      <NavbarMenu />
    </Flex>
  );
};
