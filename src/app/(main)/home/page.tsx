'use client';

import { Separator } from '@/components/ui/separator';
import { HeaderSection } from '@/components/pages/home/HeaderSection';
import { BlogListSection } from '@/components/pages/home/BlogListSection';

export default function HomePage() {
  return (
    <>
      <HeaderSection />
      <Separator />
      <BlogListSection />
    </>
  );
}
