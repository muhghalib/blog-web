import type { FieldValues, SubmitHandler, UseFormProps, UseFormReturn } from 'react-hook-form';
import type { infer as ZodInfer, ZodObject, ZodEffects } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../ui/form';

interface AutoFormProps<
  TSchema extends ZodObject<FieldValues> | ZodEffects<ZodObject<FieldValues>>,
> {
  validationSchema: TSchema;
  onSubmit: SubmitHandler<ZodInfer<TSchema>>;
  children: (props: UseFormReturn<ZodInfer<TSchema>>) => React.ReactNode;
}

export const AutoForm = <
  TSchema extends ZodObject<FieldValues> | ZodEffects<ZodObject<FieldValues>>,
>({
  validationSchema,
  onSubmit,
  children,
  ...props
}: AutoFormProps<TSchema> & UseFormProps<ZodInfer<TSchema>>) => {
  const form = useForm<ZodInfer<TSchema>>({
    ...props,
    resolver: zodResolver(validationSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children(form)}</form>
    </Form>
  );
};
