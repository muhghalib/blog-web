'use client';

import * as React from 'react';

import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Card, CardFooter, CardHeader, CardImage } from '../ui/card';
import { Typography } from '../ui/typography';
import { forwardRef } from 'react';

export const BlogCard = forwardRef<
  React.ElementRef<typeof Card>,
  Omit<Blog, 'content' | 'updatedAt'>
>(({ id, thumbnail, description, author, categories, title, createdAt }, ref) => {
  return (
    <Card
      ref={ref}
      className="flex flex-col w-full h-full border-none rounded-none shadow-none gap-y-4 bg-none overflow-clip"
    >
      <CardImage className="p-0 relative w-full aspect-square max-h-[17rem]">
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
      <CardFooter className="flex-row items-center p-0 mt-auto space-x-2">
        {categories.map(({ id, name }) => {
          return <Badge key={id}>{name}</Badge>;
        })}
      </CardFooter>
    </Card>
  );
});

BlogCard.displayName = 'BlogCard';
