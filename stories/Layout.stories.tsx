import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IInputProps } from '../src';
import { ArgsTable } from '@storybook/addon-docs';
import Input from '../src/components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { pt } from 'yup-locale-pt';
import Layout, { LayoutProps } from '../src/templates/Layout';
const meta: Meta = {
  title: 'Components',
  component: Layout,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LayoutProps> = args =>{
  const menu=[
    {
        id: 1,
        title: "Company",
        path: "",
        visible: true,
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
        visible: true,
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
        path: "",
        visible: true,
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
  return  <Layout title="asd" menu={menu} openSidebar={false} setOpenSidebar={()=>{console.log("OK")}}>
    <p>My template</p>
  </Layout>;
  
} 
<ArgsTable of={Layout} />
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const LayoutComponent = Template.bind({});

LayoutComponent.args = {
  openSidebar:false,
  menu:[
    {
        id: 1,
        title: "Company",
        path: "",
        visible: true,
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
        visible: true,
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
        path: "",
        visible: true,
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
} as LayoutProps
