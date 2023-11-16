'use client';

import { Main } from '@/components/ui/main';
import { Separator } from '@/components/ui/separator';
import { Flex } from '@/components/ui/flex';
import { Sidebar } from '@/components/layout/Sidebar';

import { HeaderSection } from '@/components/home/HeaderSection';
import { BlogListSection } from '@/components/home/BlogListSection';

export default function HomePage() {
  return (
    <Main className="flex flex-col px-12 mt-8 mb-24 space-y-10">
      <HeaderSection />
      <Separator />
      <Flex>
        <Sidebar />
        <BlogListSection />
      </Flex>
    </Main>
  );
}
