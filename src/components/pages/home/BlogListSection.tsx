import { Grid } from '@/components/ui/grid';
import { Section } from '@/components/ui/section';
import { BlogCard } from '@/components/card/BlogCard';

import { DUMMY_BLOGS } from '@/constant/dummy/blogs';
import { InfoSidebar } from '@/components/layout/InfoSidebar';

export const BlogListSection = () => {
  return (
    <Section className="flex justify-evenly">
      <InfoSidebar />
      <Grid className="flex-1 w-full gap-8" cols={1} sm={2}>
        {DUMMY_BLOGS.map(({ id, author, thumbnail, categories, title, content, createdAt }) => {
          return (
            <BlogCard
              key={id}
              id={id}
              author={author}
              thumbnail={thumbnail}
              categories={categories}
              title={title}
              content={content}
              createdAt={createdAt}
            />
          );
        })}
      </Grid>
    </Section>
  );
};
