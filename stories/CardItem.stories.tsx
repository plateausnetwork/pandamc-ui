import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CardItem, IButtonProps } from '../src';

const meta: Meta = {
  title: 'Components',
  component: CardItem,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['rare', 'founder', 'limited', 'default'],
        defaultValue: 'full'
      }
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story<any> = args => <CardItem {...args} />
export const CardItemComponent = Template.bind({});

CardItemComponent.args = {
  orientation: 'full',
  buttonLabel: 'Send',
  description: 'Description shoes',
  imageSrc: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  title: 'Rio de Janeiro',
  typeLabel: 'exclusive',
  type: 'exclusive',
  left: '4 left',
  itemTitle: '244',
  itemDescription: 'USD 234,00',
  itemUpLeft: 'Ending in',
  itemDownLeft: '12h:45min:10s',
} as IButtonProps
