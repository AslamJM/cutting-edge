import { Store } from "@/api/types/store";
import { TransferRequestStatus } from "@/api/types/tr";
import { format } from "date-fns";
import { FC } from "react";
import { Badge } from "../ui/badge";
import { Link, useParams } from "@tanstack/react-router";

interface TRListItemProps {
  data: {
    id: number;
    request_date: string;
    transfer_status: TransferRequestStatus;
    to_store: Store;
  };
}

const TRListItem: FC<TRListItemProps> = ({ data }) => {
  const { id: storeId } = useParams({ from: "/_auth/store/$id" });

  return (
    <Link to={`/store/${storeId}/transfer-requests/${data.id}`}>
      <div className="grid grid-cols-3 my-2">
        <p>{format(data.request_date, "dd/MM/yyyy")}</p>
        <p>{data.to_store.name}</p>
        <Badge>{data.transfer_status}</Badge>
      </div>
    </Link>
  );
};

export default TRListItem;
