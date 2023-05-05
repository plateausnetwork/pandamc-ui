import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Footer } from '../src';

const meta: Meta = {
  title: 'Components',
  component: Footer,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal', 'full'],
        defaultValue: 'full',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story<any> = (args) => <Footer {...args} />;
export const FooterComponent = Template.bind({});

FooterComponent.args = {
  btnType: 'secondary',
  orientation: 'vertical',
  buttonLabel: 'Send',
  title: 'Shoes',
  description: 'Description shoes',
  image:
    'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  reverseOrder: false,
} as any;
