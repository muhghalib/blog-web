import type { FieldSchemaTypes } from '@/types/utils';

import * as z from 'zod';

export const LOGIN_FORM_VALIDATION_SCHEMA = z.object({
  username: z.string().min(1, 'username field is required'),
  password: z.string().min(1, 'password field is required'),
});

export const LOGIN_FORM_FIELD_SCHEMA: FieldSchemaTypes<typeof LOGIN_FORM_VALIDATION_SCHEMA> = {
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
};
