import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Hero, Button } from '../src';
import { ArgsTable } from '@storybook/addon-docs';
import S from './../src/styles/hero.styles';
import { IHeroProps } from '../src/components/Hero';

const meta: Meta = {
  title: 'Components',
  component: Hero,
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

const Template: Story<IHeroProps> = (args) => (
  <Hero {...args}>
    <>
      <S.HeroTitle>The best place to travel with crypto</S.HeroTitle>
      <S.HeroSubtitle>
        Welcome to the first NFT blockchain-based travel agency in the world
      </S.HeroSubtitle>
      <div className="flex">
        <Button btntype="base" className="mr-2">
          The best place to travel with crypto
        </Button>
        <Button btntype="base">Explore Destinations</Button>
      </div>
    </>
  </Hero>
);
<ArgsTable of={Hero} />;
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const HeroComponent = Template.bind({});
