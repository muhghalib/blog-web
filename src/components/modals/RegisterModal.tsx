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

import {
  REGISTER_FORM_FIELD_SCHEMA,
  REGISTER_FORM_VALIDATION_SCHEMA,
} from '@/constant/forms/register';
import { Grid } from '../ui/grid';

interface RegisterModalProps {
  trigger: JSX.Element;
}

export const RegisterModal = React.forwardRef<
  React.ElementRef<typeof DialogTrigger>,
  RegisterModalProps
>(({ trigger }, ref) => {
  return (
    <Dialog modal>
      <DialogTrigger ref={ref} asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <Flex direction="col" className="w-full space-y-3">
          <Typography weight="semibold" size="4xl">
            Register
          </Typography>
          <Typography size="sm" color="muted">
            Welcome to, metaBlog
          </Typography>
        </Flex>
        <AutoForm
          validationSchema={REGISTER_FORM_VALIDATION_SCHEMA}
          onSubmit={(v) => console.log(v)}
        >
          {({ control }) => (
            <Flex direction="col" className="w-full space-y-5">
              <Grid cols={1} md={2} className="w-full gap-3">
                <AutoField fieldSchema={REGISTER_FORM_FIELD_SCHEMA} control={control} />
              </Grid>
              <Button size="lg" className="w-full" type="submit" variant="filled" color="primary">
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
});

RegisterModal.displayName = 'RegisterModal';
