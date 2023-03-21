import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IButtonProps, Skelleton } from '../src';

const meta: Meta = {
  title: 'Components',
  component: Skelleton,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: [''],
        defaultValue: 'vertical',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;
const Template: Story<any> = (args) => <Skelleton {...args} />;
export const SkelletonComponent = Template.bind({});
