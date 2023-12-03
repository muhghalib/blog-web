'use client';

import Link from 'next/link';

import { AutoField } from '@/components/forms/AutoField';
import { AutoForm } from '@/components/forms/AutoForm';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Typography } from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';

import { LOGIN_FORM_FIELD_SCHEMA, LOGIN_FORM_VALIDATION_SCHEMA } from '@/constant/forms/login';
import { LOGIN_WITH_ACTION, LOGIN_GREETING } from '@/constant/contents/pages/login';
import { APP_LINK } from '@/constant/utils/appLink';
import { pick } from 'lodash';

export const LoginForm = () => {
  return (
    <Card className="flex flex-col w-full max-w-lg p-6 space-y-4 border-none shadow-none">
      <Flex direction="col" className="w-full space-y-2" align="center" justify="center">
        <Link href={APP_LINK.home}>
          <Typography size="4xl" weight="bold">
            Metablog
          </Typography>
        </Link>
        <Typography size="sm">{LOGIN_GREETING}</Typography>
      </Flex>
      <AutoForm validationSchema={LOGIN_FORM_VALIDATION_SCHEMA} onSubmit={(v) => console.log(v)}>
        {({ control }) => (
          <Flex direction="col" className="w-full space-y-5">
            <Flex direction="col" className="w-full space-y-3">
              <AutoField
                fieldSchema={pick(LOGIN_FORM_FIELD_SCHEMA, ['username'])}
                control={control}
              />
              <Flex direction="col" className="w-full space-y-1">
                <AutoField
                  fieldSchema={pick(LOGIN_FORM_FIELD_SCHEMA, ['password'])}
                  control={control}
                />
                <Link href="/auth/forgot-password" className="ml-auto">
                  <Typography
                    size="sm"
                    weight="regular"
                    className="hover:underline underline-offset-2"
                  >
                    forgot your password?
                  </Typography>
                </Link>
              </Flex>
            </Flex>
            <Button className="w-full" type="submit" variant="filled">
              Sign in
            </Button>
          </Flex>
        )}
      </AutoForm>
      <Flex className="w-full space-x-2" align="center">
        <Separator className="shrink" />
        <Typography color="muted" size="sm">
          OR
        </Typography>
        <Separator className="shrink" />
      </Flex>
      <Flex direction="col" className="w-full space-y-2">
        {LOGIN_WITH_ACTION.map(({ icon }, idx) => {
          const Icon = icon;

          return (
            <Button key={idx} variant="outlined" className="w-full">
              Continue with <Icon width={20} height={20} className="ml-3" />
            </Button>
          );
        })}
      </Flex>
      <Typography className="w-full" size="sm" color="muted">
        Doesn&apos;t have an account yet?{' '}
        <Link href="/auth/register">
          <Typography size="sm">Sign up</Typography>
        </Link>
      </Typography>
    </Card>
  );
};
