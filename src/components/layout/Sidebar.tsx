import Link from 'next/link';

import { Aside } from '../ui/aside';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Flex } from '../ui/flex';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { Typography } from '../ui/typography';

import { SIDEBAR_ABOUT } from '@/constant/contents/sidebar';
import { DUMMY_CATEGORIES } from '@/constant/dummy/categories';

import { useSearchParams } from 'next/navigation';
import { useCreateQueryString } from '@/hooks/useCreateQueryString';

export const Sidebar = () => {
  const searchParams = useSearchParams();
  const createQueryString = useCreateQueryString();

  const categoryQuery = searchParams.get('category') || '';

  return (
    <Aside className="hidden w-full max-w-[16rem] lg:max-w-xs pr-6 md:block">
      <Flex direction="col" className="space-y-4">
        <Flex direction="col" className="space-y-2">
          <Typography weight="semibold" size="lg">
            Category
          </Typography>
          <Flex direction="col" className="space-y-1">
            {DUMMY_CATEGORIES.map(({ id, name }) => {
              const query = createQueryString([{ name: 'category', value: name }]);

              return (
                <Link key={id} href={`/home?${query}`}>
                  <Typography
                    weight="regular"
                    className="hover:text-primary"
                    color={categoryQuery == name ? 'primary' : 'black'}
                  >
                    {name}
                  </Typography>
                </Link>
              );
            })}
          </Flex>
        </Flex>
        <Separator />
        <Typography size="sm" weight="light">
          {SIDEBAR_ABOUT}
        </Typography>
        <Card className="w-full">
          <CardHeader>
            <Typography>Weekly NewsLetter</Typography>
            <Typography size="sm" weight="regular">
              Get blog article and offer via email
            </Typography>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Your email..." />
            <Button color="primary" variant="filled">
              Subscribe
            </Button>
          </CardContent>
        </Card>
        <Typography weight="light" size="sm">
          © JS Template 2023. All Rights Reserved.
        </Typography>
      </Flex>
    </Aside>
  );
};
