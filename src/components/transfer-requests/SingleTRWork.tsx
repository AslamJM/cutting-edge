import { ShipTRinput, TransferRequest } from "@/api/types/tr";
import { FC, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formatDate } from "@/lib/helpers";
import { useParams } from "@tanstack/react-router";
import { Label } from "../ui/label";
import TrDetails from "./TrDetails";
import { usegrnSelectStore } from "@/store/trCreateStore";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shipTr } from "@/api/tr";
import { Loader2 } from "lucide-react";

interface SingleTRWorkProps {
  tr: TransferRequest;
}

const SingleTRWork: FC<SingleTRWorkProps> = ({ tr }) => {
  const {
    from_store,
    to_store,
    transfer_request_details,
    request_date,
    transfer_status,
    id,
  } = tr;

  const [goods, setGoods] = useState(false);

  const { id: storeId } = useParams({
    from: "/_auth/store/$id/transfer-requests/$trid",
  });

  const store = from_store.id === +storeId ? to_store : from_store;
  const type = store.id === +storeId ? "To" : "From";
  const qc = useQueryClient();

  const { addNew, clearAll, grnDetails } = usegrnSelectStore();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const input: ShipTRinput[] = [];
      grnDetails.forEach((detail, key) => {
        detail.forEach((d) => {
          input.push({
            transfer_request_details_id: key,
            grn_detail_id: d.grn_detail_id!,
            returned_quantity: d.returned_quantity,
            accepted_quantity: d.accepted_quantity,
          });
        });
      });

      await shipTr(id, input);
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["single_tr", id],
      });
    },
  });

  useEffect(() => {
    setGoods(
      transfer_request_details.some((trd) => trd.good_details.length > 0)
    );

    const initiateStore = () => {
      addNew(
        transfer_request_details.map((tr) => ({
          key: tr.id,
          details: tr.good_details.map((gd) => ({
            accepted_quantity: gd.accepted_quantity,
            grn_detail_id: gd.grn_detail_id,
            returned_quantity: gd.returned_quantity,
          })),
        }))
      );
    };

    const clearStore = () => clearAll();

    initiateStore();

    return clearStore;
  }, [transfer_request_details]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transfer Request #{id}</CardTitle>
        <CardDescription>{formatDate(request_date)}</CardDescription>
        <CardDescription>{transfer_status}</CardDescription>
      </CardHeader>
      <CardContent>
        <Label>{type}</Label>
        <p>{store.name}</p>
        <div className="space-y-2">
          {transfer_request_details.map((tr) => (
            <TrDetails key={tr.id} details={tr} type={type} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {type === "From" ? (
          <Button onClick={() => mutate()}>
            {isPending && <Loader2 className="mr-2" />}
            {goods ? "Update Transfer Request" : "Transfer Requested Goods"}
          </Button>
        ) : (
          <Button>Accept Goods</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default SingleTRWork;
