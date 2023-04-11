import React from 'react';
import { Meta, Story } from '@storybook/react';
import { INav, Nav } from '../src';
import { LogoContainer, TextLanguage, PipeLanguage } from '../src/styles';
// @ts-ignore
import myImage from './../src/assets/ether.png';

const meta: Meta = {
  title: 'Components',
  component: Nav,
  argTypes: {
    theme: {
      control: {
        defaultValue: 'success',
      },
    },
    backgroundColor: {
      control: 'color',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story<INav> = (args) => (
  <Nav {...args}>
    <LogoContainer>
      <div className="flex cursor-pointer">
        PT <PipeLanguage>|</PipeLanguage>
        <TextLanguage className="text-white">BR</TextLanguage>
      </div>
      <div className="cursor-pointer text-white">Connect Wallet</div>
    </LogoContainer>
  </Nav>
);
export const NavComponent = Template.bind({});

NavComponent.args = {
  // theme: 'success',
  // logo: () => {
  //   return (
  //     <div className="mr-[100px]">
  //       <img src={myImage} alt="Image" width="30" height="30" />
  //     </div>
  //   );
  // },
  // backgroundColor: `yellow`,
  // textColor: `yellow`,
  // menu: [
  //   {
  //     id: 1,
  //     title: 'Home',
  //     onClick: () => alert('Nft clicked'),
  //   },
  //   {
  //     id: 3,
  //     title: 'NFT',
  //     onClick: () => alert('Home clicked'),
  //   },
  //   {
  //     id: 4,
  //     title: 'Accommodations',
  //     onClick: () => alert('Accommodations clicked'),
  //   },
  // ],
} as any;
