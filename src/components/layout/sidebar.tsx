import { Aside } from '../ui/aside';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Flex } from '../ui/flex';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { Typography } from '../ui/typography';

import { SIDEBAR_ABOUT, SIDEBAR_SOCIAL } from '@/constant/contents/sidebar';
import { DUMMY_CATEGORIES } from '@/constant/dummy/categories';

export const Sidebar = () => {
  return (
    <Aside className="hidden w-full max-w-xs pr-6 md:block">
      <Flex direction="col" className="space-y-4">
        <Flex direction="col" className="space-y-2">
          <Typography weight="semibold" size="lg" color="primary">
            Category
          </Typography>
          <Flex direction="col" className="space-y-1">
            {DUMMY_CATEGORIES.map(({ id, name }) => {
              return <Typography key={id}>{name}</Typography>;
            })}
          </Flex>
        </Flex>
        <Separator />
        <Flex direction="col" className="space-y-2">
          <Typography weight="semibold" size="lg" color="primary">
            Social
          </Typography>
          <Flex className="w-full space-x-2" align="center">
            {SIDEBAR_SOCIAL.map(({ icon }, idx) => {
              const Icon = icon;

              return (
                <Typography key={idx}>
                  <Icon width={20} height={20} />
                </Typography>
              );
            })}
          </Flex>
        </Flex>
        <Separator />
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
        <Flex direction="col" className="space-y-2">
          <Typography size="sm" weight="light">
            {SIDEBAR_ABOUT}
          </Typography>
          <Typography weight="light" size="sm">
            © JS Template 2023. All Rights Reserved.
          </Typography>
        </Flex>
      </Flex>
    </Aside>
  );
};
