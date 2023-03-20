import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Landing } from '../src';
import { ArgsTable } from '@storybook/addon-docs';
const meta: Meta = {
  title: 'Templates',
  component: Landing,
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

const Template: Story<any> = args => <Landing {...args} headerBgImage="https://source.unsplash.com/random/?Cryptocurrency" ></Landing>;
<ArgsTable of={Landing} />
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const LandingComponent = Template.bind({});
