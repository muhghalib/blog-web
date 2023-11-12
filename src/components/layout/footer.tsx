'use client';

import Link from 'next/link';

import { Flex } from '../ui/flex';
import { Separator } from '../ui/separator';
import { Typography } from '../ui/typography';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import {
  FOOTER_ABOUT,
  FOOTER_EMAIL,
  FOOTER_INFO,
  FOOTER_LIST,
  FOOTER_PHONE_NUMBER,
} from '@/constant/contents/footer';
import { Grid } from '../ui/grid';

export const Footer = () => {
  return (
    <Flex
      className="w-full h-fit min-h-[31.25rem] bg-muted pt-16 px-16 lg:px-44 space-y-4"
      align="center"
      justify="center"
      direction="col"
    >
      <Grid className="w-full gap-8" cols={1} sm={2} md={3}>
        <Flex direction="col" className="w-full space-y-4">
          <Flex direction="col" className="space-y-1">
            <Typography size="lg">About</Typography>
            <Typography size="sm" weight="light">
              {FOOTER_ABOUT}
            </Typography>
          </Flex>
          <Flex direction="col" className="space-y-1">
            <Typography weight="regular" size="sm">
              Email: {FOOTER_EMAIL}
            </Typography>
            <Typography weight="regular" size="sm">
              Phone: {FOOTER_PHONE_NUMBER}
            </Typography>
          </Flex>
        </Flex>
        <Flex className="w-full" justify="around">
          {FOOTER_LIST.map(({ title, children }, idx) => {
            return (
              <Flex key={idx} direction="col" className="space-y-4">
                <Typography>{title}</Typography>
                <Flex direction="col" className="space-y-1">
                  {children.map(({ label, url }, idx) => {
                    return (
                      <Typography key={idx} size="sm" weight="light">
                        <Link href={url}>{label}</Link>
                      </Typography>
                    );
                  })}
                </Flex>
              </Flex>
            );
          })}
        </Flex>
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
      </Grid>
      <Separator className="w-full" />
      <Flex className="w-full flex-wrap gap-8" justify="between" align="center">
        <Flex direction="col" className="space-y-0.5">
          <Typography size="lg">MetaBlog</Typography>
          <Typography weight="light" size="sm">
            © JS Template 2023. All Rights Reserved.
          </Typography>
        </Flex>
        <Flex align="center" className="gap-x-4">
          {FOOTER_INFO.map(({ label, url }, idx) => {
            return (
              <Typography key={idx} weight="light" size="sm">
                <Link href={url}>{label}</Link>
              </Typography>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
