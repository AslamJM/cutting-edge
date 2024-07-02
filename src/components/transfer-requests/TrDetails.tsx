import { Product } from "@/api/types/product";
import { TransferGoodDetails } from "@/api/types/tr";
import { FC, useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { PlusCircleIcon, XIcon } from "lucide-react";
import { usegrnSelectStore } from "@/store/trCreateStore";
import SingleGrnItem from "./SingleGrnItem";

interface TrDetailsProps {
  details: {
    id: number;
    product: Product;
    good_details: TransferGoodDetails[];
    requested_quantity: number;
  };
  type: "From" | "To";
}

const TrDetails: FC<TrDetailsProps> = ({ details, type }) => {
  const { product, good_details, requested_quantity, id } = details;
  const [createMode, setCreateMode] = useState(false);

  const { pushOne, grnDetails, clearTransferDetail } = usegrnSelectStore();

  const addGrn = () => {
    pushOne(id);
  };

  const batches = grnDetails.get(id);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Product</Label>
          <p className="text-sm text-muted-foreground">
            {product.product_name}
          </p>
        </div>
        <div>
          <Label>Requested Quantity</Label>
          <p className="text-sm text-muted-foreground">{requested_quantity}</p>
        </div>
      </div>
      <div className="py-4">
        {createMode ? (
          <div>
            <div>
              <Button variant="ghost" onClick={() => addGrn()}>
                <PlusCircleIcon className="mr-2" /> Add Batch
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setCreateMode(false);
                  clearTransferDetail(id);
                }}
              >
                <XIcon className="mr-2" /> Cancel
              </Button>
            </div>
            <div>
              {batches &&
                batches.map((b, i) => (
                  <SingleGrnItem
                    key={`batch-${id}-${i}`}
                    gd={b}
                    type={type}
                    productId={product.id}
                    transferDetailId={id}
                    index={i}
                  />
                ))}
            </div>
          </div>
        ) : (
          <div>
            {good_details.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No transfers were made
              </p>
            )}
          </div>
        )}
      </div>
      {!createMode && (
        <div>
          <Button onClick={() => setCreateMode(true)}>Create Transfer</Button>
        </div>
      )}
    </div>
  );
};

export default TrDetails;
