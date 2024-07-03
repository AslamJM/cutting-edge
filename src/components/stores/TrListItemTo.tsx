import { Store } from "@/api/types/store";
import { TransferRequestStatus } from "@/api/types/tr";
import { format } from "date-fns";
import { FC } from "react";
import { Badge } from "../ui/badge";
import { Link } from "@tanstack/react-router";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";

interface TRListItemProps {
  data: {
    id: number;
    request_date: string;
    transfer_status: TransferRequestStatus;
    from_store: Store;
  };
  storeId: number;
}

const TRListItemTo: FC<TRListItemProps> = ({ data, storeId }) => {
  return (
    <TableRow>
      <TableCell>
        <Link to={`/store/${storeId}/transfer-requests/${data.id}`}>
          <Button variant="link">
            {format(data.request_date, "dd/MM/yyyy")}
          </Button>
        </Link>
      </TableCell>
      <TableCell>{data.from_store.name}</TableCell>
      <TableCell>
        <BadgeGen status={data.transfer_status} />
      </TableCell>
    </TableRow>
  );
};

export default TRListItemTo;

const BadgeGen = ({ status }: { status: TransferRequestStatus }) => {
  if (status === "PENDING") {
    return (
      <Badge variant="outline" className="bg-yellow-200 border-yellow-200">
        {status}
      </Badge>
    );
  }
  if (status === "CANCELLED") {
    return <Badge variant="destructive">{status}</Badge>;
  }

  if (status === "SHIPPED") {
    return (
      <Badge variant="outline" className="bg-blue-500 border-blue-500">
        {status}
      </Badge>
    );
  }

  if (status === "RECIEVED") {
    return (
      <Badge variant="outline" className="bg-green-500 border-green-500">
        {status}
      </Badge>
    );
  }
};
