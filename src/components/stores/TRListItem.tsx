import { Store } from "@/api/types/store";
import { TransferRequestStatus } from "@/api/types/tr";
import { format } from "date-fns";
import { FC } from "react";
import { Badge } from "../ui/badge";

interface TRListItemProps {
  data: {
    id: number;
    request_date: string;
    transfer_status: TransferRequestStatus;
    to_store: Store;
  };
}

const TRListItem: FC<TRListItemProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 my-2">
      <p>{format(data.request_date, "dd/MM/yyyy")}</p>
      <p>{data.to_store.name}</p>
      <Badge>{data.transfer_status}</Badge>
    </div>
  );
};

export default TRListItem;