'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Flex } from '../ui/flex';
import { Typography } from '../ui/typography';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';
const Switch = dynamic(() => import('../ui/switch').then((res) => res.Switch), {
  ssr: false,
  loading: () => <Skeleton className="rounded-full w-full max-w-[2.5rem] h-6" />,
});

import { NAVBAR_LINK, NAVBAR_TITLE } from '@/constant/contents/navbar';
import { useTheme } from 'next-themes';

export const Navbar = () => {
  const { setTheme, theme } = useTheme();

  const isDarkTheme = theme === 'dark';

  const handleOnChangeTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <Flex
      className="sticky top-0 z-20 w-full max-w-6xl py-8 mx-auto gap-x-10 bg-background/20 backdrop-blur-sm"
      align="center"
    >
      <Typography size="xl" weight="semibold">
        {NAVBAR_TITLE}
      </Typography>
      <Flex className="ml-auto space-x-10">
        {NAVBAR_LINK.map(({ label, url }, idx) => {
          return (
            <Typography key={idx}>
              <Link href={url}>{label}</Link>
            </Typography>
          );
        })}
      </Flex>
      <Flex align="center" className="gap-x-4">
        <Input placeholder="Search..." />
        <Switch id="theme" onCheckedChange={handleOnChangeTheme} checked={isDarkTheme} />
      </Flex>
    </Flex>
  );
};