import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Progress, IButtonProps } from '../src';

const meta: Meta = {
  title: 'Components',
  component: Progress,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['progress', 'radial'],
        defaultValue: 'radial',
      },
    },
    percent: {
      control: {
        type: 'select',
        options: [10, 20, 30, 50, 60, 80, 90, 100],
        defaultValue: 'radial',
      },
    },
    thickness: {
      control: {
        type: 'select',
        options: ['2px', '4px', '6px', '8px', '12px', '18px'],
        defaultValue: 'radial',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story<any> = (args) => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <Progress {...args} />
  </div>
);
export const ProgressComponent = Template.bind({});

ProgressComponent.args = {
  type: 'radial',
  percentage: 30,
  barColor: 'secondary',
  thickness: '12px',
  trackColor: 'primary',
} as unknown as IButtonProps;
