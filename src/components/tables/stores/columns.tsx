import { TransferRequestTableItem } from "@/api/types/store";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import ActionMenu from "../items/ActionMenu";
import BadgeGen from "./StatusBadgeGen";
import { TransferRequestStatus } from "@/api/types/tr";

export const storeTRcolumns: ColumnDef<TransferRequestTableItem>[] = [
  {
    accessorKey: "request_date",
    header: "Request Date",
    cell: ({ cell }) => {
      return format(cell.getValue() as string, "dd/MM/yyyy");
    },
  },
  {
    accessorKey: "store",
    header: "Store",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ cell }) => {
      return <BadgeGen status={cell.getValue() as TransferRequestStatus} />;
    },
  },
  {
    accessorKey: "updated_at",
    header: "Last updated",
    cell: ({ cell }) => {
      return format(cell.getValue() as string, "dd/MM/yyyy hh:mm");
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const og = row.original;
      return <ActionMenu id={og.id} />;
    },
  },
];
