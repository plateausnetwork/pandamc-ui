import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thing, Props, Button, IButtonProps } from '../src';
import { IButton } from '../src/components/Button/styles';
import { ArgsTable } from '@storybook/addon-docs';
const meta: Meta = {
  title: 'Components',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    btnType:{
      options:["primary","secondary"]
    } 
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IButtonProps> = args => <Button {...args}  >Button</Button>;
<ArgsTable of={Button} />
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  btnType:"secondary"
} as IButtonProps
