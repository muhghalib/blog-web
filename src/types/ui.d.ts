import type { ZodObject, infer as ZodInfer, ZodEffects } from 'zod';
import type { ControllerProps, FieldValues } from 'react-hook-form';

type BaseFieldStateTypes = {
  label?: string;
  description?: string;
  disabled?: boolean;
  defaultValue?: unknown;
  className?: string;
};

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
  [P in keyof TInferSchema]: BaseFieldStateTypes & FieldStateTypes;
};
