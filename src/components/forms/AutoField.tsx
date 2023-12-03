import type { infer as ZodInfer } from 'zod';
import type { Control, ControllerProps, FieldValues } from 'react-hook-form';
import type { BaseFieldStateTypes, FieldSchemaTypes, FieldStateTypes } from '@/types/ui';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface AutoFieldProps<
  TFieldSchema extends FieldSchemaTypes<any>,
  TControl extends Control<any>,
> {
  fieldSchema: TFieldSchema;
  control: TControl;
}

export const AutoField = <
  TFieldSchema extends FieldSchemaTypes<any>,
  TControl extends Control<any>,
>(
  props: AutoFieldProps<TFieldSchema, TControl>,
) => {
  return (
    <>
      {Object.entries(props.fieldSchema).map(([key, value], idx) => {
        return (
          <FormField
            key={idx}
            name={key}
            defaultValue={value.defaultValue}
            disabled={value.disabled}
            control={props.control}
            render={({ field }) => (
              <FormItem className="w-full space-y-1">
                {value.label && <FormLabel>{value.label}</FormLabel>}
                <RenderField field={field} {...value} />
                {value.description && <FormDescription>{value.description}</FormDescription>}
                <FormMessage />
              </FormItem>
            )}
          />
        );
      })}
    </>
  );
};

const RenderField = <
  TFieldSchema extends FieldSchemaTypes<any>,
  TInferFieldSchema extends FieldValues = TFieldSchema extends FieldSchemaTypes<infer U>
    ? ZodInfer<U>
    : never,
>(
  props: Pick<Parameters<ControllerProps<TInferFieldSchema>['render']>['0'], 'field'> &
    FieldStateTypes &
    Omit<BaseFieldStateTypes, 'defaultValues' | 'disabled'>,
) => {
  const { field } = props;

  switch (props.type) {
    case 'text':
      return (
        <FormControl>
          <Input
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            {...field}
          />
        </FormControl>
      );
    case 'date':
      return (
        <FormControl>
          <Input
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            {...field}
          />
        </FormControl>
      );
    case 'email':
      return (
        <FormControl>
          <Input
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            {...field}
          />
        </FormControl>
      );
    case 'password':
      return (
        <FormControl>
          <Input
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            {...field}
          />
        </FormControl>
      );
    case 'select':
      return (
        <Select name={field.name} onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl className={props.className}>
            <SelectTrigger>
              <SelectValue placeholder={props.placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {props.options.map(({ label, value }, idx) => {
              return (
                <SelectItem key={idx} value={value}>
                  {label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      );
  }
};
