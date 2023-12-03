'use client';

import Link from 'next/link';

import { Flex } from '../ui/flex';
import { Typography } from '../ui/typography';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import { LoginModal } from '../modals/LoginModal';
import { NavbarMenu } from './NavbarMenu';
import { Separator } from '../ui/separator';
import { RegisterModal } from '../modals/RegisterModal';
import { SearchModal } from '../modals/SearchModal';

import { NAVBAR_LINK, NAVBAR_TITLE } from '@/constant/contents/navbar';

import { usePathname, useSearchParams } from 'next/navigation';

export const Navbar = () => {
  const [pathname, searchParams] = [usePathname(), useSearchParams()];

  return (
    <Flex
      className="sticky top-0 z-20 w-full px-6 py-6 mx-auto space-x-6 shadow-sm md:px-12 bg-background"
      align="center"
    >
      <Flex className="w-full" align="center">
        <Link href="/home">
          <Typography size="xl" weight="semibold">
            {NAVBAR_TITLE}
          </Typography>
        </Link>
        <SearchModal
          trigger={
            <Button
              className="items-center justify-start max-w-md ml-auto space-x-3 border rounded-full max-sm:text-foreground max-sm:border-none sm:px-3 sm:w-full sm:ml-6"
              variant="outlined"
              color="muted"
            >
              <Search width={22} height={22} />
              <Typography color="muted" size="sm" className="max-sm:hidden">
                {searchParams.get('q') || 'Search...'}
              </Typography>
            </Button>
          }
        />
      </Flex>
      <Flex className="ml-auto space-x-6 max-lg:hidden">
        {NAVBAR_LINK.map(({ label, url }, idx) => {
          const pathIsMatched = pathname.startsWith(url);

          return (
            <Typography
              key={idx}
              size="sm"
              color={pathIsMatched ? 'black' : 'muted'}
              weight={pathIsMatched ? 'medium' : 'regular'}
              className="hover:text-foreground"
            >
              <Link href={url}>{label}</Link>
            </Typography>
          );
        })}
      </Flex>
      <Separator orientation="vertical" className="h-10" />
      <Flex align="center" className="space-x-6 max-md:hidden">
        <LoginModal trigger={<Button variant="link">Login</Button>} />
        <RegisterModal
          trigger={
            <Button
              variant="outlined"
              color="muted"
              className="data-[variant=outlined]:hover:bg-button data-[variant=outlined]:hover:text-button-foreground"
            >
              Get started
            </Button>
          }
        />
      </Flex>
      <NavbarMenu />
    </Flex>
  );
};
