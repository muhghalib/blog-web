import * as React from 'react';

import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardImage } from '../ui/card';
import { Typography } from '../ui/typography';
import { Flex } from '../ui/flex';

import { useCallback } from 'react';
import { Avatar } from '../ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Box } from '../ui/box';
import { BookmarkPlus } from 'lucide-react';
import OrdinaryTooltip from '../tooltip/OrdinaryTooltip';

export const BlogCard = ({
  id,
  thumbnail,
  author,
  categories,
  title,
  content,
  createdAt,
}: Omit<Blog, 'updatedAt' | 'description'>) => {
  const removeContentsTag = useCallback(
    (content: string) => {
      return content.replace(/<[^>]*>/g, '');
    },
    [content],
  );

  return (
    <Card className="flex flex-col cursor-pointer w-full h-full border-none rounded-none shadow-none bg-none overflow-clip">
      <CardImage className="relative w-full block p-0 aspect-[4/3] md:aspect-[4/2] rounded-md overflow-clip">
        <Image
          src={thumbnail}
          fill
          objectFit="cover"
          objectPosition="center"
          priority
          alt="random"
        />
      </CardImage>
      <Flex align="center" justify="between" className="w-full mt-4">
        <Flex align="center" className="space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={thumbnail} />
          </Avatar>
          <Typography size="sm">{author.name}</Typography>
        </Flex>
        <Flex className="space-x-2" align="center">
          <OrdinaryTooltip content="save this article" side="bottom" align="center">
            <Box className="block cursor-pointer">
              <BookmarkPlus width={25} height={25} className="text-muted-foreground" />
            </Box>
          </OrdinaryTooltip>
        </Flex>
      </Flex>
      <CardHeader className="p-0 mt-4">
        <Typography size="2xl" className="sm:2xl line-clamp-2" weight="semibold">
          {title}
        </Typography>
      </CardHeader>
      <CardDescription className="p-0 mt-2">
        <Typography size="md" weight="regular" color="muted" className="line-clamp-3">
          {removeContentsTag(content)}
        </Typography>
      </CardDescription>
      <CardFooter className="p-0 mt-auto flex items-center pt-4 justify-between w-full">
        <Flex align="center" className="w-full max-w-lg space-x-3">
          {categories.slice(0, 2).map(({ id, name }) => {
            return (
              <Badge key={id} variant="outline">
                {name}
              </Badge>
            );
          })}
          <Typography weight="regular" size="sm" color="muted">
            {categories.length > 3 && `${categories.slice(2, categories.length).length} +`}
          </Typography>
        </Flex>
      </CardFooter>
    </Card>
  );
};

// BlogCard.Skeleton = () => {
//   return (
//     <Card className="flex flex-col w-full h-full border-none rounded-none shadow-none gap-y-4 bg-none overflow-clip">
//       <Skeleton className="relative w-full p-0 aspect-video" />
//       <CardHeader className="p-0 mt-4 mb-auto">
//         <Skeleton className="w-32 h-4" />
//         <Skeleton className="w-40 h-6" />
//         <Skeleton className="w-48 h-4" />
//       </CardHeader>
//     </Card>
//   );
// };
