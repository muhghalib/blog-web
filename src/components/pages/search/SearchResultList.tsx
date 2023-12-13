import { BlogCard } from '@/components/card/BlogCard';
import { Grid } from '@/components/ui/grid';
import { Section } from '@/components/ui/section';

export const SearchResultList = ({ blogData }: { blogData: Blog[] }) => {
  return (
    <Section className="flex">
      <Grid className="w-full gap-8" cols={1} sm={2} md={3}>
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
    </Section>
  );
};
