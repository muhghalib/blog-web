'use client';

import { Flex } from '../ui/flex';
import { Grid } from '../ui/grid';
import { Section } from '../ui/section';
import { CategoryTabs } from '../tabs/CategoryTabs';
import { BlogCard } from '../card/BlogCard';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCreateQueryString } from '@/hooks/useCreateQueryString';

import { DUMMY_BLOGS } from '@/constant/dummy/blogs';

export const BlogListSection = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  const [router, pathname, searchParams] = [useRouter(), usePathname(), useSearchParams()];
  const createQueryString = useCreateQueryString();

  const handleOnCategoryTabsValueChange = (value: string) => {
    const query = createQueryString([{ name: 'category', value }]);

    return router.push(pathname + '?' + query, { scroll: false });
  };

  useEffect(() => {
    setBlogData(
      DUMMY_BLOGS.filter(({ categories }) =>
        categories.some(
          (category) => category.name === (searchParams.get('category') || 'Technology'),
        ),
      ),
    );
  }, [searchParams]);

  return (
    <Section className="flex-1 w-0">
      <Flex direction="col" className="space-y-3">
        <CategoryTabs
          onValueChange={handleOnCategoryTabsValueChange}
          defaultValue={searchParams.get('category') || 'Technology'}
        />
        <Grid className="w-full gap-8" cols={1} sm={2}>
          {blogData.map(({ id, author, thumbnail, categories, description, title, createdAt }) => {
            return (
              <BlogCard
                key={id}
                id={id}
                author={author}
                thumbnail={thumbnail}
                categories={categories}
                title={title}
                description={description}
                createdAt={createdAt}
              />
            );
          })}
        </Grid>
      </Flex>
    </Section>
  );
};
