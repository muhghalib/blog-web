import { Search } from 'lucide-react';
import { Flex } from '../ui/flex';
import { Input } from '../ui/input';
import { Section } from '../ui/section';
import { Typography } from '../ui/typography';

export const HeaderSection = () => {
  return (
    <Section>
      <Flex
        direction="col"
        justify="between"
        align="start"
        className="w-full max-md:space-y-4 sm:flex-row md:items-end"
      >
        <Flex direction="col" className="space-y-5">
          <Typography size="4xl" className="md:text-5xl" weight="bold">
            Insight from our team
          </Typography>
          <Typography size="md" className="md:text-lg" color="muted">
            Powerful Trading Tools and Features for Experienced Investors
          </Typography>
        </Flex>
        <Flex className="items-center w-full max-w-md px-5 border rounded-full border-input">
          <Search width={20} height={20} />
          <Input placeholder="search..." className="border-none" />
        </Flex>
      </Flex>
    </Section>
  );
};
