import { TransferGoodDetails } from "@/api/types/tr";
import { FC, useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Edit, X } from "lucide-react";
import { usegrnSelectStore } from "@/store/trCreateStore";

interface SingleShippedItemProps {
  gd: TransferGoodDetails;
  type: "From" | "To";
  trDetailsId: number;
  index: number;
}

const SingleShippedItem: FC<SingleShippedItemProps> = ({
  gd,
  type,
  trDetailsId,
  index,
}) => {
  const [rtamount, setRtamount] = useState(gd.returned_quantity);
  const [editMode, setEditMode] = useState(false);
  const { accepted_quantity, returned_quantity, grn_detail } = gd;

  const { updateOne, addToUpdated, removeUpdated } = usegrnSelectStore();

  const onUpdate = () => {
    updateOne(trDetailsId, index, { returned_quantity: rtamount });
    addToUpdated({ key: trDetailsId, grn_detail_id: gd.grn_detail_id });
  };

  const onClose = () => {
    removeUpdated({ grn_detail_id: gd.grn_detail_id, key: trDetailsId });
    setRtamount(returned_quantity);
    setEditMode(false);
  };

  return (
    <TableRow>
      <TableCell>{grn_detail.batch_number}</TableCell>
      <TableCell>{accepted_quantity}</TableCell>
      <TableCell>
        {!editMode ? (
          <div className="flex items-center">
            <span className="mr-4">{returned_quantity}</span>
            {type === "To" && (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setEditMode(true)}
              >
                <Edit className="w-4 h-4 " />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Input
              value={rtamount}
              onChange={(e) => setRtamount(+e.target.value)}
              className="w-32"
            />
            <Button size="icon" variant="ghost" onClick={() => onUpdate()}>
              <Check className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => onClose()}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
      </TableCell>
    </TableRow>
  );
};

export default SingleShippedItem;
