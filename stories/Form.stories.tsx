import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IInputProps } from '../src';
import { ArgsTable } from '@storybook/addon-docs';
import Input from '../src/components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProps,Form } from '../src/components/Form';
import * as yup from "yup";
import { pt } from 'yup-locale-pt';
const meta: Meta = {
  title: 'Components',
  component: Form,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormProps> = args =>{
  const schema = {
    title: '',
    textButton: "Save",
    layout: "md:grid md:grid-flow-row md:grid-cols-1 md:grid-rows-3 md:gap-4",// tailwind style wrapper form grid
    fields: [
        {
            name: 'name',
            type: 'text',
            placeholder: "Place Ads name...",
            label: 'Name'
        },
        {
            name: 'content_id',
            type: 'text',
            label: 'Content Id'
        },
        {
            name: 'content_link',
            type: 'text',
            label: 'Content Link'
        }
    ],
    validation: yup.object().shape({
        name: yup.string().required().label('Name'),
       // endereco: yup.string().required(),
       // opcoes: yup.string().required()
    })
};
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  return <Form onSubmitForm={()=>{}} schema={schema}></Form>;
  
} 
<ArgsTable of={Form} />
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const FormComponent = Template.bind({});

FormComponent.args = {
  
} as FormProps
