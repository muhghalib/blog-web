import type { FieldSchemaTypes } from '@/types/utils';

import * as z from 'zod';

export const REGISTER_FORM_VALIDATION_SCHEMA = z
  .object({
    name: z.string().min(1, 'name field is required'),
    email: z.string().min(1, 'email field is required').email('email is not valid'),
    username: z.string().min(1, 'username field is required'),
    password: z.string().min(1, 'password field is required'),
    confirmPassword: z.string().min(1, 'confirm password field is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords doesn`t match',
    path: ['confirmPassword'],
  });

export const REGISTER_FORM_FIELD_SCHEMA: FieldSchemaTypes<typeof REGISTER_FORM_VALIDATION_SCHEMA> =
  {
    name: {
      label: 'name',
      type: 'text',
      placeholder: 'your name...',
    },
    email: {
      label: 'email',
      type: 'text',
      placeholder: 'your email...',
    },
    username: {
      label: 'username',
      type: 'text',
      placeholder: 'your username...',
    },
    password: {
      label: 'password',
      type: 'password',
      placeholder: 'your password...',
    },
    confirmPassword: {
      label: 'password',
      type: 'password',
      placeholder: 'your password...',
    },
  };
