import * as React from 'react';

import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Card, CardHeader, CardImage } from '../ui/card';
import { Typography } from '../ui/typography';
import { Flex } from '../ui/flex';
import { Skeleton } from '../ui/skeleton';

export const BlogCard = ({
  id,
  thumbnail,
  description,
  author,
  categories,
  title,
  createdAt,
}: Omit<Blog, 'updatedAt' | 'content'>) => {
  return (
    <Card className="flex flex-col w-full h-full border-none rounded-none shadow-none gap-y-4 bg-none overflow-clip">
      <CardImage className="relative w-full p-0 aspect-[4/3] md:aspect-[4/2] rounded-xl overflow-clip">
        <Image src={thumbnail} fill objectFit="cover" alt="random" />
      </CardImage>
      <CardHeader className="p-0 mt-4 mb-auto">
        <Typography size="sm" color="muted">
          {createdAt} ~{' '}
          <Typography color="primary" size="sm">
            by {author.name}
          </Typography>
        </Typography>
        <Typography size="xl" className="sm:2xl line-clamp-2" weight="semibold">
          {title}
        </Typography>
        <Typography size="sm" weight="regular" className="line-clamp-3">
          {description}
        </Typography>
      </CardHeader>
      <Flex align="center" className="w-full max-w-lg gap-3 mt-auto">
        {categories.slice(0, 3).map(({ id, name }) => {
          return <Badge key={id}>{name}</Badge>;
        })}
        <Typography
          weight="regular"
          size="sm"
          className="bg-[linear-gradient(81deg,_#00EFE1_0%,_#4B74FB_100%)] text-transparent bg-clip-text"
        >
          {categories.length > 3 && `${categories.slice(2, categories.length).length} +`}
        </Typography>
      </Flex>
    </Card>
  );
};

BlogCard.Skeleton = () => {
  return (
    <Card className="flex flex-col w-full h-full border-none rounded-none shadow-none gap-y-4 bg-none overflow-clip">
      <Skeleton className="relative w-full p-0 aspect-video" />
      <CardHeader className="p-0 mt-4 mb-auto">
        <Skeleton className="w-32 h-4" />
        <Skeleton className="w-40 h-6" />
        <Skeleton className="w-48 h-4" />
      </CardHeader>
    </Card>
  );
};
