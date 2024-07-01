import { GrnSelect, usegrnSelectStore } from "@/store/trCreateStore";
import { FC, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useQuery } from "@tanstack/react-query";
import { batchesQO } from "@/query/products";
import { Check, X } from "lucide-react";

interface SingleGrnItemProps {
  gd: GrnSelect;
  type: "From" | "To";
  productId: number;
  transferDetailId: number;
  index: number;
}

const SingleGrnItem: FC<SingleGrnItemProps> = ({
  gd,
  type,
  productId,
  transferDetailId,
  index,
}) => {
  const [checked, setChecked] = useState(false);
  const [batch, setBatch] = useState(gd.grn_detail_id ? gd.grn_detail_id : "");
  const [acc, setAcc] = useState(
    gd.accepted_quantity ? gd.accepted_quantity : ""
  );
  const [rt, setRt] = useState(
    gd.returned_quantity ? gd.returned_quantity : ""
  );
  const { data, isLoading } = useQuery(batchesQO(productId));

  const { updateOne, removeOne, grnDetails } = usegrnSelectStore();

  const pushItem = () => {
    updateOne(transferDetailId, index, {
      accepted_quantity: +acc,
      returned_quantity: +rt,
      grn_detail_id: +batch,
    });
    setChecked(true);
  };

  return (
    <div className="flex flex-col items-end gap-4 md:flex-row">
      <div className="grid flex-grow grid-cols-3 gap-4">
        <div>
          {type === "From" ? (
            <>
              <Label>Select Batch</Label>
              <Select
                value={batch.toString()}
                onValueChange={(v) => setBatch(v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Batch" />
                </SelectTrigger>

                <SelectContent>
                  {isLoading ? (
                    <div>loading....</div>
                  ) : (
                    <>
                      {data?.data.map((c) => (
                        <SelectItem key={c.id} value={c.id.toString()}>
                          {c.batch_number}
                        </SelectItem>
                      ))}
                    </>
                  )}
                </SelectContent>
              </Select>
            </>
          ) : (
            <>
              <Label>Batch</Label>
              {/* <p>{data && data.data && data.data.find(d=>d.id===)}</p> */}
            </>
          )}
        </div>
        <div>
          <Label>Accepted Quantity</Label>
          {checked ? (
            <p>{gd.accepted_quantity}</p>
          ) : (
            <Input value={acc} onChange={(e) => setAcc(e.target.value)} />
          )}
        </div>
        <div>
          <Label>Returned Quantity</Label>
          {type === "From" || checked ? (
            <p>{gd.returned_quantity}</p>
          ) : (
            <Input value={rt} onChange={(e) => setRt(e.target.value)} />
          )}
        </div>
      </div>
      <div className="space-x-4">
        <Button size="icon" variant="outline" onClick={() => pushItem()}>
          <Check />
        </Button>
        <Button
          size="icon"
          variant="destructive"
          onClick={() => removeOne(transferDetailId, index)}
        >
          <X />
        </Button>
      </div>
    </div>
  );
};

export default SingleGrnItem;
