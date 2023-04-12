//./components/UserColumnDefs.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { Ads } from "./types/Ads";

// createColumnHelper helps us create columns with maximum type safety.
// we assign the type person so that it knows the structure for our data
const columnHelper = createColumnHelper<Ads>();
export const adsColumnDefs = [
  columnHelper.accessor((row) => row.name, {
    id: "name",
    cell: (info) => info.getValue(),
    header: (info) => <span>Ads Name</span>,
  }),
  columnHelper.accessor((row) => row.content_link, {
    id: "content_link",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Content Link</span>,
  }),
  columnHelper.accessor((row) => row.content_id, {
    id: "content_id",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Content Id</span>,
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    cell: (info) => <span>{info.getValue() ? "Active":"Closed"}</span>,
    header: () => <span>Status</span>,
  })
];