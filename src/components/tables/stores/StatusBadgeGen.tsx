import { TransferRequestStatus } from "@/api/types/tr";
import { Badge } from "@/components/ui/badge";

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

export default BadgeGen;
