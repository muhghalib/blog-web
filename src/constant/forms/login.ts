import type { FieldSchemaTypes } from '@/types/ui';

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
    className: 'py-6',
  },
  password: {
    label: 'password',
    type: 'password',
    placeholder: 'your password...',
    className: 'py-6',
  },
};
