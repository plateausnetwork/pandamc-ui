import { Meta, Story } from '@storybook/react';
import { Grid, IButtonProps } from '../src';

const meta: Meta = {
  title: 'Components',
  component: Grid,
  argTypes: {
    cols: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        defaultValue: 'vertical',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story<any> = (args) => (
  <Grid {...args}>
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
    <div>07</div>
    <div>08</div>
    <div>09</div>
  </Grid>
);
export const GridComponent = Template.bind({});

GridComponent.args = {
  cols: 7,
} as IButtonProps | any;
