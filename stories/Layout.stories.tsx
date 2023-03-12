import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArgsTable } from '@storybook/addon-docs';
import { LayoutProps,Layout } from '../src/templates/Layout';

import { FaBuilding, FaPeopleArrows } from "react-icons/fa";
const meta: Meta = {
  title: 'Templates',
  component: Layout,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const menu = [
  {
      id: 1,
      title: "Company",
      path: "",
      icon: <FaBuilding size={14} className="text-th-primary-dark" />,
      visible: false,
      childrens: [
          {
              id: 1,
              title: "Ads",
              path: "/company/ads",
              visible: false
          }
      ]
  },
  {
      id: 2,
      title: "Oracle",
      path: "",
      icon: <FaPeopleArrows size={14} className="text-th-primary-dark" />,
      visible: false,
      childrens: [
          {
              id: 1,
              title: "Tasks",
              path: "/oracle/tasks",
              visible: true
          }
      ]
  },
  {
      id: 3,
      title: "Influencer",
      icon: <FaBuilding size={14} className="text-th-primary-dark" />,
      path: "",
      visible: false,
      childrens: [
          {
              id: 1,
              title: "Promotions",
              path: "/influencer/promotions",
              visible: true
          }
      ]
  }
]
const Template: Story<LayoutProps> = args =>{
  
  return <Layout title='Meu novo Sistema' menu={menu}>

  </Layout>;
  
} 
<ArgsTable of={Layout} />
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const LayoutTemplate = Template.bind({});

LayoutTemplate.args = {
  menu
} as LayoutProps
