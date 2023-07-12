import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { ZodTypeDef, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode, useEffect } from 'react';

type FormProps<IFormValues extends FieldValues, Schema> = {
  children: (methods: UseFormReturn<IFormValues>) => ReactNode;
  schema?: Schema;
  onSubmit: SubmitHandler<IFormValues>;
};

const Form = <
  IFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >,
>({
  children,
  schema,
  onSubmit,
}: FormProps<IFormValues, Schema>) => {
  const methods = useForm<IFormValues>({
    resolver: schema && zodResolver(schema),
  });

  useEffect(() => {
    console.log('methods = >', methods);
  }, [methods]);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <>{children(methods)}</>
    </form>
  );
};

export default Form;
