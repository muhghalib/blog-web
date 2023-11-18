'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Flex } from '../ui/flex';
import { AutoForm } from '../forms/AutoForm';
import { AutoField } from '../forms/AutoField';
import { Separator } from '../ui/separator';
import { Typography } from '../ui/typography';
import { Github } from 'lucide-react';

import { LOGIN_FORM_FIELD_SCHEMA, LOGIN_FORM_VALIDATION_SCHEMA } from '@/constant/forms/login';

interface LoginModalProps {
  trigger: JSX.Element;
}

export const LoginModal = React.forwardRef<React.ElementRef<typeof DialogTrigger>, LoginModalProps>(
  ({ trigger }, ref) => {
    return (
      <Dialog>
        <DialogTrigger ref={ref} asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <Flex direction="col" className="w-full space-y-3">
            <Typography weight="semibold" size="4xl">
              Login
            </Typography>
            <Typography size="sm" color="muted">
              Hi, welcome back to our website
            </Typography>
          </Flex>
          <AutoForm
            validationSchema={LOGIN_FORM_VALIDATION_SCHEMA}
            onSubmit={(v) => console.log(v)}
          >
            {({ control }) => (
              <Flex direction="col" className="w-full space-y-5">
                <Flex direction="col" className="w-full space-y-3">
                  <AutoField fieldSchema={LOGIN_FORM_FIELD_SCHEMA} control={control} />
                </Flex>
                <Button className="w-full" type="submit" variant="filled" color="primary">
                  Sign in
                </Button>
                <Separator />
                <Flex direction="col" className="w-full">
                  <Button type="button" variant="outlined" className="justify-center w-full">
                    Continue with <Github width={20} height={20} className="ml-2 text-foreground" />
                  </Button>
                </Flex>
              </Flex>
            )}
          </AutoForm>
        </DialogContent>
      </Dialog>
    );
  },
);

LoginModal.displayName = 'LoginModal';
