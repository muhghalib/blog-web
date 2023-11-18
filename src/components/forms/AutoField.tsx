import type { infer as ZodInfer } from 'zod';
import type { Control, ControllerProps } from 'react-hook-form';
import type { FieldSchemaTypes, FieldStateTypes } from '@/types/utils';

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

interface AutoFieldProps<TFieldSchema extends FieldSchemaTypes<any>> {
  fieldSchema: TFieldSchema;
  control: TFieldSchema extends FieldSchemaTypes<infer U> ? Control<ZodInfer<U>> : never;
}

export const AutoField = <TFieldSchema extends FieldSchemaTypes<any>>(
  props: AutoFieldProps<TFieldSchema>,
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
            render={({ field, fieldState, formState }) => (
              <FormItem className="w-full space-y-1">
                {value.label && <FormLabel>{value.label}</FormLabel>}
                <RenderField
                  field={field}
                  fieldState={fieldState}
                  formState={formState}
                  {...value}
                />
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

const RenderField = <TFieldSchema extends FieldSchemaTypes<any>>(
  props: Parameters<
    ControllerProps<TFieldSchema extends FieldSchemaTypes<infer U> ? ZodInfer<U> : never>['render']
  >['0'] &
    FieldStateTypes,
) => {
  const { field, fieldState, formState } = props;

  switch (props.type) {
    case 'text':
      return (
        <FormControl>
          <Input type={props.type} placeholder={props.placeholder} {...field} />
        </FormControl>
      );
    case 'date':
      return (
        <FormControl>
          <Input type={props.type} placeholder={props.placeholder} {...field} />
        </FormControl>
      );
    case 'email':
      return (
        <FormControl>
          <Input type={props.type} placeholder={props.placeholder} {...field} />
        </FormControl>
      );
    case 'password':
      return (
        <FormControl>
          <Input type={props.type} placeholder={props.placeholder} {...field} />
        </FormControl>
      );
    case 'select':
      return (
        <Select name={field.name} onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
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
