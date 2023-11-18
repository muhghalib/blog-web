import type { ReactNode } from 'react';
import type { ZodObject, infer as ZodInfer, ZodEffects } from 'zod';
import type { FieldValues, ControllerProps } from 'react-hook-form';

import { InputProps } from '@/components/ui/input';

type CommonFieldStateTypes = {
  type: 'text' | 'date' | 'email' | 'password';
  placeholder?: string;
};

type SelectFieldStateTypes = {
  type: 'select';
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
};

type FieldStateTypes = CommonFieldStateTypes | SelectFieldStateTypes;

type FieldSchemaTypes<
  TFieldSchema extends ZodObject<FieldValues> | ZodEffects<ZodObject<FieldValues>>,
  TInferSchema extends FieldValues = ZodInfer<TFieldSchema>,
> = {
  [P in keyof TInferSchema]: {
    label?: string;
    description?: string;
    disabled?: boolean;
    defaultValue?: unknown;
  } & FieldStateTypes;
};
