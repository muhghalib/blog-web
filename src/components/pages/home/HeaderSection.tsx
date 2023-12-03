import { Flex } from '@/components/ui/flex';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { Card } from '@/components/ui/card';
import { Grid } from '@/components/ui/grid';
import { Button } from '@/components/ui/button';
import { NavigationScrollArea } from '@/components/scrollArea/NavigationScrollArea';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Link from 'next/link';

import { DUMMY_BLOGS } from '@/constant/dummy/blogs';
import { DUMMY_CATEGORIES } from '@/constant/dummy/categories';

import 'swiper/css';
import 'swiper/css/navigation';

export const HeaderSection = () => {
  return (
    <Section>
      <Grid cols={1} md={2} lg={3} className="gap-6">
        <Card className="flex flex-col w-full h-full border-none rounded-lg shadow-none max-md:space-y-4">
          <Flex direction="col" className="space-y-3">
            <Typography size="3xl" weight="bold">
              Read updated article with{' '}
              <Typography
                size="3xl"
                weight="bold"
                className="text-transparent bg-clip-text bg-gradient-to-tr from-primary via-[theme('colors.secondary.DEFAULT'),_theme('colors.primary.DEFAULT')] to-secondary bg-[length:400%_400%] animate-background-move"
              >
                Metablog
              </Typography>
            </Typography>
            <Typography weight="regular" color="muted">
              Metablog is a fun blogging tool that makes writing and sharing thoughts even more
              interesting.
            </Typography>
          </Flex>
          <Flex className="w-full mt-auto space-y-2" direction="col">
            <Typography size="sm">Trending searches:</Typography>
            <NavigationScrollArea>
              <Flex className="space-x-2">
                {DUMMY_CATEGORIES.slice(0, 8).map(({ name }, idx) => {
                  return (
                    <Link key={idx} href="">
                      <Button size="sm" variant="outlined" color="muted">
                        {name}
                      </Button>
                    </Link>
                  );
                })}
              </Flex>
            </NavigationScrollArea>
          </Flex>
        </Card>
        <Swiper
          className="lg:col-span-2"
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={12}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <Card className="w-full h-full p-4 rounded-lg shadow-none">
              <Flex className="w-full" justify="between" align="center">
                <Typography>Popular post</Typography>
                <Link href="">
                  <Typography size="sm" color="muted">
                    See all
                  </Typography>
                </Link>
              </Flex>
              <Flex
                direction="col"
                className="[&:has(:hover)_>_*]:opacity-50 divide-y [&:hover_>_*:hover]:opacity-100"
              >
                {DUMMY_BLOGS.slice(0, 3).map(({ title, author }, idx) => {
                  return (
                    <Link key={idx} className="w-full py-3 transition-all" href="">
                      <Flex key={idx} direction="col">
                        <Typography size="sm">{title}</Typography>
                        <Typography size="xs" weight="regular" color="muted">
                          by {author.name}
                        </Typography>
                      </Flex>
                    </Link>
                  );
                })}
              </Flex>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="relative flex flex-col items-center justify-center w-full h-full p-4 space-y-6 bg-black rounded-lg shadow-none">
              <Flex className="space-y-4" direction="col" justify="center" align="center">
                <Typography size="3xl" weight="semibold" color="white">
                  We&apos;re Hiring!
                </Typography>
                <Typography size="sm" align="center" weight="regular" color="white">
                  Join our awesome team! We&apos;re on the lookout for talented individuals to be
                  part of something great. Check out our job openings and apply today!{' '}
                </Typography>
              </Flex>
              <Button className="text-white rounded-inherit hover:text-white bg-gradient-to-tr from-primary via-[theme('colors.secondary.DEFAULT'),_theme('colors.primary.DEFAULT')] to-secondary bg-[length:400%_400%] animate-background-move">
                Join us now
              </Button>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </Section>
  );
};
