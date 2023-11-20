import { Aside } from '../ui/aside';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Flex } from '../ui/flex';
import { Input } from '../ui/input';
import { Typography } from '../ui/typography';

import { SIDEBAR_ABOUT } from '@/constant/contents/sidebar';

export const Sidebar = () => {
  return (
    <Aside className="hidden w-full max-w-[16rem] lg:max-w-xs pr-6 md:block">
      <Flex direction="col" className="space-y-4">
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
        <Typography size="sm" weight="light">
          {SIDEBAR_ABOUT}
        </Typography>
        <Typography weight="light" size="sm">
          © JS Template 2023. All Rights Reserved.
        </Typography>
      </Flex>
    </Aside>
  );
};
