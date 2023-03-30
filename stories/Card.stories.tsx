import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card } from '../src';

const meta: Meta = {
  title: 'Components',
  component: Card,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
        defaultValue: 'vertical',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story<any> = (args) => <Card {...args} />;
export const CardComponent = Template.bind({});

CardComponent.args = {
  btnType: 'secondary',
  orientation: 'vertical',
  buttonLabel: 'Send',
  title: 'My shoes',
  description: 'Description shoes',
  imageSrc:
    'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  reverseOrder: false,
} as any;
