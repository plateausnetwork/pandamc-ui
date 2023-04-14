import { createColumnHelper } from '@tanstack/react-table';
import { Ads } from './types/Ads';
import { IColumnDefinitions } from './index';

const columnHelper = createColumnHelper<Ads | any>();

export const formatAdsColumnDefs = (columnDefinitions: IColumnDefinitions[]) =>
  columnDefinitions.map((def) =>
    columnHelper.accessor(def.accessor, {
      id: def.id,
      header: def.header,
      cell: def.cell,
    })
  );
