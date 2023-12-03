'use client';

import { Main } from '@/components/ui/main';
import { Separator } from '@/components/ui/separator';
import { Flex } from '@/components/ui/flex';
import { Sidebar } from '@/components/layout/Sidebar';

import { HeaderSection } from '@/components/pages/home/HeaderSection';
import { BlogListSection } from '@/components/pages/home/BlogListSection';

export default function HomePage() {
  return (
    <>
      <HeaderSection />
      <Separator />
      <Flex>
        <Sidebar />
        <BlogListSection />
      </Flex>
    </>
  );
}
