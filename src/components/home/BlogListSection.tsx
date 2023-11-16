import { BlogCard } from '../shared/BlogCard';
import { Grid } from '../ui/grid';
import { Section } from '../ui/section';

import { DUMMY_BLOGS } from '@/constant/dummy/blogs';

export const BlogListSection = () => {
  return (
    <Section>
      <Grid className="w-full gap-8" cols={1} sm={2}>
        {DUMMY_BLOGS.map(({ id, author, thumbnail, categories, description, title, createdAt }) => {
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
    </Section>
  );
};
