import Link from 'next/link';

import { MenuIcon } from 'lucide-react';
import { Box } from '../ui/box';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Flex } from '../ui/flex';

import { Typography } from '../ui/typography';
import { LoginModal } from '../modals/LoginModal';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { RegisterModal } from '../modals/RegisterModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

import { useTheme } from 'next-themes';
import {
  NAVBAR_MENU_ACCORDION_CONTENT,
  NAVBAR_MENU_SOCIAL,
  NAVBAR_MENU_THEME,
} from '@/constant/contents/navbarMenu';

export const NavbarMenu = () => {
  const { setTheme, theme } = useTheme();

  const changeTheme = (theme: string) => {
    return setTheme(theme);
  };

  return (
    <Popover modal={false}>
      <PopoverTrigger asChild>
        <Box className="block cursor-pointer">
          <MenuIcon width={30} height={30} className="text-foreground" />
        </Box>
      </PopoverTrigger>
      <PopoverContent className="w-fit min-w-[16rem]" align="end" sideOffset={40}>
        <Flex direction="col" className="w-full space-y-4">
          <Accordion type="multiple" className="w-full space-y-3">
            {NAVBAR_MENU_ACCORDION_CONTENT.map(({ label, children }, idx) => {
              return (
                <AccordionItem
                  key={idx}
                  value={idx.toString()}
                  className="w-full space-y-3 border-none"
                >
                  <AccordionTrigger className="py-0 hover:no-underline">
                    <Typography>{label}</Typography>
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <Flex direction="col" className="space-y-2">
                      {children.map(({ label, url }, idx) => {
                        return (
                          <Link key={idx} href={url}>
                            <Typography size="sm" color="muted">
                              {label}
                            </Typography>
                          </Link>
                        );
                      })}
                    </Flex>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Flex align="center" className="w-full space-x-6 md:hidden">
            <LoginModal
              trigger={
                <Button className="w-full" variant="link">
                  Login
                </Button>
              }
            />
            <RegisterModal
              trigger={
                <Button className="w-full" variant="outlined">
                  Get started
                </Button>
              }
            />
          </Flex>
          <Separator />
          <Flex className="w-full" align="center" justify="between">
            <Flex className="w-full space-x-2" align="center">
              {NAVBAR_MENU_SOCIAL.map(({ icon }, idx) => {
                const Icon = icon;

                return (
                  <Typography key={idx} color="muted">
                    <Icon width={18} height={18} />
                  </Typography>
                );
              })}
            </Flex>
            <Flex className="space-x-2" align="center">
              {NAVBAR_MENU_THEME.map(({ icon, value }, idx) => {
                const Icon = icon;
                return (
                  <Button
                    key={idx}
                    variant={theme == value ? 'filled' : 'outlined'}
                    color={theme == value ? 'primary' : 'default'}
                    className="p-0 w-7 h-7"
                    onClick={() => changeTheme(value)}
                  >
                    <Icon
                      width={18}
                      height={18}
                      className={theme == value ? 'text-white' : 'text-muted-foreground'}
                    />
                  </Button>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </PopoverContent>
    </Popover>
  );
};
