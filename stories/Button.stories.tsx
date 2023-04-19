import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';
import { ArgsTable } from '@storybook/addon-docs';
import { IButtonProps } from '../src/components/Button';
const meta: Meta = {
  title: 'Components',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);
<ArgsTable of={Button} />;
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ButtonComponent = Template.bind({});
