'use client';

import { DUMMY_BLOGS } from '@/constant/dummy/blogs';
import { SearchResultHeader } from '@/components/pages/search/SearchResultHeader';
import { SearchResultList } from '@/components/pages/search/SearchResultList';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Flex } from '@/components/ui/flex';
import { XSquare } from 'lucide-react';
import { Typography } from '@/components/ui/typography';

export default function SearchPage() {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    setBlogData(DUMMY_BLOGS.filter((item) => item.title.includes(searchQuery)));
  }, [searchQuery]);

  return (
    <>
      {blogData.length > 0 ? (
        <>
          <SearchResultHeader />
          <SearchResultList blogData={blogData} />
        </>
      ) : (
        <Flex direction="col" className="w-full space-y-3" justify="center" align="center">
          <XSquare width={96} height={96} className="text-foreground" />
          <Typography size="4xl" weight="bold">
            Oops sorry
          </Typography>
          <Typography align="center" size="sm">
            We cannot find a post of what you searching for, try to search another post
          </Typography>
        </Flex>
      )}
    </>
  );
}
