import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IInputProps } from '../src';
import { ArgsTable } from '@storybook/addon-docs';
import Input from '../src/components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
const meta: Meta = {
  title: 'Components',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IInputProps> = args =>{
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  return <Input errors={args.errors||'error'}
  label={args.label||"Label"}
  placeholder={args.placeholder||"My placeholder"}
  name={args.name||"nameField"}
  register={register}   />;
  
} 
<ArgsTable of={Input} />
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const InputComponent = Template.bind({});

InputComponent.args = {
  
} as IInputProps
