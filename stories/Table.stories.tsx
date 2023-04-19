import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table } from '../src';
import { ITableProps } from '../src/components/Table';
import { ads } from '../src/data/ads';

const columnDefinitions = [
  {
    accessor: (row: { name: string }) => row.name,
    id: 'name',
    header: () => <span>Ads Name</span>,
    cell: (info: any) => info.getValue(),
  },
  {
    accessor: (row: { content_link: string }) => row.content_link,
    id: 'content_link',
    header: () => <span>Content Link</span>,
    cell: (info: any) => <span>{info.getValue()}</span>,
  },
  {
    accessor: (row: { content_id: string }) => row.content_id,
    id: 'content_id',
    header: () => <span>Content Id</span>,
    cell: (info: any) => <span>{info.getValue()}</span>,
  },
  {
    accessor: (row: { status: boolean }) => row.status,
    id: 'status',
    header: () => <span>Status</span>,
    cell: (info: any) => <span>{info.getValue() ? 'Active' : 'Closed'}</span>,
  },
];

const meta: Meta = {
  title: 'Components',
  component: Table,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story<any> = (args) => <Table {...args} />;
export const TableComponent = Template.bind({});

TableComponent.args = {
  typeTable: 'table-zebra',
  columns: columnDefinitions,
  data: ads,
} as ITableProps;
