import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import React, { ButtonHTMLAttributes } from 'react';
import Pagination from './Pagination';
import { formatAdsColumnDefs } from './FormatAdsColumnDefs';
import S from './styles';

export interface ITableProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  columns: IColumnDefinitions[];
  typeTable:
    | 'table'
    | 'table-zebra'
    | 'active'
    | 'hover'
    | 'table-normal'
    | 'table-compact';
  data: {
    id: number;
    name: string;
    content_link: string;
    content_id: string;
    status: boolean;
  }[];
}

export interface IColumnDefinitions {
  accessor: (row: any) => any;
  id: string;
  header: () => JSX.Element;
  cell: (info: any) => JSX.Element;
}
export const Table = ({ data, columns, typeTable }: ITableProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    columns: formatAdsColumnDefs(columns) ?? [],
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const headers = table.getFlatHeaders();
  const rows = table.getRowModel().rows;

  return (
    <div>
      <S.Table typeTable={typeTable || 'table-zebra'}>
        <thead>
          <tr>
            {headers.map((header) => {
              const direction = header.column.getIsSorted();
              const arrow: any = {
                asc: '🔼',
                desc: '🔽',
              };
              const sort_indicator = direction && arrow[direction];
              return (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer flex gap-4"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {/* 9. render the sorting indicator */}
                      {direction && <span>{sort_indicator}</span>}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </S.Table>
      <Pagination table={table} />
    </div>
  );
};
