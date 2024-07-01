import { Store } from "@/api/types/store";
import { TransferRequestStatus } from "@/api/types/tr";
import { format } from "date-fns";
import { FC } from "react";
import { Badge } from "../ui/badge";
import { Link } from "@tanstack/react-router";

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
    <Link to={`/store/${storeId}/transfer-requests/${data.id}`}>
      <div className="grid grid-cols-3 my-2">
        <p>{format(data.request_date, "dd/MM/yyyy")}</p>
        <p>{data.from_store.name}</p>
        <Badge>{data.transfer_status}</Badge>
      </div>
    </Link>
  );
};

export default TRListItemTo;
